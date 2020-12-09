const FIND_ALL_MANAGERS = "http://localhost:8080/findAllManagers"
const FIND_MANAGER_BY_ID = "http://localhost:8080/findManagerById"
const CREATE_MANAGER_URL = "http://localhost:8080/createManager"
const DELETE_MANAGER_URL = "http://localhost:8080/deleteManager"
const BUYPASS_MANAGER_URL = "http://localhost:8080/buyPassManager"

const findAllManagers = () =>
    fetch(`${FIND_ALL_MANAGERS}`)
        .then(response => response.json())

const findManagerById = (id) =>
    fetch(`${FIND_MANAGER_BY_ID}/${id}`)
        .then(response => response.json())

const createManager = () =>
    fetch(`${CREATE_MANAGER_URL}`)
        .then(response => response.json())

const deleteManager = (id) =>
    fetch(`${DELETE_MANAGER_URL}/${id}`)

const scheduleManager = (manager) =>
    fetch(`${BUYPASS_MANAGER_URL}/${manager.id}/${manager.meeting_schedule}`)
        .then(response => response.json())
