class TicketList extends React.Component {

    state = {
        tickets: []
    }

    findAllTickets = () =>
        findAllTickets()
            .then(tickets => this.setState({tickets}))

    componentDidMount = () =>
        this.findAllTickets()

    createTicket = () =>
        createTicket()
            .then(this.findAllTickets)

    deleteTicket = (id) =>
        deleteTicket(id)
            .then(this.findAllTickets)

    render() {
        return(
            <div>
                <h1>Ticket List</h1>
                <table>
                    <tbody>
                    {
                        this.state.tickets.map(ticket =>
                            <tr>
                                <td>
                                    Fan ID: {ticket.ticket_fan_id}
                                </td>
                                <td>
                                    Game ID: {ticket.ticket_game_id}
                                </td>
                                <td>
                                    Price: {ticket.price}
                                </td>
                                <td>
                                    Seat: {ticket.seat}
                                </td>
                                <td>
                                    Date: {ticket.date}
                                </td>
                                <td>
                                    Time: {ticket.time}
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
    <TicketList/>, document.getElementById("root"))
