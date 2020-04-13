const fetchAllCollections= () => {
    return (dispatch) => {
        dispatch({type: 'GETTING_COLLECTIONS'})
        return fetch('http://localhost:3000/collections', {
            method: "GET",
            headers: {
              "Authorization": `${localStorage.getItem('jwt')}`,
              'Content-Type': 'application/json',
                "Accept": "application/json"
               
            }
        })
        .then(res => res.json())
        .then(data => {
            dispatch({ type: "GET_ALL_COLLECTIONS", collection: data})
       
        }).catch(err => console.log(err))
    }
}

export default fetchAllCollections