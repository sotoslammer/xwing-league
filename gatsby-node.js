const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require("./credentials.json");

const spreadSheetId = "1b5QNn5A8Y5YwFCV3Pc5x9TuLqibgcbp-N_bDUiizvCE"

exports.onPostBootstrap = async () => {
  try {
    const doc = new GoogleSpreadsheet(spreadSheetId);
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo(true);
    // const rows = res.data.values;
    console.log(doc)
    const playerSheet = doc.sheetsByIndex[0]
    await playerSheet.loadHeaderRow();
    console.log(playerSheet.headerValues);
    const rows = await playerSheet.getRows();
    console.log(rows);
  } catch (err) {
    return console.log("The API returned an error: " + err)
  }
}
