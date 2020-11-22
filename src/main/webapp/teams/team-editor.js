class TeamEditor extends React.Component {

    state = {
        team: {}
    }

    findTeamById = (id) =>
        findTeamById(id)
            .then(team => this.setState({team}))

    componentDidMount = () => {
        const id = window.location.search.split("=")[1]
        this.findTeamById(id)
    }

    saveTeam = () =>
        renameTeam(this.state.team)

    render() {
        return(
            <div className="container">
                <h1>Team Editor: <br/> {this.state.team.team_name} </h1>
                <input className="form-control" readOnly={true} value={this.state.team.id}/>
                <input
                    onChange={(event) => this.setState({
                        team: {
                            ...this.state.team,
                            team_name: event.target.value
                        }
                    })}
                    className="form-control"
                    value={this.state.team.team_name}/>
                <button onClick={this.saveTeam}>
                    Save
                </button>
                <a href="team-list.html">
                    Done
                </a>
            </div>
        )
    }
}

ReactDOM.render(
    <TeamEditor/>, document.getElementById("root"))
