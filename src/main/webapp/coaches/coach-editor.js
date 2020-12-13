class CoachEditor extends React.Component {

    state = {
        coach: {}
    }

    findCoachById = (id) =>
        findCoachById(id)
            .then(coach => this.setState({coach}))

    componentDidMount = () => {
        const id = window.location.search.split("=")[1]
        this.findCoachById(id)
    }

    saveName = () =>
        changeName(this.state.coach)

    saveStrategy = () =>
        changeStrategy(this.state.coach)

    saveTeam = () =>
        changeTeam(this.state.coach)

    saveManager = () =>
        changeManager(this.state.coach)

    savePracticeSchedule = () =>
        changePracticeSchedule(this.state.coach)

    savePayment = () =>
        changePayment(this.state.coach)

    saveBank = () =>
        changeBank(this.state.coach)

    render() {
        return(
            <div className="container">
                <h1>Coach Editor: <br/> {this.state.coach.coach_name}</h1>

                ID: <input className="form-control" readOnly={true}
                           value={this.state.coach.id}/> <br/>

                Name: <input
                    onChange={(event) => this.setState({
                     coach: {
                            ...this.state.coach,
                            coach_name: event.target.value}})}
                    className="form-control"
                    value={this.state.coach.coach_name}/>
                <button onClick={this.saveName}>
                    Save Name
                </button> <br/> <br/>

                Strategy: <input
                    onChange={(event) => this.setState({
                        coach: {
                            ...this.state.coach,
                            strategy: event.target.value}})}
                    className="form-control"
                    value={this.state.coach.strategy}/>
                <button onClick={this.saveStrategy}>
                    Save Strategy
                </button> <br/> <br/>

                Team ID: <input
                    onChange={(event) => this.setState({
                        coach: {
                            ...this.state.coach,
                            team_id: event.target.value}})}
                    className="form-control"
                    value={this.state.coach.team_id}/>
                <button onClick={this.saveTeam}>
                    Save Team ID
                </button> <br/> <br/>

                Manager ID: <input
                    onChange={(event) => this.setState({
                        coach: {
                            ...this.state.coach,
                            manager_id: event.target.value}})}
                    className="form-control"
                    value={this.state.coach.manager_id}/>
                <button onClick={this.saveManager}>
                    Save Manager ID
                </button> <br/> <br/>

                Practice Schedule: <input
                    onChange={(event) => this.setState({
                        coach: {
                            ...this.state.coach,
                            practice_schedule: event.target.value}})}
                    className="form-control"
                    value={this.state.coach.practice_schedule}/>
                <button onClick={this.savePracticeSchedule}>
                    Save Practice Schedule
                </button> <br/> <br/>

                Payment: <input
                    onChange={(event) => this.setState({
                        coach: {
                            ...this.state.coach,
                            coach_payment: event.target.value}})}
                    className="form-control"
                    value={this.state.coach.coach_payment}/>
                <button onClick={this.savePayment}>
                    Save Payment
                </button> <br/> <br/>

                Bank Information: <input
                    onChange={(event) => this.setState({
                        coach: {
                            ...this.state.coach,
                            coach_bank: event.target.value}})}
                    className="form-control"
                    value={this.state.coach.coach_bank}/>
                <button onClick={this.saveBank}>
                    Save Bank Information
                </button> <br/> <br/>

                <a href="coach-list.html">
                    Done
                </a> <br/> <br/> <br/> <br/> <br/> <br/>
            </div>
        )
    }
}

ReactDOM.render(
    <CoachEditor/>, document.getElementById("root"))
