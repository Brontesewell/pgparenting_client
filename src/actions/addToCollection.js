
const addToCollection = (e, state, history) => {
    e.preventDefault(); 
    const {course_id, user_id} = state

return (dispatch) => {
    fetch('http://localhost:3000/collections', {
       method: 'POST',
       headers: {
        "Authorization": `${localStorage.getItem('jwt')}`,
        "Content-type": "application/json",
        "Accept": "application/json; odata=verbose"
       },
       body: JSON.stringify({
           user_id: user_id,
           course_id: course_id,
       })
       })
       .then(resp => resp.json())
       .then(data => {
               dispatch({type: 'ADDED_TO_FAVS', collection: data, loading: false})
               window.alert('Course added to favourites in your user profile!')
           
       
       })
   }
}

export default addToCollection