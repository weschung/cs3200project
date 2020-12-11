const FIND_ALL_COACHS = "http://localhost:8080/findAllCoachs"
const FIND_COACH_BY_ID = "http://localhost:8080/findCoachById"
const CREATE_COACH_URL = "http://localhost:8080/createCoach"
const DELETE_COACH_URL = "http://localhost:8080/deleteCoach"

const findAllCoachs = () =>
    fetch(`${FIND_ALL_COACHS}`)
        .then(response => response.json())

const findCoachById = (id) =>
    fetch(`${FIND_COACH_BY_ID}/${id}`)
        .then(response => response.json())

const createCoach = () =>
    fetch(`${CREATE_COACH_URL}`)
        .then(response => response.json())

const deleteCoach = (id) =>
    fetch(`${DELETE_COACH_URL}/${id}`)

