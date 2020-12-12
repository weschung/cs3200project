const FIND_ALL_FANS = "http://localhost:8080/findAllFans"
const FIND_FAN_BY_ID = "http://localhost:8080/findFanById"
const CREATE_FAN_URL = "http://localhost:8080/createFan"
const DELETE_FAN_URL = "http://localhost:8080/deleteFan"
const BUYPASS_FAN_URL = "http://localhost:8080/buyPassFan"
const RENAME_FAN = "http://localhost:8080/renameFan"
const CHANGE_FAN_TEAM = "http://localhost:8080/changeFanTeam"
const CHANGE_FAN_PASSWORD = "http://localhost:8080/changeFanPassword"
const CHANGE_FAN_DOB = "http://localhost:8080/changeFanDob"
const CHANGE_FAN_FIRST = "http://localhost:8080/changeFanFirst"
const CHANGE_FAN_LAST = "http://localhost:8080/changeFanLast"
const CHANGE_FAN_EMAIL = "http://localhost:8080/changeFanEmail"

const findAllFans = () =>
    fetch(`${FIND_ALL_FANS}`)
        .then(response => response.json())

const findFanById = (id) =>
    fetch(`${FIND_FAN_BY_ID}/${id}`)
        .then(response => response.json())

const createFan = () =>
    fetch(`${CREATE_FAN_URL}`)
        .then(response => response.json())

const deleteFan = (id) =>
    fetch(`${DELETE_FAN_URL}/${id}`)

const buypassFan = (fan) =>
    fetch(`${BUYPASS_FAN_URL}/${fan.id}/${fan.season_pass}`)
        .then(response => response.json())

const renameFan = (fan) =>
    fetch(`${RENAME_FAN}/${fan.id}/${fan.username}`)
        .then(response => response.json())

const changeFanTeam = (fan) =>
    fetch(`${CHANGE_FAN_TEAM}/${fan.id}/${fan.team_fan}`)
        .then(response => response.json())

const changeFanPassword = (fan) =>
    fetch(`${CHANGE_FAN_PASSWORD}/${fan.id}/${fan.password}`)
        .then(response => response.json())

const changeFanDob = (fan) =>
    fetch(`${CHANGE_FAN_DOB}/${fan.id}/${fan.dob}`)
        .then(response => response.json())

const changeFanFirst = (fan) =>
    fetch(`${CHANGE_FAN_FIRST}/${fan.id}/${fan.first_name}`)
        .then(response => response.json())

const changeFanLast = (fan) =>
    fetch(`${CHANGE_FAN_LAST}/${fan.id}/${fan.last_name}`)
        .then(response => response.json())

const changeFanEmail = (fan) =>
    fetch(`${CHANGE_FAN_EMAIL}/${fan.id}/${fan.email}`)
        .then(response => response.json())
