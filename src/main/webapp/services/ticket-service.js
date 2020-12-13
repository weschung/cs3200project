const FIND_ALL_TICKETS = "http://localhost:8080/findAllTickets"
const FIND_TICKET_BY_ID = "http://localhost:8080/findTicketById"
const CREATE_TICKET_URL = "http://localhost:8080/createTicket"
const DELETE_TICKET_URL = "http://localhost:8080/deleteTicket"
const CHANGE_PRICE = "http://localhost:8080/changePrice"
const CHANGE_SEAT = "http://localhost:8080/changeSeat"
const CHANGE_DATE = "http://localhost:8080/changeDate"
const CHANGE_TIME = "http://localhost:8080/changeTime"

const findAllTickets = () =>
    fetch(`${FIND_ALL_TICKETS}`)
        .then(response => response.json())

const findTicketById = (id) =>
    fetch(`${FIND_TICKET_BY_ID}/${id}`)
        .then(response => response.json())

const createTicket = () =>
    fetch(`${CREATE_TICKET_URL}`)
        .then(response => response.json())

const deleteTicket = (id) =>
    fetch(`${DELETE_TICKET_URL}/${id}`)

const changePrice = (ticket) =>
    fetch(`${CHANGE_PRICE}/${ticket.id}/${ticket.price}`)
        .then(response => response.json())

const changeSeat = (ticket) =>
    fetch(`${CHANGE_SEAT}/${ticket.id}/${ticket.seat}`)
        .then(response => response.json())

const changeDate = (ticket) =>
    fetch(`${CHANGE_DATE}/${ticket.id}/${ticket.date}`)
        .then(response => response.json())

const changeTime = (ticket) =>
    fetch(`${CHANGE_TIME}/${ticket.id}/${ticket.time}`)
        .then(response => response.json())
