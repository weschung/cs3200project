const FIND_ALL_COACHES = "http://localhost:8080/findAllCoaches"
const FIND_COACH_BY_ID = "http://localhost:8080/findCoachById"
const CREATE_COACH_URL = "http://localhost:8080/createCoach"
const DELETE_COACH_URL = "http://localhost:8080/deleteCoach"
const CHANGE_NAME = "http://localhost:8080/changeCoachName"
const CHANGE_STRATEGY = "http://localhost:8080/changeStrategy"
const CHANGE_TEAM = "http://localhost:8080/changeCoachTeam"
const CHANGE_MANAGER = "http://localhost:8080/changeCoachManager"
const CHANGE_PRACTICE_SCHEDULE = "http://localhost:8080/changePracticeSchedule"
const CHANGE_PAYMENT = "http://localhost:8080/changeCoachPayment"
const CHANGE_BANK = "http://localhost:8080/changeCoachBank"

const findAllCoaches = () =>
    fetch(`${FIND_ALL_COACHES}`)
        .then(response => response.json())

const findCoachById = (id) =>
    fetch(`${FIND_COACH_BY_ID}/${id}`)
        .then(response => response.json())

const createCoach = () =>
    fetch(`${CREATE_COACH_URL}`)
        .then(response => response.json())

const deleteCoach = (id) =>
    fetch(`${DELETE_COACH_URL}/${id}`)

const changeName = (coach) =>
    fetch(`${CHANGE_NAME}/${coach.id}/${coach.coach_name}`)
        .then(response => response.json())

const changeStrategy = (coach) =>
    fetch(`${CHANGE_STRATEGY}/${coach.id}/${coach.strategy}`)
        .then(response => response.json())

const changeTeam = (coach) =>
    fetch(`${CHANGE_TEAM}/${coach.id}/${coach.team_id}`)
        .then(response => response.json())

const changeManager = (coach) =>
    fetch(`${CHANGE_MANAGER}/${coach.id}/${coach.manager_id}`)
        .then(response => response.json())

const changePracticeSchedule = (coach) =>
    fetch(`${CHANGE_PRACTICE_SCHEDULE}/${coach.id}/${coach.practice_schedule}`)
        .then(response => response.json())

const changePayment = (coach) =>
    fetch(`${CHANGE_PAYMENT}/${coach.id}/${coach.coach_payment}`)
        .then(response => response.json())

const changeBank = (coach) =>
    fetch(`${CHANGE_BANK}/${coach.id}/${coach.coach_bank}`)
        .then(response => response.json())



