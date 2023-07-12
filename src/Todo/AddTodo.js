import React, {useState} from 'react';
import './formStyle.css';

export default function AddTodo({onCreate}){
    const [value, setValue]=useState('')

    function submitHandler(e){
        e.preventDefault()

        if(value.trim()){
            onCreate(value)
        }
    }
    return(
        <form className='form' onSubmit={submitHandler} >
            <input className='form__input' value={value} onChange={e=>setValue(e.target.value)}/>
                <button className='form__button' type='submit'>Add todo</button>
        </form>
    )
}
