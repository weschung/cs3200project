class PlayerEditor extends React.Component {

    state = {
        player: {}
    }

    findPlayerById = (id) =>
        findPlayerById(id)
            .then(player => this.setState({player}))

    componentDidMount = () => {
        const id = window.location.search.split("=")[1]
        this.findPlayerById(id)
    }

    savePlayerName = () =>
        renamePlayer(this.state.player)

    saveAge = () =>
        changeAge(this.state.player)

    saveHeight = () =>
        changeHeight(this.state.player)

    savePlayerPayment = () =>
        changePlayerPayment(this.state.player)

    savePlayerBank = () =>
        changePlayerBank(this.state.player)

    saveStatistic = () =>
        changeStatistic(this.state.player)

    render() {
        return(
            <div className="container">
                <h1>Player Editor: <br/> {this.state.player.player_name}</h1>

                ID: <input className="form-control" readOnly={true}
                           value={this.state.player.id}/> <br/>

                Player Name: <input
                onChange={(event) => this.setState({
                    player: {
                        ...this.state.player,
                        player_name: event.target.value}})}
                className="form-control"
                value={this.state.player.player_name}/>
                <button onClick={this.savePlayerName}>
                    Save Player Name
                </button> <br/> <br/>

                Age: <input
                onChange={(event) => this.setState({
                    player: {
                        ...this.state.player,
                        age: event.target.value}})}
                className="form-control"
                value={this.state.player.age}/>
                <button onClick={this.saveAge}>
                    Save Age
                </button> <br/> <br/>

                Height: <input
                onChange={(event) => this.setState({
                    player: {
                        ...this.state.player,
                        height: event.target.value}})}
                className="form-control"
                value={this.state.player.height}/>
                <button onClick={this.saveHeight}>
                    Save Height
                </button> <br/> <br/>

                Player Payment: <input
                onChange={(event) => this.setState({
                    player: {
                        ...this.state.player,
                        player_payment: event.target.value}})}
                className="form-control"
                value={this.state.player.player_payment}/>
                <button onClick={this.savePlayerPayment}>
                    Save Player Payment
                </button> <br/> <br/>

                Player Bank: <input
                onChange={(event) => this.setState({
                    player: {
                        ...this.state.player,
                        player_bank: event.target.value}})}
                className="form-control"
                value={this.state.player.player_bank}/>
                <button onClick={this.savePlayerBank}>
                    Save Player Bank
                </button> <br/> <br/>

                Statistic: <input
                onChange={(event) => this.setState({
                    player: {
                        ...this.state.player,
                        statistic: event.target.value}})}
                className="form-control"
                value={this.state.player.statistic}/>
                <button onClick={this.saveStatistic}>
                    Save Statistic
                </button> <br/> <br/>

                <a href="player-list.html">
                    Done
                </a> <br/> <br/> <br/> <br/> <br/> <br/>
            </div>
        )
    }
}

ReactDOM.render(
    <PlayerEditor/>, document.getElementById("root"))
