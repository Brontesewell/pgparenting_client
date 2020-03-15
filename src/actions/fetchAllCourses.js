const fetchAllCourses= () => {
    return (dispatch) => {
        dispatch({type: 'GETTING_COURSES'})
        return fetch('http://localhost:3000/courses', {
            method: "GET",
            headers: {
              "Authorization": `${localStorage.getItem('jwt')}`,
              'Content-Type': 'application/json',
                "Accept": "application/json"
               
            }
        })
        .then(res => res.json())
        .then(data => {
            dispatch({ type: "GET_ALL_COURSES", courses: data})
        })
    }
}

export default fetchAllCourses