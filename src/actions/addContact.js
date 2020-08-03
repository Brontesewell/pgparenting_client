const addContact = (e, state) => {
    e.preventDefault();

    const {email, f_name, l_name, description, user_id} = state

    return (dispatch) => {
        fetch('http://localhost:3000/contacts',{
            method: "POST",
            headers: {
                "Authorization": `${localStorage.getItem('jwt')}`,
                "Content-type": "application/json",
                "Accept": "application/json; odata=verbose"

            },
            body: JSON.stringify({
                email: email,
                f_name: f_name,
                l_name: l_name,
                description: description,
                user_id: user_id,
            })
        })
        .then(resp => resp.json())
        .then(data => {
            // console.log(data)
            dispatch({ type: "ADD_CONTACT", contact_info: data })
            
            
        }).catch(err => console.log(err))
    }
 
}

export default addContact;