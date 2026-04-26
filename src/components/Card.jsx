import React from 'react'
import '../style/card.css'

const Card = ({formData,handleDelete}) => {

  return (
    formData.map((data,index) => (
        <div key={index} className="card">
            <div className="title">
                <h4>{data.title}</h4>
            </div>
            <div className="description">
                <p>{data.description}</p>
            </div>
            <div className="buttons">
                <button onClick={(i) => handleDelete(index)} className="dlt-btn">delete</button>
                <button className="edit-btn">edit</button>
            </div>
        </div>
    ))
  )
}

export default Card