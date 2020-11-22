const FIND_ALL_TEAMS = "http://localhost:8080/findAllTeams"
const FIND_TEAM_BY_ID = "http://localhost:8080/findTeamById"
const CREATE_TEAM_URL = "http://localhost:8080/createTeam"
const DELETE_TEAM_URL = "http://localhost:8080/deleteTeam"
const RENAME_TEAM = "http://localhost:8080/renameTeam"

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
