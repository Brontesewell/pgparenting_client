const addKid = (e, state, history) => {
    e.preventDefault();

    const {name, birthday, gender, user_id} = state

    return (dispatch) => {
        fetch('http://localhost:3000/kids',{
            method: "POST",
            headers: {
                "Authorization": `${localStorage.getItem('jwt')}`,
                "Content-type": "application/json",
                "Accept": "application/json; odata=verbose"

            },
            body: JSON.stringify({
                name: name,
                birthday: birthday,
                gender: gender,
                user_id: user_id
            })
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            dispatch({ type: "ADD_KID", kid: data })
            history.push('/profile')
        })
    }
 
}

export default addKid;