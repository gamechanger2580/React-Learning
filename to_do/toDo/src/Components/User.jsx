import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const User = () => {

  const params= useParams()
  const navigation = useNavigate();

  return (
    <div className='User'>
      <button onClick={() => navigation("/about")} >Click Me</button>
    </div>
  )
}

export default User      