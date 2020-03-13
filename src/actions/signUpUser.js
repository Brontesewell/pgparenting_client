const signUpUser = (e, state, history) => {
    e.preventDefault();

    const {firstName, lastName, email, password} = state

    return (dispatch) => {
        fetch('http://localhost:3000/users',{
            method: "POST",
            headers: {
                "Authorization": `${localStorage.getItem('jwt')}`,
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user: {
                    first_name: firstName,
                    last_name: lastName,
                    email,
                    password 
                }
            })
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch({ type: "SET_CURRENT_USER", user: data.user })
            dispatch({ type: "ADD_USER", user: data.user })
            localStorage.setItem('jwt', data.jwt)
            history.push('/add-address')
        })
    }

 
}

export default signUpUser