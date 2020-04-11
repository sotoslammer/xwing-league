import React from "react"
import tableStyles from "./standings-table.module.css"

type Props = {
  players: Edge[]
}

export const StandingsTable: React.FC<Props> = ({ players }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th className={tableStyles.center}>Wins</th>
        <th className={tableStyles.center}>Losses</th>
        <th className={tableStyles.center}>Points</th>
        <th className={tableStyles.center}>Games Played</th>
      </tr>
    </thead>
    <tbody>
      {players.map(({ node }) => (
        <PlayerRow player={node} />
      ))}
    </tbody>
  </table>
)

const PlayerRow: React.FC<{ player: Player }> = ({ player }) => {
  const gamesPlayed = player.childrenGame.length
  const wins = player.childrenGame.filter(game => {
    if (game.playerOne === player.id) {
      return game.playerOneScore > game.playerTwoScore
    } else {
      return game.playerTwoScore > game.playerOneScore
    }
  }).length
  return (
    <tr key={player.id}>
      <td>{player.first + " " + player.last}</td>
      <td className={tableStyles.center}>{wins}</td>
      <td className={tableStyles.center}>{gamesPlayed - wins}</td>
      <td className={tableStyles.center}>{2 * wins + gamesPlayed}</td>
      <td className={tableStyles.center}>{gamesPlayed}</td>
    </tr>
  )
}
