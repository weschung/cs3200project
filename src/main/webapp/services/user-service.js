const FIND_ALL_USERS = "http://localhost:8080/findAllUsers"
const FIND_USER_BY_ID = "http://localhost:8080/findUserById"
const CREATE_USER_URL = "http://localhost:8080/createUser"
const DELETE_USER_URL = "http://localhost:8080/deleteUser"
const RENAME_USER = "http://localhost:8080/renameUser"

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
