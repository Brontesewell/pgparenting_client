const deleteUser = (e, history, user) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/users/${user.id}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
                "Accept": "application/json; odata=verbose"
            }
        })
        .then(() => {
            dispatch({type: 'CLEAR_CURRENT_USER', user})
            dispatch({type: 'DELETE_USER', user})
            history.push('/')
        }).catch(err => console.log(err))
    }
}

export default deleteUser