class UserEditor extends React.Component {

    state = {
        user: {}
    }

    findUserById = (id) =>
        findUserById(id)
            .then(user => this.setState({user}))

    componentDidMount = () => {
        const id = window.location.search.split("=")[1]
        this.findUserById(id)
    }

    saveUser = () =>
        renameUser(this.state.user)

    render() {
        return(
            <div className="container">
                <h1>User Editor {this.state.user.title}</h1>
                <input className="form-control" readOnly={true} value={this.state.user.id}/>
                <input
                    onChange={(event) => this.setState({
                        user: {
                            ...this.state.user,
                            title: event.target.value
                        }
                    })}
                    className="form-control"
                    value={this.state.user.title}/>
                <button onClick={this.saveUser}>
                    Save
                </button>
                <a href="user-list.html">
                    Done
                </a>
            </div>
        )
    }
}

ReactDOM.render(
    <UserEditor/>, document.getElementById("root"))
