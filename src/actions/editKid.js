const editKid = (e, state, id, history) => {
    e.preventDefault();
    const {name, birthday, gender} = state

    return (dispatch) => {
        return fetch(`http://localhost:3000/kids/${id}`, {
        method: 'PATCH',
        headers: {
            "Authorization": `${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json',
            "Accept": "application/json; odata=verbose"
        },
            body: JSON.stringify({
                name: name,
                birthday: birthday,
                gender: gender
            })
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            dispatch({type: 'SET_SELECTED_KID', kid: data})
            dispatch({type: 'EDIT_KID', kid: data})
            history.push('/profile')
        })
    }   
}

export default editKid;