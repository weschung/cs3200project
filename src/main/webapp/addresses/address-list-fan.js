class AddressList extends React.Component {

    state = {
        addresses: []
    }

    findAllAddresses = () =>
        findAllAddresses()
            .then(addresses => this.setState({addresses}))


    findAddressByUserId = () => {
        let search = window.location.search
        search = search.replace("?", "")
        search = search.split("=")
        const userid = search[1]
        findAddressByUserId(userid)
            .then(addresses => this.setState({addresses}))
    }

    componentDidMount = () => {
        let search = window.location.search
        debugger
        if(search){
            this.findAddressByUserId()
        } else{
            this.findAllAddresses()
        }
    }

    createAddressForUser = () => {
        let search = window.location.search
        search = search.replace("?", "")
        search = search.split("=")
        const userid = search[1]
        createAddressForUser(userid)
            .then(this.findAddressByUserId)
    }

    deleteAddress = (id) =>
        deleteAddress(id)
            .then(this.findAddressByUserId)

    render() {
        return(
            <div>
                <h1>Address List</h1>
                <table>
                    <tbody>
                    {
                        this.state.addresses.map(address =>
                            <tr>
                                <td>
                                    Street: {address.street};
                                </td>
                                <td>
                                    Apartment: {address.apartment};
                                </td>
                                <td>
                                    City: {address.city};
                                </td>
                                <td>
                                    Zip: {address.zip};
                                </td>
                                <td>
                                    Primary: {address.primary_p.toString()}
                                </td>
                                <td>
                                    <button onClick={() => this.deleteAddress(address.id)}>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <a href={`address-editor.html?id=${address.id}`}>
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <button onClick={this.createAddressForUser}>
                    Create
                </button> <br/><br/>
                <a href="/home-fan.html">
                    Home
                </a>
            </div>
        )
    }
}

ReactDOM.render(
    <AddressList/>, document.getElementById("root"))
