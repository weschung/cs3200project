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

    saveUsername = () =>
        renameUser(this.state.user)

    savePassword = () =>
        changePassword(this.state.user)

    saveDob = () =>
        changeDob(this.state.user)

    saveFirst = () =>
        changeFirst(this.state.user)

    saveLast = () =>
        changeLast(this.state.user)

    saveEmail = () =>
        changeEmail(this.state.user)

    render() {
        return(
            <div className="container">
                <h1>User Editor: <br/> {this.state.user.username}</h1>

                ID: <input className="form-control" readOnly={true}
                       value={this.state.user.id}/> <br/>

                Username: <input
                    onChange={(event) => this.setState({
                        user: {
                            ...this.state.user,
                        username: event.target.value}})}
                    className="form-control"
                    value={this.state.user.username}/>
                <button onClick={this.saveUsername}>
                    Save Username
                </button> <br/> <br/>

                Password: <input
                    onChange={(event) => this.setState({
                        user: {
                            ...this.state.user,
                            password: event.target.value}})}
                    className="form-control"
                    value={this.state.user.password}/>
                <button onClick={this.savePassword}>
                    Save Password
                </button> <br/> <br/>

                First Name: <input
                    onChange={(event) => this.setState({
                        user: {
                            ...this.state.user,
                            first_name: event.target.value}})}
                    className="form-control"
                    value={this.state.user.first_name}/>
                <button onClick={this.saveFirst}>
                    Save First Name
                </button> <br/> <br/>

                Last Name: <input
                    onChange={(event) => this.setState({
                        user: {
                            ...this.state.user,
                            last_name: event.target.value}})}
                    className="form-control"
                    value={this.state.user.last_name}/>
                <button onClick={this.saveLast}>
                    Save Last Name
                </button> <br/> <br/>

                Date of Birth (format YYYY-MM-DD): <input
                    onChange={(event) => this.setState({
                        user: {
                            ...this.state.user,
                            dob: event.target.value}})}
                    className="form-control"
                    value={this.state.user.dob}/>
                <button onClick={this.saveDob}>
                    Save Date of Birth
                </button> <br/> <br/>

                Email: <input
                    onChange={(event) => this.setState({
                        user: {
                            ...this.state.user,
                            email: event.target.value}})}
                    className="form-control"
                    value={this.state.user.email}/>
                <button onClick={this.saveEmail}>
                    Save Email
                </button> <br/> <br/>

                <a href="user-list.html">
                    Done
                </a> <br/> <br/> <br/> <br/> <br/> <br/>
            </div>
        )
    }
}

ReactDOM.render(
    <UserEditor/>, document.getElementById("root"))
