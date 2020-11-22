const FIND_ALL_FANS = "http://localhost:8080/findAllFans"
const FIND_FAN_BY_ID = "http://localhost:8080/findFanById"
const CREATE_FAN_URL = "http://localhost:8080/createFan"
const DELETE_FAN_URL = "http://localhost:8080/deleteFan"
const BUYPASS_FAN_URL = "http://localhost:8080/buyPassFan"

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
