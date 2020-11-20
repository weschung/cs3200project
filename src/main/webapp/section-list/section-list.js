class SectionList extends React.Component {
  state = {
    sections: []
  }

  findAllSections = () =>
    findAllSections()
      .then(sections => this.setState({sections}))

  findSectionsForCourse = () => {
    let search = window.location.search
    search = search.replace("?", "")
    search = search.split("=")
    const courseId = search[1]
    findSectionsForCourse(courseId)
      .then(sections => this.setState({sections}))
  }

  componentDidMount = () => {
    let search = window.location.search
    debugger
    if(search) {
      this.findSectionsForCourse()
    } else {
      this.findAllSections()
    }
  }

  render() {
    return(
      <div className="container-fluid">
        <h1>Section List</h1>
        <table className="table">
          <thead>
          <tr>
            <th>Section ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>&nbsp;</th>
          </tr>
          </thead>
          <tbody>
          {
            this.state.sections.map(section =>
              <tr key={section.sectionId}>
                <td>{section.sectionId}</td>
                <td>{section.sectionName}</td>
                <td>
                  <a href={`../../course-editor/course-editor.html?courseId=${section.courseId}`}>
                    {section.courseTitle}
                  </a>
                </td>
                <td>
                  <a className="btn btn-primary"
                     href={`../../section-editor/section-editor.html?sectionId=${section.sectionId}`}>
                    Edit
                  </a>
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
  <SectionList />,
  document.getElementById('root')
)
