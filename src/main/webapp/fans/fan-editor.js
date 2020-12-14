class FanEditor extends React.Component {

    state = {
        fan: {}
    }

    findFanById = (id) =>
        findFanById(id)
            .then(fan => this.setState({fan}))

    componentDidMount = () => {
        const id = window.location.search.split("=")[1]
        this.findFanById(id)
    }

    saveUsername = () =>
        renameFan(this.state.fan)

    savePassword = () =>
        changeFanPassword(this.state.fan)

    saveDob = () =>
        changeFanDob(this.state.fan)

    saveFirst = () =>
        changeFanFirst(this.state.fan)

    saveLast = () =>
        changeFanLast(this.state.fan)

    saveEmail = () =>
        changeFanEmail(this.state.fan)

    saveTeam = () =>
        changeFanTeam(this.state.fan)

    saveBuyPass = () =>
        buypassFan(this.state.fan)

    render() {
        return(
            <div className="container">
                <h1>Fan Editor: <br/> {this.state.fan.username}</h1>

                ID: <input className="form-control" readOnly={true}
                           value={this.state.fan.id}/> <br/>

                Username: <input
                onChange={(event) => this.setState({
                    fan: {
                        ...this.state.fan,
                        username: event.target.value}})}
                className="form-control"
                value={this.state.fan.username}/>
                <button onClick={this.saveUsername}>
                    Save Username
                </button> <br/> <br/>

                Password: <input
                onChange={(event) => this.setState({
                    fan: {
                        ...this.state.fan,
                        password: event.target.value}})}
                className="form-control"
                value={this.state.fan.password}/>
                <button onClick={this.savePassword}>
                    Save Password
                </button> <br/> <br/>

                First Name: <input
                onChange={(event) => this.setState({
                    fan: {
                        ...this.state.fan,
                        first_name: event.target.value}})}
                className="form-control"
                value={this.state.fan.first_name}/>
                <button onClick={this.saveFirst}>
                    Save First Name
                </button> <br/> <br/>

                Last Name: <input
                onChange={(event) => this.setState({
                    fan: {
                        ...this.state.fan,
                        last_name: event.target.value}})}
                className="form-control"
                value={this.state.fan.last_name}/>
                <button onClick={this.saveLast}>
                    Save Last Name
                </button> <br/> <br/>

                Date of Birth (format YYYY-MM-DD): <input
                onChange={(event) => this.setState({
                    fan: {
                        ...this.state.fan,
                        dob: event.target.value}})}
                className="form-control"
                value={this.state.fan.dob}/>
                <button onClick={this.saveDob}>
                    Save Date of Birth
                </button> <br/> <br/>

                Email: <input
                onChange={(event) => this.setState({
                    fan: {
                        ...this.state.fan,
                        email: event.target.value}})}
                className="form-control"
                value={this.state.fan.email}/>
                <button onClick={this.saveEmail}>
                    Save Email
                </button> <br/> <br/>

                Team ID, current Team ID: {this.state.fan.team_id}: <input
                onChange={(event) => this.setState({
                    fan: {
                        ...this.state.fan,
                        team_fan: event.target.value}})}
                className="form-control"
                value={this.state.fan.team_fan}/>
                <button onClick={this.saveTeam}>
                    Save Team ID
                </button> <br/> <br/>

                Season Pass (1 for "has season pass", 0 for "does not have season pass"): <input
                onChange={(event) => this.setState({
                    fan: {
                        ...this.state.fan,
                        season_pass: event.target.value}})}
                className="form-control"
                value={this.state.fan.season_pass}/>
                <button onClick={this.saveBuyPass}>
                    Save Season Pass
                </button> <br/> <br/>
                Change &nbsp;
                <a href={'/phones/phone-list-fan.html?id='+ this.state.fan.id}>
                    Phones
                </a>
                <br/>
                {JSON.stringify(this.state.fan.phones, ["phone", "primary_p"], '\t')}
                <br/>
                <br/>
                Change &nbsp;
                <a href={'/addresses/address-list-fan.html?id='+ this.state.fan.id}>
                    Addresses
                </a>
                <br/>
                {JSON.stringify(this.state.fan.addresses, ["street", "apartment", "city", "zip", "primary_p"], '\t')}
                <br/>
                <br/>
                <a href="fan-list.html">
                    Done
                </a> <br/> <br/> <br/> <br/> <br/> <br/>
            </div>
        )
    }
}

ReactDOM.render(
    <FanEditor/>, document.getElementById("root"))
