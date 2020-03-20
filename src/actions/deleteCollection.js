const deleteCollection = (e, collection, history) => {
    e.preventDefault();

    return (dispatch) => {
        fetch(`http://localhost:3000/collections/${collection.id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `${localStorage.getItem('jwt')}`,
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user_id: collection.user_id,
                course_id: collection.course_id,
            })
        })
        .then(() => {
            console.log(history)
            dispatch({type: 'DELETE_COLLECTION', collection})
            history.push('/profile')
        })
    }
}

export default deleteCollection;