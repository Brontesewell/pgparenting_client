const initialState = {
    currentUser: {},
    users: [],
    kids: [],
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
          
    

        default:
            return state
    }
}

export default rootReducer