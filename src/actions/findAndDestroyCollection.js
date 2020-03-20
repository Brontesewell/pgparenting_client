const findAndDestroyCollection = (e, history, collection) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/collectiondelete`, {
            method: 'DELETE',
            headers: {
                "Authorization": `${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
                "Accept": "application/json; odata=verbose"
            },
            body: JSON.stringify({
                user_id: collection.user_id,
                course_id: collection.course_id,
            })
        })
        .then((data) => {
            console.log(data)
            dispatch({type: 'DELETE_COLLECTION', collection: data})
            history.push('/profile')
        })
    }
}

export default findAndDestroyCollection