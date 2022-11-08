import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faSearch, faBell } from '@fortawesome/free-solid-svg-icons'
import './nav.css'
import Logo from '../../assets/logo.png'

const Nav = () => {
  return (
    <nav>
        <div className='left'>
            <a ><img src={Logo} alt="Logo"/></a>
            <a id='hr'>HR</a>
        </div>        
        <div className='right'>
            <a href="#myrequests">My Requests <FontAwesomeIcon icon={faCaretDown} size="xs"/></a>
            <a href="#myteam">My Team <FontAwesomeIcon icon={faCaretDown} size="xs"/></a>
            <a href="#company">Company <FontAwesomeIcon icon={faCaretDown} size="xs"/></a>
            <a href="#administration">Administration Tools <FontAwesomeIcon icon={faCaretDown} size="xs"/></a>
            <a href="#maintenance">Maintenance <FontAwesomeIcon icon={faCaretDown} size="xs"/></a>
            <a>Employee Search</a>
            <a><FontAwesomeIcon icon={faSearch} size="xl"/></a>
            <a><FontAwesomeIcon icon={faBell} size="xl"/></a>
            <span id='dot'></span>
            <a href="#admin"id='admin'>Admin <FontAwesomeIcon icon={faCaretDown} size="xs"/></a>
        </div>
    </nav>
  )
}

export default Nav