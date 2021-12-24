import { combineReducers } from "redux";
import { addTodo } from "./todo";
import { setUsers } from "./setuser";

export const reducer= combineReducers({
    addTodo,
    setUsers,
})