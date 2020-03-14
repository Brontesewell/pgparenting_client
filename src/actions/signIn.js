const signIn = (e, state, history ) => {
    e.preventDefault()
    return (dispatch) => {
        dispatch({type: 'BEGIN_SIGN_IN'})
        
        fetch('http://localhost:3000/login', {
            method: "POST",
            headers : { 
                'Content-Type': 'application/json',
                "Accept": "application/json; odata=verbose"

               },
            body: JSON.stringify({
                user: {
                    email: state.email, 
                    password: state.password
                }
            })
        })
        .then(resp => resp.json())
        .then(data => {
                dispatch({ type: "SET_CURRENT_USER", user: data.user })
                localStorage.setItem('jwt', data.jwt)
                history.push('/home')
        })
        
    }
}

export default signIn