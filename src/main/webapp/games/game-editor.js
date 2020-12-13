class GameEditor extends React.Component {

    state = {
        game: {}
    }

    findGameById = (id) =>
        findGameById(id)
            .then(game => this.setState({game}))

    componentDidMount = () => {
        const id = window.location.search.split("=")[1]
        this.findGameById(id)
    }

    saveTeam = () =>
        changeGameTeam(this.state.game)

    saveOpponent = () =>
        changeOpponent(this.state.game)

    saveScore = () =>
        changeScore(this.state.game)

    render() {
        return(
            <div className="container">
                <h1>Game Editor: <br/> {this.state.game.id} </h1>

                ID: <input className="form-control" readOnly={true}
                           value={this.state.game.id}/> <br/>

                Team ID, current Team ID: {this.state.game.team_id}: <input
                onChange={(event) => this.setState({
                    game: {
                        ...this.state.game,
                        team_game: event.target.value
                    }
                })}
                className="form-control"
                value={this.state.game.team_game}/>
                <button onClick={this.saveTeam}>
                    Save Team ID
                </button> <br/> <br/>

                Game Opponent: <input
                onChange={(event) => this.setState({
                    game: {
                        ...this.state.game,
                        opponent: event.target.value
                    }
                })}
                className="form-control"
                value={this.state.game.opponent}/>
                <button onClick={this.saveOpponent}>
                    Save Opponent
                </button> <br/> <br/>

                Score: <input
                onChange={(event) => this.setState({
                    game: {
                        ...this.state.game,
                        score: event.target.value
                    }
                })}
                className="form-control"
                value={this.state.game.score}/>
                <button onClick={this.saveScore}>
                    Save Score
                </button> <br/> <br/>
                <a href="game-list.html">
                    Done
                </a> <br/> <br/> <br/> <br/> <br/> <br/>
            </div>
        )
    }
}

ReactDOM.render(
    <GameEditor/>, document.getElementById("root"))
