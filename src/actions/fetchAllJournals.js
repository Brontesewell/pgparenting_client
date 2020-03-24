const fetchAllJournals= () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/journals', {
            method: "GET",
            headers: {
              "Authorization": `${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
                "Accept": "application/json; odata=verbose"

               
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            dispatch({ type: "SET_ALL_JOURNALS", journals: data})
        })
    }
}

export default fetchAllJournals


