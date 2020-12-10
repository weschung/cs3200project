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
<<<<<<< HEAD
                                        {fan.id}
                                    </td>
                                    <td>
                                        {fan.username}
                                    </td>
                                    <td>
                                        {fan.season_pass.toString()}
=======
                                        Season Pass: {fan.season_pass.toString()};
                                    </td>
                                    <td>
                                        Team ID: {fan.team_id};
>>>>>>> 3193be9cacc3077814b6a2f3be1017878e4739ca
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
                </div>
        )
    }
}

ReactDOM.render(
    <FanList/>, document.getElementById("root"))
