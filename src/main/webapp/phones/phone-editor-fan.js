class PhoneEditor extends React.Component {

    state = {
        phone: {}
    }

    findPhoneByUserId = (user_id) =>
        findPhoneById(user_id)
            .then(phone => this.setState({phone}))

    componentDidMount = () => {
        const user_id = window.location.search.split("=")[1]
        this.findPhoneByUserId(user_id)
    }

    savePhone = () =>
        changePhoneNum(this.state.phone)

    savePrimaryP = () =>
        changePrimaryP(this.state.phone)

    render() {
        return(
            <div className="container">
                <h1>Phone Editor: <br/> {this.state.phone.phone}</h1>

                ID: <input className="form-control" readOnly={true}
                           value={this.state.phone.id}/> <br/>

                Phone: <input
                onChange={(event) => this.setState({
                    phone: {
                        ...this.state.phone,
                        phone: event.target.value}})}
                className="form-control"
                value={this.state.phone.phone}/>
                <button onClick={this.savePhone}>
                    Save Phone Number
                </button> <br/> <br/>

                Primary (1 for "yes", 0 for "no"): <input
                onChange={(event) => this.setState({
                    phone: {
                        ...this.state.phone,
                        primary_p: event.target.value}})}
                className="form-control"
                value={this.state.phone.primary_p}/>
                <button onClick={this.savePrimaryP}>
                    Save Primary
                </button> <br/> <br/>

                <a href="/home-fan.html">
                    Home
                </a> <br/> <br/>
            </div>
        )
    }
}

ReactDOM.render(
    <PhoneEditor/>, document.getElementById("root"))
