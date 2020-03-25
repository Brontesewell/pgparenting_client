const addJournal = (e, state, history) => {
    e.preventDefault();

    const {date_now, text, kid_id,} = state

    return (dispatch) => {
        fetch('http://localhost:3000/journals',{
            method: "POST",
            headers: {
                "Authorization": `${localStorage.getItem('jwt')}`,
                "Content-type": "application/json",
                "Accept": "application/json; odata=verbose"

            },
            body: JSON.stringify({
                date_now: date_now,
                text: text,
                kid_id: kid_id,
            })
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            dispatch({ type: "ADD_JOURNAL", journal: data })
            // dispatch({ type: "SET_SELECTED_JOURNALS", journal: data})
            
            
        })
    }
 
}

export default addJournal;