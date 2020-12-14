class ManagerEditor extends React.Component {

    state = {
        manager: {}
    }

    findManagerById = (id) =>
        findManagerById(id)
            .then(manager => this.setState({manager}))

    componentDidMount = () => {
        const id = window.location.search.split("=")[1]
        this.findManagerById(id)
    }

    saveUsername = () =>
        renameManager(this.state.manager)

    savePassword = () =>
        changeManagerPassword(this.state.manager)

    saveDob = () =>
        changeManagerDob(this.state.manager)

    saveFirst = () =>
        changeManagerFirst(this.state.manager)

    saveLast = () =>
        changeManagerLast(this.state.manager)

    saveEmail = () =>
        changeManagerEmail(this.state.manager)

    saveSchedule = () =>
        scheduleManager(this.state.manager)

    render() {
        return(
            <div className="container">
                <h1>Manager Editor: <br/> {this.state.manager.username}</h1>

                ID: <input className="form-control" readOnly={true}
                           value={this.state.manager.id}/> <br/>

                Username: <input
                onChange={(event) => this.setState({
                    manager: {
                        ...this.state.manager,
                        username: event.target.value}})}
                className="form-control"
                value={this.state.manager.username}/>
                <button onClick={this.saveUsername}>
                    Save Username
                </button> <br/> <br/>

                Password: <input
                onChange={(event) => this.setState({
                    manager: {
                        ...this.state.manager,
                        password: event.target.value}})}
                className="form-control"
                value={this.state.manager.password}/>
                <button onClick={this.savePassword}>
                    Save Password
                </button> <br/> <br/>

                First Name: <input
                onChange={(event) => this.setState({
                    manager: {
                        ...this.state.manager,
                        first_name: event.target.value}})}
                className="form-control"
                value={this.state.manager.first_name}/>
                <button onClick={this.saveFirst}>
                    Save First Name
                </button> <br/> <br/>

                Last Name: <input
                onChange={(event) => this.setState({
                    manager: {
                        ...this.state.manager,
                        last_name: event.target.value}})}
                className="form-control"
                value={this.state.manager.last_name}/>
                <button onClick={this.saveLast}>
                    Save Last Name
                </button> <br/> <br/>

                Date of Birth (format YYYY-MM-DD 00:00:00): <input
                onChange={(event) => this.setState({
                    manager: {
                        ...this.state.manager,
                        dob: event.target.value}})}
                className="form-control"
                value={this.state.manager.dob}/>
                <button onClick={this.saveDob}>
                    Save Date of Birth
                </button> <br/> <br/>

                Email: <input
                onChange={(event) => this.setState({
                    manager: {
                        ...this.state.manager,
                        email: event.target.value}})}
                className="form-control"
                value={this.state.manager.email}/>
                <button onClick={this.saveEmail}>
                    Save Email
                </button> <br/> <br/>

                Meeting Schedule: <input
                onChange={(event) => this.setState({
                    manager: {
                        ...this.state.manager,
                        meeting_schedule: event.target.value}})}
                className="form-control"
                value={this.state.manager.meeting_schedule}/>
                <button onClick={this.saveSchedule}>
                    Save Meeting Schedule
                </button> <br/> <br/>
                Change &nbsp;
                <a href={'/phones/phone-list.html?id='+ this.state.manager.id}>
                    Phones
                </a>
                <br/>
                {JSON.stringify(this.state.manager.phones, ["phone", "primary_p"], '\t')}
                <br/>
                <br/>
                Change &nbsp;
                <a href={'/addresses/address-list.html?id='+ this.state.manager.id}>
                    Addresses
                </a>
                <br/>
                {JSON.stringify(this.state.manager.addresses, ["street", "apartment", "city", "zip", "primary_p"], '\t')}
                <br/>
                <br/>
                <a href="manager-list.html">
                    Done
                </a> <br/> <br/> <br/> <br/> <br/> <br/>
            </div>
        )
    }
}

ReactDOM.render(
    <ManagerEditor/>, document.getElementById("root"))
