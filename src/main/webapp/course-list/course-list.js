class CourseList extends React.Component {
  state = {
    courses: []
  }

  findAllCourses = () =>
    findAllCourses()
      .then((courses) => this.setState({courses}))

  createCourse = () =>
    createCourse()
      .then(() => this.findAllCourses())

  deleteCourse = (courseId) =>
    deleteCourse(courseId)
      .then(() => this.findAllCourses())

  componentDidMount = () =>
    this.findAllCourses()

  render() {
    return(
      <div className="container-fluid">
        <button
          className="btn btn-success float-right"
          onClick={() => this.createCourse()}>
          Create
        </button>
        <a className="btn btn-danger float-right"
           href="../../index.html">
          Home
        </a>
        <h1>Course List</h1>
        <table className="table">
          <tbody>
          {
            this.state.courses.map((course) =>
              <tr key={course.courseId}>
                <td>{course.courseId}</td>
                <td>{course.title}</td>
                <td>
                  <a className="btn btn-primary float-right"
                     href={`/course-editor/course-editor.html?courseId=${course.courseId}`}>
                    Edit
                  </a>
                  <button className="btn btn-danger float-right"
                          onClick={() => this.deleteCourse(course.courseId)}>
                    Delete
                  </button>
                </td>
              </tr>
            )
          }
          </tbody>
        </table>
      </div>
    )
  }
}

ReactDOM.render(
  <CourseList />,
  document.getElementById('root')
)

