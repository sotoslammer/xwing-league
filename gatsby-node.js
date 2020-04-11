const { GoogleSpreadsheet } = require("google-spreadsheet")
const creds = require("./credentials.json")

const spreadSheetId = "1b5QNn5A8Y5YwFCV3Pc5x9TuLqibgcbp-N_bDUiizvCE"

// exports.onPostBootstrap = async () => {
//   try {
//     const doc = new GoogleSpreadsheet(spreadSheetId)
//     await doc.useServiceAccountAuth(creds)
//     await doc.loadInfo(true)
//     console.log(doc)
//     const playerSheet = doc.sheetsByIndex[0]
//     await playerSheet.loadHeaderRow()
//     console.log(playerSheet.headerValues)
//     const rows = await playerSheet.getRows()
//     console.log(rows)
//   } catch (err) {
//     return console.log("The API returned an error: " + err)
//   }
// }

async function initSpreadSheet() {
  try {
    const doc = new GoogleSpreadsheet(spreadSheetId)
    await doc.useServiceAccountAuth(creds)
    await doc.loadInfo(true)
    return doc
  } catch (err) {
    return console.log("The API returned an error: " + err)
  }
}

const getPlayerSheet = (doc) => doc.sheetsByIndex[0]
const getGamesSheet = (doc) => doc.sheetsByIndex[1]


const getData = async (sheet) => await sheet.getRows();

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest, }) => {
  const { createNode } = actions

  const doc = await initSpreadSheet();

  const playerSheet = getPlayerSheet(doc);
  const playerData = await getData(playerSheet);
  const gamesSheet = getGamesSheet(doc);
  const gamesData = await getData(gamesSheet);
  const gamesByPlayer = gamesData.reduce((accum, game) => {
    if (accum.hasOwnProperty(game.playerOne)) {
      accum[`${game.playerOne}`] = [...accum[`${game.playerOne}`], game];
    } else {
      accum[`${game.playerOne}`] = [game];
    }

    if (accum.hasOwnProperty(game.playerTwo)) {
      accum[`${game.playerTwo}`] = [...accum[`${game.playerTwo}`], game];
    } else {
      accum[`${game.playerTwo}`] = [game];
    }

    return accum;
  }, {})

  playerData.map((player) => {
    const playerGameNodes = gamesByPlayer[`${player.id}`].map((game, i) => ({
      id: createNodeId(i),
      parent: null,
      internal: {
        type: 'game',
        contentDigest: createContentDigest(game)
      },
      children: [],
      playerOne: game.playerOne,
      playerOneScore: game.playerOneScore,
      playerTwo: game.playerTwo,
      playerTwoScore: game.playerTwoScore,
      date: game.date
    }))
    const playerNode = {
      id: player.id,
      parent: null,
      internal: {
        type: `player`, // name of the graphQL query --> allItem {}
        contentDigest: createContentDigest(player),
      },
      children: playerGameNodes.map(game => game.id),
      first: player.first,
      last: player.last
    }

    createNode(playerNode)
    playerGameNodes.forEach(gameNode => createNode(gameNode));
  })
}
