const initialState = {
    currentUser: {},
    users: [],
    kids: [],
    catagories: [],
    // babies: [],
    // toddlers: [],
    // pre_schools: [],
    // primary_schools: [],
    // preteens: [],
    // teens: [],
    // young_adults: [],
    displayCatagories: [],
    loading: false,
    selectedKid: {},
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BEGIN_SIGN_IN':
          return state
        case 'SET_CURRENT_USER':
            return {...state, currentUser: action.user}
        case 'SET_ALL_USERS':
            return {...state, users: action.users }
        case 'ADD_USER':
            return {...state, users:[...state.users, action.user]}
        case 'CLEAR_CURRENT_USER':
            return {...state, currentUser: {} }
        case 'DELETE_USER':
            const deletedArray = state.users.filter(user => user.id !== action.user.id)
            return {...state, users: deletedArray}


        case 'GETTING_CATAGORIES':

                    return {...state, loading: true}
        case 'GET_ALL_CATAGORIES':
                return {...state, catagories: action.catagories, displayCatagories: action.catagories, loading: true }
       
       
        case 'SET_ALL_KIDS':
                return {...state, kids: action.kids }
        case 'SET_SELECTED_KID':
            return {...state, selectedKid: action.kid}     
        case 'EDIT_KID':
                const newArray = state.kids.filter(kid => kid.id !== action.kid.id)
                newArray.push(action.kid)
                console.log(newArray)
                return {...state, kids: newArray, currentUser: {...state.currentUser, kids: newArray}}


        case 'DELETE_KID':
                  const filteredArray = state.kids.filter(kid => kid.id !== action.kid.id)
             return {...state, kids: filteredArray}










        case 'GET_ALL_BABYS':
                // const newArray = state.babies.filter(catagories => catagories.id == 1)
                return {...state, babies: action.babies}
               

        // case 'GET_ALL_TODDLERS':
        //         return {...state, toddlers: action.toddlers, loading:true }


        // case 'GET_ALL_PRE_SCHOOLS':
        //          return {...state, pre_schools: action.pre_schools, loading:true }
        // case 'GET_ALL_PRIMARY_SCHOOLS':
        //         return {...state, primary_schools: action.primary_schools, loading:true }
        // case 'GET_ALL_PRETEENS':
        //           return {...state, preteens: action.preteens, loading:true }
        // case 'GET_ALL_TEENS':
        //            return {...state, teens: action.teens, loading:true }
        // case 'GET_ALL_YOUNG_ADULTS':
        //             return {...state, young_adults: action.young_adults, loading:true }



        default:
            return state
    }
}

export default rootReducer