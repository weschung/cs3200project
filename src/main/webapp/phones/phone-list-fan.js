class PhoneList extends React.Component {

    state = {
        phones: []
    }

    findAllPhones = () =>
        findAllPhones()
            .then(phones => this.setState({phones}))


    findPhoneByUserId = () => {
        let search = window.location.search
        search = search.replace("?", "")
        search = search.split("=")
        const userid = search[1]
        findPhoneByUserId(userid)
            .then(phones => this.setState({phones}))
    }

    componentDidMount = () => {
        let search = window.location.search
        debugger
        if(search){
            this.findPhoneByUserId()
        } else{
            this.findAllPhones()
        }
    }

    createPhoneForUser = () => {
        let search = window.location.search
        search = search.replace("?", "")
        search = search.split("=")
        const userid = search[1]
        createPhoneForUser(userid)
            .then(this.findPhoneByUserId)
    }

    deletePhone = (id) =>
        deletePhone(id)
            .then(this.findPhoneByUserId)

    render() {
        return(
            <div>
                <h1>Phone List</h1>
                <table>
                    <tbody>
                    {
                        this.state.phones.map(phone =>
                            <tr>
                                <td>
                                    Phone: {phone.phone};
                                </td>
                                <td>
                                    Primary: {phone.primary_p.toString()}
                                </td>
                                <td>
                                    <button onClick={() => this.deletePhone(phone.id)}>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <a href={`phone-editor-fan.html?id=${phone.id}`}>
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <button onClick={this.createPhoneForUser}>
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
    <PhoneList/>, document.getElementById("root"))
