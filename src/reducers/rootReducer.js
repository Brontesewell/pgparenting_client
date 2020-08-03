const initialState = {
    currentUser: {},
    users: [],
    kids: [],
    journals: [],
    catagories: [],
    collections: [],
    displayCatagories: [],
    loading: false,
    selectedKid: {},
    selectedCourse: {},
    // emailSubscribed: [],
    selectedJournals: null,
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
        case 'SIGN_OUT':
            return {...state, currentUser: {}}

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
        // case 'CLEAR_SELECTED_KID':
        //         return {...state, selectedKid: {} }                




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

        case 'ADD_CONTACT':
            return {...state, currentUser: {...state.currentUser, contacts: action.contact_info}}

        default:
            return state
    }
}

export default rootReducer