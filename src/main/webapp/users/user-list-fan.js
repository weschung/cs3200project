class UserList extends React.Component {

    state = {
        users: []
    }

    findAllUsers = () =>
        findAllUsers()
            .then(users => this.setState({users}))

    componentDidMount = () =>
        this.findAllUsers()

    createUser = () =>
        createUser()
            .then(this.findAllUsers)

    deleteUser = (id) =>
        deleteUser(id)
            .then(this.findAllUsers)

    render() {
        return(
            <div>
                <h1>User List</h1>
                <table>
                    <tbody>
                    {
                        this.state.users.map(user =>
                            <tr>
                                <td>
                                    Username: {user.username};
                                </td>
                                <td>
                                    Password: {user.password};
                                </td>
                                <td>
                                    Name: {user.first_name} {user.last_name};
                                </td>
                                <td>
                                    Date of Birth: {user.dob};
                                </td>
                                <td>
                                    Email: {user.email};
                                </td>
                                <td>
                                    Phone(s): {JSON.stringify(user.phones, ["phone", "primary"], '  ')};
                                </td>
                                <td>
                                    Address(es): {JSON.stringify(user.addresses, ["street", "apartment", "city", "zip"], '  ')};
                                </td>
                                <td>
                                    <a href={`user-editor.html?id=${user.id}`}>
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
                <a href="/home-fan.html">
                    Home
                </a>
            </div>
        )
    }
}

ReactDOM.render(
    <UserList/>, document.getElementById("root"))
