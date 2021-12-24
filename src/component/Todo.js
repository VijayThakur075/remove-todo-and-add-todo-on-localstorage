import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, setUser } from '../action';


export const Todo = () => {
    const AddData = useSelector(state => state.addTodo.userInfo);
    const userData = useSelector(state => state.setUsers.data)

    console.log(AddData);
    const dispatch = useDispatch();

    const { name, email, password } = AddData;

    const handelRemove = (index) => {
        const updatedindex = userData.filter((elem)=>{
            return index !== elem.id
        })
        localStorage.setItem('data', JSON.stringify(updatedindex))

       
         window.location.reload()
    }

    const handleChange = (e) => {
        dispatch(addTodo({ ...AddData, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setUser(AddData));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>name :</label>
                <input type="text" name='name' value={name} onChange={handleChange} />
                <label>email :</label>
                <input type="text" name='email' value={email} onChange={handleChange} />
                <label>password :</label>
                <input type="text" name='password' value={password} onChange={handleChange} />

                <input type="submit" value='submit' />
            </form>

            {
                userData.reverse().map((item) => (
                    <div>
                        <ul key={item.id}>
                            <li>id:{item.id}</li>
                            <li>name:{item.name}</li>
                            <li>email:{item.email}</li>
                            <li>password:{item.password}</li>
                            <button onClick={(e) => handelRemove(item.id)}>delete</button>

                        </ul>
                    </div>

                ))
            }
        </div>
    )
}
