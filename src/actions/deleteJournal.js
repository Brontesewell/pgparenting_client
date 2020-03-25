const deleteJournal = (e, journal, history) => {
    e.preventDefault();

    return (dispatch) => {
        fetch(`http://localhost:3000/journals/${journal.id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `${localStorage.getItem('jwt')}`,
                "Content-type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(() => {
            
            dispatch({type: 'DELETE_JOURNAL', journal})
            history.push('/profile')
        })
    }
}

export default deleteJournal;