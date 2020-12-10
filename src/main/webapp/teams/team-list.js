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
                                        {team.team_name}
                                    </td>
                                    <td>
                                        {team.yr_founded}
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
                <button onClick={this.createUser}>
                    Create
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <TeamList/>, document.getElementById("root"))
