const deleteKid = (e, kid, history) => {
    e.preventDefault();

    return (dispatch) => {
        fetch(`http://localhost:3000/kids/${kid.id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `${localStorage.getItem('jwt')}`,
                "Content-type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(() => {
            
            dispatch({type: 'DELETE_KID', kid})
            history.push('/profile')
        }).catch(err => console.log(err))
    }
}

export default deleteKid;