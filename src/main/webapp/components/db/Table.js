class Table extends React.Component {
  state = {
    rows: []
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    findAll(
      this.props.host,
      this.props.schema,
      this.props.username,
      this.props.password,
      this.props.table
    )
      .then(rows => this.setState({rows}))
  }
  render() {
    return(
      <div className="table">
        {this.state.rows.map(row =>
          <Row
            key={row.id}
            row={row}/>
        )}
      </div>
    )
  }
}
