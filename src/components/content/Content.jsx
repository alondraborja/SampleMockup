import React from 'react'
import './content.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCircleInfo, faSearch, faCaretDown, faCaretLeft, 
         faCaretRight, faForwardStep, faBackwardStep } from '@fortawesome/free-solid-svg-icons'
import { TableData } from './table-data'
import styled from 'styled-components'
import { StyledButton, StyledCategory, CategoryNumber, BorderedNumber } from '../styledComponents/styles'

const ModifiedCategory = styled(StyledCategory)`
    background: none;
    color: var(--color-black);
`
const ModifiedCatNum = styled(CategoryNumber)`
    background-color: var(--color-orange);
`
const Content = () => {
  return (
    <section id='content'>
        <article id='top'>
            <div>
                <h1>Announcements</h1>
                <p>View, create, or edit announcements for all employees of your company.</p>
            </div>
            <StyledButton><FontAwesomeIcon icon={faPlus}/> Post an Announcement</StyledButton>
        </article>
        <article id='table-top'>
            <div className='categories'>
                <StyledCategory><CategoryNumber>10</CategoryNumber>All</StyledCategory>
                <ModifiedCategory><ModifiedCatNum>10</ModifiedCatNum>Drafts</ModifiedCategory>
            </div>
            <div className='table-top-right'>
                <div className='filterBy'>
                    <input type="text" placeholder='Filter by' disabled/>
                    <a><FontAwesomeIcon icon={faCaretDown}/></a>
                </div>
                <div className='search'>
                    <input type="text" placeholder='Search...'/>
                    <a><FontAwesomeIcon icon={faSearch}/></a>
                </div>
            </div>
        </article>
        <table>
            <thead>
                <tr>
                    <th>TITLE</th>
                    <th>MESSAGE</th>
                    <th>SENT BY</th>
                    <th>SENT THROUGH &nbsp;<FontAwesomeIcon icon={faCircleInfo} color="#0F6EEB" size='lg'/></th>
                    <th>DATE CREATED</th>
                    <th>START DATE</th>
                    <th>END DATE</th>
                    <th className='null-row'></th>
                </tr>
            </thead>  
            <tbody>  
            {TableData.map(item => (
            <tr>
                <td>{item.title}</td>
                <td>{item.message}</td>
                <td>{item.sentBy}</td>
                <td className='sent-through'>{item.sentThrough}</td>
                <td>{item.dateCreated}</td>
                <td className='date-with-time'>{item.startDate}<br/><span>{item.startDateTime}</span></td>
                <td className='date-with-time'>{item.endDate}<br/><span>{item.endDateTime}</span></td>
                <td>{item.null}</td>
            </tr>
            ))}
            </tbody>
        </table>
        <article className='table-footer'>
            <div>Items per page <BorderedNumber>10<a><FontAwesomeIcon icon={faCaretDown}/></a></BorderedNumber></div>
            <div>
                <a><FontAwesomeIcon icon={faBackwardStep}/></a><a><FontAwesomeIcon icon={faCaretLeft}/></a>
                page <BorderedNumber>1</BorderedNumber> of 1
                <a><FontAwesomeIcon icon={faForwardStep}/></a><a><FontAwesomeIcon icon={faCaretRight}/></a>
            </div>
            <div>Showing 1-10 of 1</div>
        </article>
    </section>
  )
}

export default Content