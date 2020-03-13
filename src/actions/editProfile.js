const editProfile = (e, history, state, id) => {
    e.preventDefault();

    const {firstName, lastName, email } = state

    return(dispatch) => {
        return fetch(`http://localhost:3000/users/${id}`, {
            method: "PATCH",
            headers: {
                "Authorization": `${localStorage.getItem('jwt')}`,
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email
            })
        })
        .then(resp => resp.json())
        .then(user => {
            dispatch({type: 'SET_CURRENT_USER', user})
            history.push('/profile')
        })
    }
} 

export default editProfile;