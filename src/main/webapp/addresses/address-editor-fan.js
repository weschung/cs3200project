class AddressEditor extends React.Component {

    state = {
        address: {}
    }

    findAddressByUserId = (user_id) =>
        findAddressById(user_id)
            .then(address => this.setState({address}))

    componentDidMount = () => {
        const user_id = window.location.search.split("=")[1]
        this.findAddressByUserId(user_id)
    }

    saveStreet = () =>
        changeAddressStreet(this.state.address)

    saveApartment = () =>
        changeAddressApartment(this.state.address)

    saveCity = () =>
        changeAddressCity(this.state.address)

    saveZip = () =>
        changeAddressZip(this.state.address)

    saveAddressPrimary = () =>
        changeAddressPrimaryP(this.state.address)

    render() {
        return(
            <div className="container">
                <h1>Address Editor: <br/> {this.state.address.address}</h1>

                ID: <input className="form-control" readOnly={true}
                           value={this.state.address.id}/> <br/>

                Street: <input
                onChange={(event) => this.setState({
                    address: {
                        ...this.state.address,
                        street: event.target.value}})}
                className="form-control"
                value={this.state.address.street}/>
                <button onClick={this.saveStreet}>
                    Save Street
                </button> <br/> <br/>

                Apartment: <input
                onChange={(event) => this.setState({
                    address: {
                        ...this.state.address,
                        apartment: event.target.value}})}
                className="form-control"
                value={this.state.address.apartment}/>
                <button onClick={this.saveApartment}>
                    Save Apartment
                </button> <br/> <br/>

                City: <input
                onChange={(event) => this.setState({
                    address: {
                        ...this.state.address,
                        city: event.target.value}})}
                className="form-control"
                value={this.state.address.city}/>
                <button onClick={this.saveCity}>
                    Save City
                </button> <br/> <br/>

                Zip: <input
                onChange={(event) => this.setState({
                    address: {
                        ...this.state.address,
                        zip: event.target.value}})}
                className="form-control"
                value={this.state.address.zip}/>
                <button onClick={this.saveZip}>
                    Save Zip Code
                </button> <br/> <br/>

                Primary (1 for "yes", 0 for "no"): <input
                onChange={(event) => this.setState({
                    address: {
                        ...this.state.address,
                        primary_p: event.target.value}})}
                className="form-control"
                value={this.state.address.primary_p}/>
                <button onClick={this.saveAddressPrimary}>
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
    <AddressEditor/>, document.getElementById("root"))
