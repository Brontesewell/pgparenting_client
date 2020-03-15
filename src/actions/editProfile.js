const editProfile = (e, history, state, id) => {
    e.preventDefault();

    const {firstName, lastName, email } = state

    return(dispatch) => {
        return fetch(`http://localhost:3000/users/${id}`, {
            method: "PATCH",
            headers: {
                "Authorization": `${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
                "Accept": "application/json; odata=verbose"
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email
            })
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch({type: 'SET_CURRENT_USER', user: data.user })
            history.push('/profile')
        })
    }
} 

export default editProfile;