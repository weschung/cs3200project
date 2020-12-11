class GameList extends React.Component {

    state = {
        games: []
    }

    findAllGames = () =>
        findAllGames()
            .then(games => this.setState({games}))

    componentDidMount = () =>
        this.findAllGames()

    createGame = () =>
        createGame()
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
                                    Team: {game.team}
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
                <button onClick={this.createGame}>
                    Create
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <GameList/>, document.getElementById("root"))
