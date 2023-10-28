import React from 'react'
import PropTypes from 'prop-types'
import './ProfileBox.css'

const ProfileBox = ({ person }) => {
    return (
        <div className='card-container'>
            <div className='img-container'>
                <img src={person.image} alt="" />
            </div>
            <div className='text-container'>
            <p>{person.name}</p>
            <p>{person.email}</p>
            </div>
        </div>
    )
}

ProfileBox.propTypes = {
    person: PropTypes.any
}

export default ProfileBox