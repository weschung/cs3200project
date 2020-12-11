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

    saveTicket = () =>
        renameTicket(this.state.ticket)

    render() {
        return(
            <div className="container">
                <h1>Ticket Editor: <br/> {this.state.ticket.ticket_name} </h1>
                <input className="form-control" readOnly={true} value={this.state.ticket.id}/>
                <input
                    onChange={(event) => this.setState({
                        ticket: {
                            ...this.state.ticket,
                            ticket_name: event.target.value
                        }
                    })}
                    className="form-control"
                    value={this.state.ticket.ticket_name}/>
                <button onClick={this.saveTicket}>
                    Save
                </button>
                <a href="ticket-list.html">
                    Done
                </a>
            </div>
        )
    }
}

ReactDOM.render(
    <TicketEditor/>, document.getElementById("root"))
