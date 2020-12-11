const FIND_ALL_USERS = "http://localhost:8080/findAllUsers"
const FIND_USER_BY_ID = "http://localhost:8080/findUserById"
const CREATE_USER_URL = "http://localhost:8080/createUser"
const DELETE_USER_URL = "http://localhost:8080/deleteUser"
const RENAME_USER = "http://localhost:8080/renameUser"
const CHANGE_PASSWORD = "http://localhost:8080/changePassword"
const CHANGE_DOB = "http://localhost:8080/changeDob"
const CHANGE_FIRST = "http://localhost:8080/changeFirst"
const CHANGE_LAST = "http://localhost:8080/changeLast"
const CHANGE_EMAIL = "http://localhost:8080/changeEmail"

const findAllUsers = () =>
    fetch(`${FIND_ALL_USERS}`)
        .then(response => response.json())

const findUserById = (id) =>
    fetch(`${FIND_USER_BY_ID}/${id}`)
        .then(response => response.json())

const createUser = () =>
    fetch(`${CREATE_USER_URL}`)
        .then(response => response.json())

const deleteUser = (id) =>
    fetch(`${DELETE_USER_URL}/${id}`)

const renameUser = (user) =>
    fetch(`${RENAME_USER}/${user.id}/${user.username}`)
        .then(response => response.json())

const changePassword = (user) =>
    fetch(`${CHANGE_PASSWORD}/${user.id}/${user.password}`)
        .then(response => response.json())

const changeDob = (user) =>
    fetch(`${CHANGE_DOB}/${user.id}/${user.dob}`)
        .then(response => response.json())

const changeFirst = (user) =>
    fetch(`${CHANGE_FIRST}/${user.id}/${user.first_name}`)
        .then(response => response.json())

const changeLast = (user) =>
    fetch(`${CHANGE_LAST}/${user.id}/${user.last_name}`)
        .then(response => response.json())

const changeEmail = (user) =>
    fetch(`${CHANGE_EMAIL}/${user.id}/${user.email}`)
        .then(response => response.json())
