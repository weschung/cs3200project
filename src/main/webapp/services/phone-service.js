const FIND_ALL_PHONES = "http://localhost:8080/findAllPhones"
const FIND_PHONE_BY_ID = "http://localhost:8080/findPhoneById"
const FIND_PHONE_BY_USER_ID = "http://localhost:8080/findPhoneByUserId"
const CREATE_PHONE_FOR_USER = "http://localhost:8080/createPhoneForUser"
const DELETE_PHONE = "http://localhost:8080/deletePhone"
const CHANGE_PHONE_NUM = "http://localhost:8080/changePhoneNum"
const CHANGE_PRIMARYP = "http://localhost:8080/changePrimaryP"


const findAllPhones = () =>
    fetch(`${FIND_ALL_PHONES}`)
        .then(response => response.json())

const findPhoneById = (id) =>
    fetch(`${FIND_PHONE_BY_ID}/${id}`)
        .then(response => response.json())

const findPhoneByUserId = (uid) =>
    fetch(`${FIND_PHONE_BY_USER_ID}/${uid}`)
        .then(response => response.json())

const createPhoneForUser = (uid) =>
    fetch(`${CREATE_PHONE_FOR_USER}/${uid}`)
        .then(response => response.json())

const deletePhone = (id) =>
    fetch(`${DELETE_PHONE}/${id}`)

const changePhoneNum = (phone) =>
    fetch(`${CHANGE_PHONE_NUM}/${phone.id}/${phone.phone}`)
        .then(response => response.json())

const changePrimaryP = (phone) =>
    fetch(`${CHANGE_PRIMARYP}/${phone.id}/${phone.primary_p}`)
        .then(response => response.json())
