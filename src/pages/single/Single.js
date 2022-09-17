import React from 'react'
import { useParams } from 'react-router-dom'

function Single() {

  let params = useParams()
  console.log(params);

  return (
    <div>Single</div>
  )
}

export default Single