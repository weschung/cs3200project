class SectionEditor extends React.Component {
  state = {
    section: {}
  }

  findSectionById = () => {
    let search = window.location.search
    search = search.replace("?", "")
    search = search.split("=")
    const sectionId = search[1]
    findSectionById(sectionId)
      .then(section => this.setState({section}))
  }
  componentDidMount = () => this.findSectionById()

  submitForm = () => {
    updateSection(this.state.section)
      .then(this.findSectionById)
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Section Editor</h1>
        <form>
          <input
            readOnly={true}
            className="form-control"
            value={this.state.section.sectionId}/>
          <input
            onChange={
              (event) => {
                this.setState({
                  section: {
                    ...this.state.section,
                    sectionName: event.target.value
                  }
                })
              }}
            className="form-control"
            value={this.state.section.sectionName}/>
          <a href={`../../course-editor/course-editor.html?courseId=${this.state.section.courseId}`}>
            {this.state.section.courseTitle}
          </a>
          <br/>
          <button
            type="button"
            onClick={() => this.submitForm()}
            className="btn btn-success">
            Save
          </button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(
  <SectionEditor/>,
  document.getElementById("root")
)
