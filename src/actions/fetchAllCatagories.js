const fetchAllCatagories= () => {
    return (dispatch) => {
        dispatch({type: 'GETTING_CATAGORIES'})
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
            dispatch({ type: "GET_ALL_CATAGORIES", catagories: data})
            // dispatch({ type: "GET_ALL_BABYS", babies: data})

            // data.map(catagories => catagories.id === 1 ?
            //     catagories.id === 2 ?
            //     dispatch({ type: "GET_ALL_TODDLERS", toddlers: data}) :
            //     catagories.id === 3 ?
            //     dispatch({ type: "GET_ALL_PRE_SCHOOLS", pre_schools: data}) :
            //     catagories.id === 4 ?
            //     dispatch({ type: "GET_ALL_PRIMARY_SCHOOLS", primary_schools: data}) :
            //     catagories.id === 5 ?
            //     dispatch({ type: "GET_ALL_PRETEENS", preteens: data}) :
            //     catagories.id === 6 ?
            //     dispatch({ type: "GET_ALL_TEENS", teens: data}) :
            //     catagories.id === 7 ?
            //     dispatch({ type: "GET_ALL_YOUNG_ADULTS", young_adults: data}) :
            //     null
            // )
        }).catch(err => console.log(err))
    }
}

export default fetchAllCatagories