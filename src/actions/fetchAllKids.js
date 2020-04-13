const fetchAllKids= () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/kids', {
            method: "GET",
            headers: {
              "Authorization": `${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
                "Accept": "application/json; odata=verbose"

               
            }
        })
        .then(res => res.json())
        .then(data => {
            dispatch({ type: "SET_ALL_KIDS", kids: data})
        }).catch(err => console.log(err))
    }
}

export default fetchAllKids


