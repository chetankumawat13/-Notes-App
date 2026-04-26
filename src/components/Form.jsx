import React, { useState } from 'react'
import '../style/form.css'

const Form = ({formData,setFormData}) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    const submitHandler = (e) => {
        e.preventDefault()
        setFormData(prev => [...prev, {title, description}])
        setTitle("")
        setDescription("")
    }



  return (
    <div className='form-div'>
        <h1>Create Notes</h1>
        <form onSubmit={submitHandler}>
            <input value={title} onChange={(e) => {setTitle(e.target.value)}} type="text" placeholder='Title' />
            <textarea value={description} onChange={(e) => {setDescription(e.target.value)}} placeholder='Description'></textarea>
            <button>Create</button>
        </form>
    </div>
  )
}

export default Form