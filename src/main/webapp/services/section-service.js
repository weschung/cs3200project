const FIND_ALL_SECTIONS  = "http://localhost:8080/findAllSections"
const FIND_SECTION_BY_ID = "http://localhost:8080/findSectionById"
const FIND_SECTIONS_FOR_COURSE = "http://localhost:8080/findSectionsForCourse"
const CREATE_SECTION_URL = "http://localhost:8080/createSection"
const DELETE_SECTION_URL = "http://localhost:8080/deleteSection"
const UPDATE_SECTION     = "http://localhost:8080/updateSection"

const findAllSections = () =>
  fetch(`${FIND_ALL_SECTIONS}`)
    .then(response => response.json())

const findSectionsForCourse = (courseId) =>
  fetch(`${FIND_SECTIONS_FOR_COURSE}/${courseId}`)
    .then(response => response.json())

const findSectionById = (sectionId) =>
  fetch(`${FIND_SECTION_BY_ID}/${sectionId}`)
    .then(response => response.json())

const createSection = (section) =>
  fetch(`${CREATE_SECTION_URL}`)
    .then(response => response.json())

const deleteSection = (sectionId) =>
  fetch(`${DELETE_SECTION_URL}/${sectionId}`)

const updateSection = (section) =>
  fetch(`${UPDATE_SECTION}/${section.sectionId}/${section.sectionName}`)
    .then(response => response.json())
