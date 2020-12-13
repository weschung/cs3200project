class PlayerList extends React.Component {

    state = {
        players: []
    }

    findAllPlayers = () =>
        findAllPlayers()
            .then(players => this.setState({players}))

    componentDidMount = () =>
        this.findAllPlayers()

    createPlayer = () =>
        createPlayer()
            .then(this.findAllPlayers)

    deletePlayer = (id) =>
        deletePlayer(id)
            .then(this.findAllPlayers)

    render() {
        return(
            <div>
                <h1>Player List</h1>
                <table>
                    <tbody>
                    {
                        this.state.players.map(player =>
                            <tr>
                                <td>
                                    Name: {player.player_name};
                                </td>
                                <td>
                                    Team ID: {player.team_id};
                                </td>
                                <td>
                                    Age: {player.age};
                                </td>
                                <td>
                                    Height: {player.height};
                                </td>
                                <td>
                                    Player Salary: {player.player_payment};
                                </td>
                                <td>
                                    Player Bank: {player.player_bank};
                                </td>
                                <td>
                                    Player Statistic: {player.statistic};
                                </td>
                                <td>
                                    <button onClick={() => this.deletePlayer(player.id)}>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <a href={`player-editor.html?id=${player.id}`}>
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <button onClick={this.createPlayer}>
                    Create
                </button> <br/> <br/>
                <a href="/home-manager.html">
                    Home
                </a>
            </div>
        )
    }
}

ReactDOM.render(
    <PlayerList/>, document.getElementById("root"))
