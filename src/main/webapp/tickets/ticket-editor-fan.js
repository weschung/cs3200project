class TicketEditor extends React.Component {

    state = {
        ticket: {}
    }

    findTicketById = (id) =>
        findTicketById(id)
            .then(ticket => this.setState({ticket}))

    componentDidMount = () => {
        const id = window.location.search.split("=")[1]
        this.findTicketById(id)
    }

    savePrice = () =>
        changePrice(this.state.ticket)

    saveSeat = () =>
        changeSeat(this.state.ticket)

    saveDate = () =>
        changeDate(this.state.ticket)

    saveTime = () =>
        changeTime(this.state.ticket)

    saveTicketFan = () =>
        changeTicketFan(this.state.ticket)

    saveTicketGame = () =>
        changeTicketGame(this.state.ticket)

    render() {
        return(
            <div className="container">
                <h1>Ticket Editor: <br/> Fan ID: {this.state.ticket.ticket_fan_id} <br/> Game ID: {this.state.ticket.ticket_game_id} </h1>

                Price: <input
                onChange={(event) => this.setState({
                    ticket: {
                        ...this.state.ticket,
                        price: event.target.value}})}
                className="form-control"
                value={this.state.ticket.price}/>
                <button onClick={this.savePrice}>
                    Save Price
                </button> <br/> <br/>

                Seat: <input
                onChange={(event) => this.setState({
                    ticket: {
                        ...this.state.ticket,
                        seat: event.target.value}})}
                className="form-control"
                value={this.state.ticket.seat}/>
                <button onClick={this.saveSeat}>
                    Save Seat
                </button> <br/> <br/>

                Date: <input
                onChange={(event) => this.setState({
                    ticket: {
                        ...this.state.ticket,
                        date: event.target.value}})}
                className="form-control"
                value={this.state.ticket.date}/>
                <button onClick={this.saveDate}>
                    Save Date
                </button> <br/> <br/>

                Time: <input
                onChange={(event) => this.setState({
                    ticket: {
                        ...this.state.ticket,
                        time: event.target.value}})}
                className="form-control"
                value={this.state.ticket.time}/>
                <button onClick={this.saveTime}>
                    Save Time
                </button> <br/> <br/>

                Fan ID, current Fan ID: {this.state.ticket.ticket_fan_id}: <input
                onChange={(event) => this.setState({
                    ticket: {
                        ...this.state.ticket,
                        ticket_fan: event.target.value}})}
                className="form-control"
                value={this.state.ticket.ticket_fan}/>
                <button onClick={this.saveTicketFan}>
                    Save Fan ID
                </button> <br/> <br/>

                Game ID, current Game ID: {this.state.ticket.ticket_game_id}: <input
                onChange={(event) => this.setState({
                    ticket: {
                        ...this.state.ticket,
                        ticket_game: event.target.value}})}
                className="form-control"
                value={this.state.ticket.ticket_game}/>
                <button onClick={this.saveTicketGame}>
                    Save Game ID
                </button> <br/> <br/>

                <a href="ticket-list-fan.html">
                    Done
                </a>
            </div>
        )
    }
}

ReactDOM.render(
    <TicketEditor/>, document.getElementById("root"))
