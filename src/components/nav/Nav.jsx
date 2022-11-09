import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import './nav.css'
import Logo from '../../assets/logo.png'
import {NavList} from './nav-list'

const Nav = () => {
  return (
    <nav>
      <div className='left'>
        <a><img src={Logo} alt="Logo"/></a>
        <div className='vertical'></div>
        <a id='hr'>HR</a>
      </div>        
      <div className='right'>
        {NavList.map(item => (
          <a>{item.name} {item.icon}</a>
        ))}
          <div className='employee-search'>
            <input type="text" placeholder='employee search'/>
            <a><FontAwesomeIcon icon={faSearch} size="xl"/></a>
          </div>            
          <a><FontAwesomeIcon icon={faBell} size="xl"/></a>
          <span id='dot'></span>
          <a id='admin'>Admin <FontAwesomeIcon icon={faCaretDown} size="xs"/></a>
      </div>
    </nav>
  )
}

export default Nav