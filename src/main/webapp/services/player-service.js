const FIND_ALL_PLAYERS = "http://localhost:8080/findAllPlayers"
const FIND_PLAYER_BY_ID = "http://localhost:8080/findPlayerById"
const CREATE_PLAYER_URL = "http://localhost:8080/createPlayer"
const DELETE_PLAYER_URL = "http://localhost:8080/deletePlayer"

const findAllPlayers = () =>
    fetch(`${FIND_ALL_PLAYERS}`)
        .then(response => response.json())

const findPlayerById = (id) =>
    fetch(`${FIND_PLAYER_BY_ID}/${id}`)
        .then(response => response.json())

const createPlayer = () =>
    fetch(`${CREATE_PLAYER_URL}`)
        .then(response => response.json())

const deletePlayer = (id) =>
    fetch(`${DELETE_PLAYER_URL}/${id}`)

