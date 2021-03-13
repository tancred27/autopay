import { LOGIN_USER, LOGOUT} from  '../types';

const reduce = (state, action) => {
    switch (action.type) {
        case LOGIN_USER:
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                isAuthenticated: action.payload ? true : false,
                token: action.payload ? action.payload : null
            };
    
        case LOGOUT:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                isAuthenticated: false
            };
    
        default:
            return state;
    }
}

export default reduce;