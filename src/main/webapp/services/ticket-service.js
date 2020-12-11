const FIND_ALL_TICKETS = "http://localhost:8080/findAllTickets"
const FIND_TICKET_BY_ID = "http://localhost:8080/findTicketById"
const CREATE_TICKET_URL = "http://localhost:8080/createTicket"
const DELETE_TICKET_URL = "http://localhost:8080/deleteTicket"
const RENAME_TICKET = "http://localhost:8080/renameTicket"

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

const renameTicket = (ticket) =>
    fetch(`${RENAME_TICKET}/${ticket.id}/${ticket.title}`)
        .then(response => response.json())
