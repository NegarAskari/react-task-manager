import React from 'react'
import Button from './Button'

const Header = ({title, onShowAddTask, showAddTask}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text={showAddTask?'close':'add task'} color={showAddTask?'red':'green'} onClick = {onShowAddTask}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Manager'
}


export default Header