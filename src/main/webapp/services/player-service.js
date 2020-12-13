const FIND_ALL_PLAYERS = "http://localhost:8080/findAllPlayers"
const FIND_PLAYER_BY_ID = "http://localhost:8080/findPlayerById"
const CREATE_PLAYER_URL = "http://localhost:8080/createPlayer"
const DELETE_PLAYER_URL = "http://localhost:8080/deletePlayer"
const RENAME_PLAYER = "http://localhost:8080/renamePlayer"
const CHANGE_AGE = "http://localhost:8080/changeAge"
const CHANGE_HEIGHT = "http://localhost:8080/changeHeight"
const CHANGE_PLAYER_PAYMENT = "http://localhost:8080/changePlayerPayment"
const CHANGE_PLAYER_BANK = "http://localhost:8080/changePlayerBank"
const CHANGE_STATISTIC = "http://localhost:8080/changeStatistic"

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

const renamePlayer = (player) =>
    fetch(`${RENAME_PLAYER}/${player.id}/${player.player_name}`)
        .then(response => response.json())

const changeAge = (player) =>
    fetch(`${CHANGE_AGE}/${player.id}/${player.age}`)
        .then(response => response.json())

const changeHeight = (player) =>
    fetch(`${CHANGE_HEIGHT}/${player.id}/${player.height}`)
        .then(response => response.json())

const changePlayerPayment = (player) =>
    fetch(`${CHANGE_PLAYER_PAYMENT}/${player.id}/${player.player_payment}`)
        .then(response => response.json())

const changePlayerBank = (player) =>
    fetch(`${CHANGE_PLAYER_BANK}/${player.id}/${player.player_bank}`)
        .then(response => response.json())

const changeStatistic = (player) =>
    fetch(`${CHANGE_STATISTIC}/${player.id}/${player.statistic}`)
        .then(response => response.json())

