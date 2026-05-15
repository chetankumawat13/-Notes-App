import React, { useEffect, useState } from 'react'
import Form from './components/Form'
import './style/base.css'
import Card from './components/Card'

const App = () => {

  const [formData, setFormData] = useState(() => {
     const data = localStorage.getItem('formData') 
     return data ? JSON.parse(data) : []
  })
  const [editData, setEditData] = useState(null)

  useEffect(() => {
    localStorage.setItem('formData',JSON.stringify(formData))
  },[formData])


  const handleDelete = (index) => {
      setFormData(prev => prev.filter((_,i) => i !== index ))
  }

  const handleEdit = (index) => {
     setEditData({
        ...formData[index],
        index 
     })
  }


  return (
    <div className='main'>
      <Form formData={formData}  setFormData={setFormData} editData={editData} setEditData={setEditData} />
      <h2>Notes</h2>
      <div className="cards">
        <Card handleEdit={handleEdit} formData={formData} handleDelete={handleDelete} />
      </div>
    </div>
  )
}

export default App