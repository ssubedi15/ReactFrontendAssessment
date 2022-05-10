
export const initialUserState = {
    firstName: '',
    lastName: '',
    npiNumber: '',
    businessAddress: '',
    telephoneNumber: '',
    emailAddress: ''
}

const registrationReducer = (state, action) => {
    switch(action.type){
        case "reset":
            return initialUserState;
        case "update":
             return { ...state, [action.field]: action.value};
        case "set":
        return { ...action.value}
        default: 
            return state;
    }
}
export default registrationReducer;