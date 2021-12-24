import { SET_USER } from "../action";

const initialState = {
   data: JSON.parse(localStorage.getItem('data') || '[]')
}

const getlocalStorage=(data=[])=>{
    localStorage.setItem('data',JSON.stringify(data))

}

export const setUsers = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:{
            const data = [...state.data,action.payload]
            getlocalStorage(data)
            return{
                    ...state,
                    data
            }
        }
            default:
            return  state
    }
}