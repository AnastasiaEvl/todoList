import React, {useContext} from 'react'
import Context from "../Context";
import './formStyle.css';

export default function TodoItem({todo, index, onChange}){
    const {removeTodo} = useContext(Context)
    const classes = []

    if (todo.completed) {
        classes.push('done')
    }

    return(

        <li className='list__abilities'>
            <span className={classes.join('')}>
                <input className='list__checkbox' type='checkbox' onChange={()=>onChange(todo.id)}/>
                <strong>{index + 1} </strong>
                {todo.title}
            </span>
            <span><button className='button__todo' onClick={()=>removeTodo(todo.id)}> &times; </button></span>

      </li>


    )
}
