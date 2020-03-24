const editKid = (e, state, id, history) => {
    e.preventDefault();
    const {name, birthday, gender, behaviour_progress, behaviour_score, sport_progress, sport_score, academic_progress, academic_score, character_progress, character_score} = state

    return (dispatch) => {
        return fetch(`http://localhost:3000/kids/${id}`, {
        method: 'PATCH',
        headers: {
            "Authorization": `${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json',
            "Accept": "application/json; odata=verbose"
        },
            body: JSON.stringify({
                name: name,
                birthday: birthday,
                gender: gender,
                behaviour_progress: behaviour_progress, 
                behaviour_score: behaviour_score, 
                sport_progress: sport_progress, 
                sport_score: sport_score, 
                academic_progress: academic_progress, 
                academic_score: academic_score, 
                character_progress: character_progress, 
                character_score: character_score,
            })
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            dispatch({type: 'SET_SELECTED_KID', kid: data})
            dispatch({type: 'EDIT_KID', kid: data})
            history.push('/profile')
        })
    }   
}

export default editKid;