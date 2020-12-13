class GameList extends React.Component {

    state = {
        games: []
    }

    findAllGames = () =>
        findAllGames()
            .then(games => this.setState({games}))

    componentDidMount = () =>
        this.findAllGames()

    saveTeamGame = (game) =>
        createGame(game)
            .then(this.findAllGames)

    deleteGame = (id) =>
        deleteGame(id)
            .then(this.findAllGames)

    render() {
        return(
            <div>
                <h1>Game List</h1>
                <table>
                    <tbody>
                    {
                        this.state.games.map(game =>
                            <tr>
                                <td>
                                    Team: {game.team_id}
                                </td>
                                <td>
                                    Opponent: {game.opponent}
                                </td>
                                <td>
                                    Score: {game.score}
                                </td>
                                <td>
                                    <button onClick={() => this.deleteGame(game.id)}>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <a href={`game-editor.html?id=${game.id}`}>
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                Create Game for Team ID: <input
                onChange={(event) => this.setState({
                    game: {
                        ...this.state.game,
                        team_game: event.target.value,
                    }
                })}
                className="form-control"/>
                <button onClick={() => this.saveTeamGame(this.state.game.team_game)}>
                    New Game for Team
                </button>

                <br/> <br/>
                <a href="/home-manager.html">
                    Home
                </a>
            </div>
        )
    }
}

ReactDOM.render(
    <GameList/>, document.getElementById("root"))
