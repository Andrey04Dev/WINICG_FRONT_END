import React from 'react'
import Navbar from '../../common/Navbar'
import GetTasks from '../../Forms/Tasks/GetTasks'

const TasksPage = () => {
  return (
    <div className='row vw-100'>
        <div className="col-md-2">
        <Navbar/>
        </div>
        <div className="col-md-10">
        <GetTasks />
        </div>
    </div>
  )
}

export default TasksPage