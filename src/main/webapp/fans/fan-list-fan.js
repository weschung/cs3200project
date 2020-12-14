class FanList extends React.Component {

    state = {
        fans: []
    }

    findAllFans = () =>
        findAllFans()
            .then(fans => this.setState({fans}))

    componentDidMount = () =>
        this.findAllFans()

    createFan = () =>
        createFan()
            .then(this.findAllFans)

    deleteFan = (id) =>
        deleteFan(id)
            .then(this.findAllFans)

    render() {
        return(
            <div>
                <h1>Fan List</h1>
                <table>
                    <tbody>
                    {
                        this.state.fans.map(fan =>
                            <tr>
                                <td>
                                    Name: {fan.first_name} {fan.last_name};
                                </td>
                                <td>
                                    Username: {fan.username};
                                </td>
                                <td>
                                    Password: {fan.password};
                                </td>
                                <td>
                                    Date of Birth: {fan.dob};
                                </td>
                                <td>
                                    Email: {fan.email};
                                </td>
                                <td>
                                    Phone(s): {JSON.stringify(fan.phones, ["phone", "primary"], '  ')};
                                </td>
                                <td>
                                    Address(es): {JSON.stringify(fan.addresses, ["street", "apartment", "city", "zip"], '  ')};
                                </td>
                                <td>
                                    Has Season Pass: {fan.season_pass.toString()};
                                </td>
                                <td>
                                    Team ID: {fan.team_id};
                                </td>
                                <td>
                                    <button onClick={() => this.deleteFan(fan.id)}>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <a href={`fan-editor.html?id=${fan.id}`}>
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <button onClick={this.createFan}>
                    Create
                </button> <br/> <br/>
                <a href="/home-fan.html">
                    Home
                </a>
            </div>
        )
    }
}

ReactDOM.render(
    <FanList/>, document.getElementById("root"))
