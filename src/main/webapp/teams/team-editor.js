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

    saveTeamname = () =>
        renameTeam(this.state.team)

    saveYr = () =>
        changeYr(this.state.team)

    saveConference = () =>
        changeConference(this.state.team)

    saveRecord = () =>
        changeRecord(this.state.team)

    saveStanding = () =>
        changeStanding(this.state.team)

    saveGameSchedule = () =>
        changeGameSchedule(this.state.team)

    render() {
        return(
            <div className="container">
                <h1>Team Editor: <br/> {this.state.team.team_name} </h1>

                ID: <input className="form-control" readOnly={true}
                           value={this.state.team.id}/> <br/>

                Team Name: <input
                    onChange={(event) => this.setState({
                        team: {
                            ...this.state.team,
                            team_name: event.target.value
                        }
                    })}
                    className="form-control"
                    value={this.state.team.team_name}/>
                <button onClick={this.saveTeamname}>
                    Save Team Name
                </button> <br/> <br/>

                Year Founded: <input
                onChange={(event) => this.setState({
                    team: {
                        ...this.state.team,
                        yr_founded: event.target.value
                    }
                })}
                className="form-control"
                value={this.state.team.yr_founded}/>
                <button onClick={this.saveYr}>
                    Save Year Founded
                </button> <br/> <br/>

                Conference: <input
                onChange={(event) => this.setState({
                    team: {
                        ...this.state.team,
                        conference: event.target.value
                    }
                })}
                className="form-control"
                value={this.state.team.conference}/>
                <button onClick={this.saveConference}>
                    Save Conference
                </button> <br/> <br/>

                Record: <input
                onChange={(event) => this.setState({
                    team: {
                        ...this.state.team,
                        record: event.target.value
                    }
                })}
                className="form-control"
                value={this.state.team.record}/>
                <button onClick={this.saveRecord}>
                    Save Record
                </button> <br/> <br/>

                Standing: <input
                onChange={(event) => this.setState({
                    team: {
                        ...this.state.team,
                        standing: event.target.value
                    }
                })}
                className="form-control"
                value={this.state.team.standing}/>
                <button onClick={this.saveStanding}>
                    Save Standing
                </button> <br/> <br/>

                Game Schedule: <input
                onChange={(event) => this.setState({
                    team: {
                        ...this.state.team,
                        game_schedule: event.target.value
                    }
                })}
                className="form-control"
                value={this.state.team.game_schedule}/>
                <button onClick={this.saveGameSchedule}>
                    Save Game Schedule
                </button> <br/> <br/>

                <a href="team-list.html">
                    Done
                </a> <br/> <br/> <br/> <br/> <br/> <br/>
            </div>
        )
    }
}

ReactDOM.render(
    <TeamEditor/>, document.getElementById("root"))
