class Row extends React.Component {
  componentDidMount() {
    console.log(this.props.row)
  }
  render() {
    return(
      <div className="row">
        {
          Object.keys(this.props.row).map(key =>
            <Column
              key={key}
              column={key}
              value={this.props.row[key]}/>

          )
        }
      </div>
    )
  }
}
