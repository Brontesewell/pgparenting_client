const fetchAllBabies= () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/catagories', {
            method: "GET",
            headers: {
              "Authorization": `${localStorage.getItem('jwt')}`,
              'Content-Type': 'application/json',
                "Accept": "application/json"
               
            }
        })
        .then(res => res.json())
        .then(data => {
                dispatch({ type: "GET_ALL_BABYS", babies: data})
        })
    }
}

export default fetchAllBabies