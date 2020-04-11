type Game = {
  id: string
  playerOne: string
  playerTwo: string
  playerOneScore: number
  playerTwoScore: number
}

type Player = {
  id: string
  first: string
  last: string
  childrenGame: Game[]
}

type Edge = {
  node: Player
}

type StandingsQuery = {
  allPlayer: {
    edges: Edge[]
  }
}