const editProfile = (e, history, state, id) => {
    e.preventDefault();

    const {firstName, lastName, subscribe, email } = state

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
                email: email,
                subscribe: subscribe,
            })
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch({type: 'SET_CURRENT_USER', user: data })
            history.push('/profile')
            
        }).catch(err => console.log(err))
    }
} 

export default editProfile;