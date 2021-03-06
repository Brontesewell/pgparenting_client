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
            
            dispatch({ type: "SET_ALL_JOURNALS", journals: data})
            // dispatch({ type: "SET_SELECTED_JOURNALS", journal: data})
        }).catch(err => console.log(err))
    }
}

export default fetchAllJournals


