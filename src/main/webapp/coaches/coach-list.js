class CoachList extends React.Component {

    state = {
        coaches: []
    }

    findAllCoaches = () =>
        findAllCoaches()
            .then(coaches => this.setState({coaches}))

    componentDidMount = () =>
        this.findAllCoaches()

    createCoach = () =>
        createCoach()
            .then(this.findAllCoaches)

    deleteCoach = (id) =>
        deleteCoach(id)
            .then(this.findAllCoaches)

    render() {
        return(
            <div>
                <h1>Coach List</h1>
                <table>
                    <tbody>
                    {
                        this.state.coaches.map(coach =>
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
                <button onClick={this.createUser}>
                    Create
                </button> <br/> <br/>
                <a href="http://localhost:8080/home.html">
                    Home
                </a>
            </div>
        )
    }
}

ReactDOM.render(
    <CoachList/>, document.getElementById("root"))
