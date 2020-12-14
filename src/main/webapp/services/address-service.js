const FIND_ALL_ADDRESSES = "http://localhost:8080/findAllAddresses"
const FIND_ADDRESS_BY_ID = "http://localhost:8080/findAddressById"
const FIND_ADDRESS_BY_USER_ID = "http://localhost:8080/findAddressByUserId"
const CREATE_ADDRESS_FOR_USER = "http://localhost:8080/createAddressForUser"
const DELETE_ADDRESS = "http://localhost:8080/deleteAddress"
const CHANGE_ADDRESS_STREET = "http://localhost:8080/changeAddressStreet"
const CHANGE_ADDRESS_APARTMENT = "http://localhost:8080/changeAddressApartment"
const CHANGE_ADDRESS_CITY = "http://localhost:8080/changeAddressCity"
const CHANGE_ADDRESS_ZIP = "http://localhost:8080/changeAddressZip"
const CHANGE_ADDRESS_PRIMARYP = "http://localhost:8080/changeAddressPrimaryP"


const findAllAddresses = () =>
    fetch(`${FIND_ALL_ADDRESSES}`)
        .then(response => response.json())

const findAddressById = (id) =>
    fetch(`${FIND_ADDRESS_BY_ID}/${id}`)
        .then(response => response.json())

const findAddressByUserId = (uid) =>
    fetch(`${FIND_ADDRESS_BY_USER_ID}/${uid}`)
        .then(response => response.json())

const createAddressForUser = (uid) =>
    fetch(`${CREATE_ADDRESS_FOR_USER}/${uid}`)
        .then(response => response.json())

const deleteAddress = (id) =>
    fetch(`${DELETE_ADDRESS}/${id}`)

const changeAddressStreet = (address) =>
    fetch(`${CHANGE_ADDRESS_STREET}/${address.id}/${address.street}`)
        .then(response => response.json())

const changeAddressApartment = (address) =>
    fetch(`${CHANGE_ADDRESS_APARTMENT}/${address.id}/${address.apartment}`)
        .then(response => response.json())

const changeAddressCity = (address) =>
    fetch(`${CHANGE_ADDRESS_CITY}/${address.id}/${address.city}`)
        .then(response => response.json())

const changeAddressZip = (address) =>
    fetch(`${CHANGE_ADDRESS_ZIP}/${address.id}/${address.zip}`)
        .then(response => response.json())

const changeAddressPrimaryP = (address) =>
    fetch(`${CHANGE_ADDRESS_PRIMARYP}/${address.id}/${address.primary_p}`)
        .then(response => response.json())
