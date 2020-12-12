class TeamList extends React.Component {

    state = {
        teams: []
    }

    findAllTeams = () =>
        findAllTeams()
            .then(teams => this.setState({teams}))

    componentDidMount = () =>
        this.findAllTeams()

    createTeam = () =>
        createTeam()
            .then(this.findAllTeams)

    deleteTeam = (id) =>
        deleteTeam(id)
            .then(this.findAllTeams)

    render() {
        return(
            <div>
                <h1>Team List</h1>
                <table>
                    <tbody>
                        {
                            this.state.teams.map(team =>
                                <tr>
                                    <td>
                                        Team: {team.team_name};
                                    </td>
                                    <td>
                                        Conference: {team.conference};
                                    </td>
                                    <td>
                                        Year Founded: {team.yr_founded};
                                    </td>
                                    <td>
                                        Record: {team.record};
                                    </td>
                                    <td>
                                        Standing: {team.standing};
                                    </td>
                                    <td>
                                        Schedule: {team.game_schedule};
                                    </td>
                                    <td>
                                        Year Founded: {team.yr_founded}
                                    </td>
                                    <td>
                                        <button onClick={() => this.deleteTeam(team.id)}>
                                            Delete
                                        </button>
                                    </td>
                                    <td>
                                        <a href={`team-editor.html?id=${team.id}`}>
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <button onClick={this.createTeam}>
                    Create
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <TeamList/>, document.getElementById("root"))
