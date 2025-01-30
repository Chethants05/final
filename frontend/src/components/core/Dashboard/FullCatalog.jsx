import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { getAllCourses } from "../../../services/operations/courseDetailsAPI"
import CoursesTable from "./InstructorCourses/CoursesTable"
import SearchBox from './../../common/SearchBox';

export default function FullCatalog() {
  useSelector((state) => state.auth)
  const [courses, setCourses] = useState([])
  const [allCourses, setAllCourses] = useState([])
  const [loading, setLoading] = useState(false)
  useSelector((state) => state.profile)

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      const result = await getAllCourses()
      // console.log('Instructors all courses  ', result);
      setLoading(false);
      if (result) {
        setCourses(result);
        setAllCourses(result);
      }
    }
    fetchCourses()
  }, [])


  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  function funcToSetFilteredData(filteredData){
    if (filteredData) {
        setCourses(filteredData)
      }
  }

  return (
    <div>
      <div className="mb-14 flex justify-between">
        {/* <div className="mb-14 flex items-center justify-between"> */}
        <h1 className="text-4xl font-medium text-richblack-5 font-boogaloo text-center lg:text-left">Available Courses</h1>
              <SearchBox data={allCourses} searchKey={"courseName"} onFilter={funcToSetFilteredData}/>
      </div>

      {/* course Table */}
      {courses && <CoursesTable courses={courses} setCourses={setCourses} loading={loading} setLoading={setLoading} isFullCatalog={true} />}
    </div>
  )
}