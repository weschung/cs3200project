const FIND_ALL_MANAGERS = "http://localhost:8080/findAllManagers"
const FIND_MANAGER_BY_ID = "http://localhost:8080/findManagerById"
const CREATE_MANAGER_URL = "http://localhost:8080/createManager"
const DELETE_MANAGER_URL = "http://localhost:8080/deleteManager"
const SCHEDULE_MANAGER_URL = "http://localhost:8080/scheduleManager"
const RENAME_MANAGER = "http://localhost:8080/renameManager"
const CHANGE_MANAGER_PASSWORD = "http://localhost:8080/changeManagerPassword"
const CHANGE_MANAGER_DOB = "http://localhost:8080/changeManagerDob"
const CHANGE_MANAGER_FIRST = "http://localhost:8080/changeManagerFirst"
const CHANGE_MANAGER_LAST = "http://localhost:8080/changeManagerLast"
const CHANGE_MANAGER_EMAIL = "http://localhost:8080/changeManagerEmail"

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
    fetch(`${SCHEDULE_MANAGER_URL}/${manager.id}/${manager.meeting_schedule}`)
        .then(response => response.json())

const renameManager = (manager) =>
    fetch(`${RENAME_MANAGER}/${manager.id}/${manager.username}`)
        .then(response => response.json())

const changeManagerPassword = (manager) =>
    fetch(`${CHANGE_MANAGER_PASSWORD}/${manager.id}/${manager.password}`)
        .then(response => response.json())

const changeManagerDob = (manager) =>
    fetch(`${CHANGE_MANAGER_DOB}/${manager.id}/${manager.dob}`)
        .then(response => response.json())

const changeManagerFirst = (manager) =>
    fetch(`${CHANGE_MANAGER_FIRST}/${manager.id}/${manager.first_name}`)
        .then(response => response.json())

const changeManagerLast = (manager) =>
    fetch(`${CHANGE_MANAGER_LAST}/${manager.id}/${manager.last_name}`)
        .then(response => response.json())

const changeManagerEmail = (manager) =>
    fetch(`${CHANGE_MANAGER_EMAIL}/${manager.id}/${manager.email}`)
        .then(response => response.json())
