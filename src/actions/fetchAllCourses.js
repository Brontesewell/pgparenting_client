const fetchAllCourses= () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/courses', {
            method: "GET",
            headers: {
              "Authorization": `${localStorage.getItem('jwt')}`,
                "Accept": "application/json"
               
            }
        })
        .then(res => res.json())
        .then(courses => {
            dispatch({ type: "GET_ALL_COURSES", courses: courses})
        })
    }
}

export default fetchAllCourses