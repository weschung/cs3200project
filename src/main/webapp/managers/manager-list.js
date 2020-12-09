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
                                    Meeting Schedule: {manager.meeting_schedule};
                                </td>
                                <td>
                                    Team ID: {manager.team_id};
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
            </div>
        )
    }
}

ReactDOM.render(
    <ManagerList/>, document.getElementById("root"))
