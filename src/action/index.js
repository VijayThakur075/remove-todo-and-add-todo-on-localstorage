export const ADD_TODO = 'ADD_TODO'
export const SET_USER = 'SET_USER'

export const addTodo= (payload)=>({type: ADD_TODO, payload});
export const setUser= (payload)=>({type: SET_USER, payload})