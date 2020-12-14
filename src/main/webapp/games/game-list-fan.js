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
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <br/> <br/>
                <a href="/home-fan.html">
                    Home
                </a>
            </div>
        )
    }
}

ReactDOM.render(
    <GameList/>, document.getElementById("root"))
