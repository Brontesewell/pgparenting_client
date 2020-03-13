const fetchAllUsers= () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/users', {
            method: "GET",
            headers: {
              "Authorization": `${localStorage.getItem('jwt')}`,
              "Accept": "application/json"
            }
        })
        .then(res => res.json())
        .then(users => {
            dispatch({ type: "SET_ALL_USERS", users: users})
        })
    }
}

export default fetchAllUsers