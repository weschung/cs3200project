const FIND_ALL_TEAMS = "http://localhost:8080/findAllTeams"
const FIND_TEAM_BY_ID = "http://localhost:8080/findTeamById"
const CREATE_TEAM_URL = "http://localhost:8080/createTeam"
const DELETE_TEAM_URL = "http://localhost:8080/deleteTeam"
const RENAME_TEAM = "http://localhost:8080/renameTeam"
const CHANGE_YEAR = "http://localhost:8080/changeYr"
const CHANGE_CONFERENCE = "http://localhost:8080/changeConference"
const CHANGE_RECORD = "http://localhost:8080/changeRecord"
const CHANGE_STANDING = "http://localhost:8080/changeStanding"
const CHANGE_GAME_SCHEDULE = "http://localhost:8080/changeGameSchedule"

const findAllTeams = () =>
    fetch(`${FIND_ALL_TEAMS}`)
        .then(response => response.json())

const findTeamById = (id) =>
    fetch(`${FIND_TEAM_BY_ID}/${id}`)
        .then(response => response.json())

const createTeam = () =>
    fetch(`${CREATE_TEAM_URL}`)
        .then(response => response.json())

const deleteTeam = (id) =>
    fetch(`${DELETE_TEAM_URL}/${id}`)

const renameTeam = (team) =>
    fetch(`${RENAME_TEAM}/${team.id}/${team.team_name}`)
        .then(response => response.json())

const changeYr = (team) =>
    fetch(`${CHANGE_YEAR}/${team.id}/${team.yr_founded}`)
        .then(response => response.json())

const changeConference = (team) =>
    fetch(`${CHANGE_CONFERENCE}/${team.id}/${team.conference}`)
        .then(response => response.json())

const changeRecord = (team) =>
    fetch(`${CHANGE_RECORD}/${team.id}/${team.record}`)
        .then(response => response.json())

const changeStanding = (team) =>
    fetch(`${CHANGE_STANDING}/${team.id}/${team.standing}`)
        .then(response => response.json())

const changeGameSchedule = (team) =>
    fetch(`${CHANGE_GAME_SCHEDULE}/${team.id}/${team.game_schedule}`)
        .then(response => response.json())
