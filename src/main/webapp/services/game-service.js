const FIND_ALL_GAMES = "http://localhost:8080/findAllGames"
const FIND_GAME_BY_ID = "http://localhost:8080/findGameById"
const CREATE_GAME_URL = "http://localhost:8080/createGame"
const DELETE_GAME_URL = "http://localhost:8080/deleteGame"
const CHANGE_GAME_TEAM = "http://localhost:8080/changeGameTeam"
const CHANGE_OPPONENT = "http://localhost:8080/changeOpponent"
const CHANGE_SCORE = "http://localhost:8080/changeScore"


const findAllGames = () =>
    fetch(`${FIND_ALL_GAMES}`)
        .then(response => response.json())

const findGameById = (id) =>
    fetch(`${FIND_GAME_BY_ID}/${id}`)
        .then(response => response.json())

const createGame = (game) =>
    fetch(`${CREATE_GAME_URL}/${game}`)
        .then(response => response.json())

const deleteGame = (id) =>
    fetch(`${DELETE_GAME_URL}/${id}`)

const changeGameTeam = (game) =>
    fetch(`${CHANGE_GAME_TEAM}/${game.id}/${game.team_game}`)
        .then(response => response.json())

const changeOpponent = (game) =>
    fetch(`${CHANGE_OPPONENT}/${game.id}/${game.opponent}`)
        .then(response => response.json())

const changeScore = (game) =>
    fetch(`${CHANGE_SCORE}/${game.id}/${game.score}`)
        .then(response => response.json())
