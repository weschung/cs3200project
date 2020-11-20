class CourseEditor extends React.Component {
  state = {
    course: {}
  }

  componentDidMount = () => this.findCourseById()

  findCourseById = () => {
    let search = window.location.search.split("=")
    const courseId = search[1]
    findCourseById(courseId)
      .then(course => this.setState({course}))
  }

  submitForm = () =>
    updateCourse(this.state.course)
      .then(this.findCourseById)

  render() {
    return(
      <div className="container-fluid">
        <h1>Course Editor {this.state.course.title}</h1>
        <form>
          <input
            value={this.state.course.courseId}
            className="form-control"
            readOnly={true}/>
          <input
            onChange={
              (event) =>
              this.setState({
              course: {...this.state.course, title: event.target.value}
            })}
            className="form-control"
            value={this.state.course.title}/>
          <button
            type="button"
            onClick={() => this.submitForm()}
            className="btn btn-success">
            Save
          </button>
          <a className="btn btn-danger" href="../../course-list/course-list.html">
            Cancel
          </a>
        </form>
        <a href={`../../section-list/section-list.html?courseId=${this.state.course.courseId}`}>
          Sections
        </a>
      </div>
    )
  }
}

ReactDOM.render(
  <CourseEditor />,
  document.getElementById('root')
)
