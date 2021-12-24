import { ADD_TODO } from "../action";

const initialState = {
    userInfo: {
        id: [new Date().getTime().toString() ],
        name: "",
        email: "",
        password:"",
    }
}

export const addTodo = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return{
                    ...state,
                    userInfo: action.payload,
            }
            default:
            return  state
    }
}