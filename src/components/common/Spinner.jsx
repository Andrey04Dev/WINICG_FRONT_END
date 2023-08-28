import React from 'react'
import Icon from './Icon'

const Spinner = ({style}) => {
  return (
    <div className='d-flex justify-content-center align-items-center' style={style}>
        <Icon icon={['fas','spinner']} className=' position-relative me-4' spin ={true} size={"3x"}/>
        <h5 className='text-center mt-1'>Loading</h5>
    </div>
  )
}

export default Spinner