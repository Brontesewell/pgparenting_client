const fetchAllUsers= () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/users', {
            method: "GET",
            headers: {
              "Authorization": `${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
                "Accept": "application/json; odata=verbose"

               
            }
        })
        .then(res => res.json())
        .then(users => {
            dispatch({ type: "SET_ALL_USERS", users: users})
        }).catch(err => console.log(err))
    }
}

export default fetchAllUsers


