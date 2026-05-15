import React, { useEffect, useState } from 'react'
import '../style/form.css'

const Form = ({formData,setFormData,editData,setEditData}) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
   
    useEffect(() => {
      if(editData){
        setTitle(editData.title)
        setDescription(editData.description)
      }else{
        setTitle("")
        setDescription("")
      }
    },[editData])

    const submitHandler = (e) => {
        e.preventDefault()
        if(editData !=  null){
          const updateData = [...formData]
          updateData[editData.index] = {
            title,
            description
          }
          setFormData(updateData)
          setEditData(null)
        }else{
          setFormData(prev => [...prev, {title, description}])
        }
       
        setTitle("")
        setDescription("")
    }



  return (
    <div className='form-div'>
        <h1>Create Notes</h1>
        <form onSubmit={submitHandler}>
            <input value={title} onChange={(e) => {setTitle(e.target.value)}} type="text" placeholder='Title' />
            <textarea value={description} onChange={(e) => {setDescription(e.target.value)}} placeholder='Description'></textarea>
            <button>{editData ? "update" : "create"}</button>
        </form>
    </div>
  )
}

export default Form