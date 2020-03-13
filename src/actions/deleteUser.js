const deleteUser = (e, history, user) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/users/${user.id}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `${localStorage.getItem('jwt')}`,
                "Content-type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(() => {
            dispatch({type: 'CLEAR_CURRENT_USER', user})
            dispatch({type: 'DELETE_USER', user})
            history.push('/')
        })
    }
}

export default deleteUser