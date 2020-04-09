const initialState = {
    currentUser: {},
    users: [],
    kids: [],
    journals: [],
    catagories: [],
    collections: [],
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
    selectedCourse: {},
    // emailSubscribed: [],
    selectedJournals: null,
    // JSON.parse(localStorage.getItem('selectedJournal')),
    // selectJournals: {}
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BEGIN_SIGN_IN':
          return state
        case 'SET_CURRENT_USER':
            return {...state, currentUser: action.user}
        case 'SET_ALL_USERS':
            return {...state, users: action.users }
        // case 'ADD_USER':
        //     return {...state, users:[...state.users, action.user]}

        case 'CLEAR_CURRENT_USER':
            return {...state, currentUser: {} }
        case 'DELETE_USER':
            const deletedArray = state.users.filter(user => user.id !== action.user.id)
            return {...state, users: deletedArray}


        case 'GETTING_CATAGORIES':

                    return {...state, loading: true}
        case 'GET_ALL_CATAGORIES':
                return {...state, catagories: action.catagories, displayCatagories: action.catagories, loading: true }
       case 'GET_ALL_COLLECTIONS':
            return {...state, collections: action.collection, loading: true }
       
        case 'DELETE_COLLECTION':
            const filteredCollection = state.currentUser.collections.filter(collection => collection.id !== action.collection.id)
            return {...state, currentUser: {...state.currentUser, collections: filteredCollection}}
     
     
        case 'ADDED_TO_FAVS':
                // return {...state, collections: action.collection, currentUser:{...state.currentUser, collections: [...state.currentUser.collections, action.collection]}}
                return { ...state, collections:[...state.collections, action.collection], currentUser:{...state.currentUser, collections: [...state.currentUser.collections, action.collection]}}
                


        case 'SET_ALL_KIDS':
                return {...state, kids: action.kids }
        case 'SET_SELECTED_KID':
                return {...state, selectedKid: action.kid}     
        case 'EDIT_KID':
                const newArray = state.currentUser.kids.filter(kid =>  kid.id !== action.kid.id )
                newArray.push(action.kid)
                return {...state, currentUser: {...state.currentUser, kids: newArray}}

        case 'DELETE_KID':
                const filteredArray = state.currentUser.kids.filter(kid => kid.id !== action.kid.id)
                return {...state, currentUser: {...state.currentUser, kids: filteredArray}}

         case 'ADD_KID':
                return {...state, kids: action.kid, currentUser:{...state.currentUser, kids: [...state.currentUser.kids, action.kid]}}
                




        case 'ADD_JOURNAL':
                return { ...state, journals:[...state.journals, action.journal], selectedJournals:{...state.selectedJournals, journals: [...state.selectedJournals.journals, action.journal]}}
        
                case 'SET_ALL_JOURNALS':
                return {...state, journals: action.journals }

        case 'DELETE_JOURNAL':
                const filteredJournal = state.kids.journals.filter(journal => journal.id !== action.journal.id)
                return {...state, kids: {...state.kids, journals: filteredJournal}}

        case 'SET_SELECTED_JOURNALS':
             return {...state, selectedJournals: action.journal} 

        case 'CLEAR_SELECTED_JOURNALS':
            return {...state, selectedJournals: null }






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