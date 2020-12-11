const FIND_ALL_GAMES = "http://localhost:8080/findAllGames"
const FIND_GAME_BY_ID = "http://localhost:8080/findGameById"
const CREATE_GAME_URL = "http://localhost:8080/createGame"
const DELETE_GAME_URL = "http://localhost:8080/deleteGame"
const RENAME_GAME = "http://localhost:8080/renameGame"

const findAllGames = () =>
    fetch(`${FIND_ALL_GAMES}`)
        .then(response => response.json())

const findGameById = (id) =>
    fetch(`${FIND_GAME_BY_ID}/${id}`)
        .then(response => response.json())

const createGame = () =>
    fetch(`${CREATE_GAME_URL}`)
        .then(response => response.json())

const deleteGame = (id) =>
    fetch(`${DELETE_GAME_URL}/${id}`)

const renameGame = (game) =>
    fetch(`${RENAME_GAME}/${game.id}/${game.title}`)
        .then(response => response.json())
