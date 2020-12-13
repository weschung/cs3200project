class ManagerList extends React.Component {

    state = {
        managers: []
    }

    findAllManagers = () =>
        findAllManagers()
            .then(managers => this.setState({managers}))

    componentDidMount = () =>
        this.findAllManagers()

    createManager = () =>
        createManager()
            .then(this.findAllManagers)

    deleteManager = (id) =>
        deleteManager(id)
            .then(this.findAllManagers)

    render() {
        return(
            <div>
                <h1>Manager List</h1>
                <table>
                    <tbody>
                    {
                        this.state.managers.map(manager =>
                            <tr>
                                <td>
                                    Name: {manager.first_name} {manager.last_name};
                                </td>
                                <td>
                                    Username: {manager.username};
                                </td>
                                <td>
                                    Password: {manager.password};
                                </td>
                                <td>
                                    Date of Birth: {manager.dob};
                                </td>
                                <td>
                                    Email: {manager.email};
                                </td>
                                <td>
                                    Phone(s): {JSON.stringify(manager.phones, ["phone", "primary"], '  ')};
                                </td>
                                <td>
                                    Address(es): {JSON.stringify(manager.addresses, ["street", "apartment", "city", "zip"], '  ')};
                                </td>
                                <td>
                                    Meeting Schedule: {manager.meeting_schedule};
                                </td>
                                <td>
                                    <button onClick={() => this.deleteManager(manager.id)}>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <a href={`manager-editor.html?id=${manager.id}`}>
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <button onClick={this.createManager}>
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
    <ManagerList/>, document.getElementById("root"))
