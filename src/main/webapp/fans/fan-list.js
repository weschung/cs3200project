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
                                        {fan.season_pass.toString()}
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
