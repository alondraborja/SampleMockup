import React from 'react'
import './content.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { TableData } from './table-data'

const Content = () => {
  return (
    <section id='content'>
        <article id='top'>
            <div>
                <h1>Announcements</h1>
                <p>View, create, or edit announcements for all employees of your company.</p>
            </div>
            <button><FontAwesomeIcon icon={faPlus} /> Post an Announcement</button>
        </article>
        <article id='table-top'>
            <div className='categories'>
                <div className='category type-1'><div>10</div>All</div>
                <div className='category type-2'><div>10</div>Drafts</div>
            </div>
            <div>
                <button>Filter by:</button>
                <button>Search</button>
            </div>
        </article>
        <table>
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
        {TableData.map(item => (
            <tr>
                <td>{item.title}</td>
                <td>{item.message}</td>
                <td>{item.sentBy}</td>
                <td className='sent-through'>{item.sentThrough}</td>
                <td>{item.dateCreated}</td>
                <td className='date-with-time'>{item.startDate}<br/>{item.startDateTime}</td>
                <td className='date-with-time'>{item.endDate}<br/>{item.endDateTime}</td>
                <td>{item.null}</td>
            </tr>
        ))}
        </table>
    </section>
  )
}

export default Content