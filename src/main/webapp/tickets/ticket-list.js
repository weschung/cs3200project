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
                                <td>
                                    <button onClick={() => this.deleteTicket(ticket.id)}>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <a href={`ticket-editor.html?id=${ticket.id}`}>
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <button onClick={this.createTicket}>
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
    <TicketList/>, document.getElementById("root"))
