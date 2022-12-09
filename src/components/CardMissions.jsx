import React from 'react'

const CardMissions = ({mission}) => {

 
  return (
    <div className='card'>
        <h1>{mission.mission_name}</h1>
        <h3>{mission.mission_id}</h3>
        <ul className=''>
            <li> <strong>Wikipedia: </strong><span>{mission.wikipedia}</span></li>
            <li><strong>Web Site: </strong><span>{mission.website}</span></li>
            <li><strong>Twitter: </strong><span>{mission.twitter}</span></li>
        </ul>
        <h3 className='description'>Description</h3>
        <div className='divDescription'>
            <p className='description'>{mission.description}</p>
        </div> 
    </div>
  )
}

export default CardMissions