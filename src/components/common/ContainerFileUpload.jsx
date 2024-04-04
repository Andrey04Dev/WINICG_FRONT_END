import React from 'react'
const ContainerFileUpload = ({children}) => {
  return (
    <div className='container-fluid'>
        <div className='d-flex justify-content-center align-items-center border border-3 my-3 border-danger position-relative' style={{height:"10em", overflowY:"auto"}}>
            {children}
        </div>
    </div>
  )
}

export default ContainerFileUpload