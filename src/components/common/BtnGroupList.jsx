import React from 'react'
import { Tooltips } from './Tooltips'
import Icon from './Icon'
import { ButtonLink } from './Button'

const BtnGroupList = ({array, params}) => {
  return (
    <>
    {Array.isArray(array) ? array && Object.values(array).map((array,index)=>(
        <div key={index} className='d-flex justify-content-center'>
        <Tooltips key={index} text={array.text} position={array.position}><ButtonLink to={params ? array.to+params:array.to}  className={array.className}>
        <Icon icon={["fas", `${array.icon}`]} />
      </ButtonLink></Tooltips></div>
    )): null}
    </>
  )
}

export default BtnGroupList