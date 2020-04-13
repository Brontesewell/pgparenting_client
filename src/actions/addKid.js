const addKid = (e, state, history) => {
    e.preventDefault();

    const {name, birthday, gender, user_id, behaviour_progress, behaviour_score, sport_progress, sport_score, academic_progress, academic_score, character_progress, character_score} = state

    return (dispatch) => {
        fetch('http://localhost:3000/kids',{
            method: "POST",
            headers: {
                "Authorization": `${localStorage.getItem('jwt')}`,
                "Content-type": "application/json",
                "Accept": "application/json; odata=verbose"

            },
            body: JSON.stringify({
                name: name,
                birthday: birthday,
                gender: gender,
                user_id: user_id,
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
            
            dispatch({ type: "ADD_KID", kid: data })
            localStorage.setItem('selectedJournal', JSON.stringify(data));
            history.push('/profile')
        }).catch(err => console.log(err))
    }
 
}

export default addKid;