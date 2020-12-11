class CoachList extends React.Component {

    state = {
        coachs: []
    }

    findAllCoachs = () =>
        findAllCoachs()
            .then(coachs => this.setState({coachs}))

    componentDidMount = () =>
        this.findAllCoachs()

    createCoach = () =>
        createCoach()
            .then(this.findAllCoachs)

    deleteCoach = (id) =>
        deleteCoach(id)
            .then(this.findAllCoachs)

    render() {
        return(
            <div>
                <h1>Coach List</h1>
                <table>
                    <tbody>
                    {
                        this.state.coachs.map(coach =>
                            <tr>
                                <td>
                                    Name: {coach.coach_name};
                                </td>
                                <td>
                                    Team ID: {coach.team_id};
                                </td>
                                <td>
                                    <button onClick={() => this.deleteCoach(coach.id)}>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <a href={`coach-editor.html?id=${coach.id}`}>
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
    <CoachList/>, document.getElementById("root"))
