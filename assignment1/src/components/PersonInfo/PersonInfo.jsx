import React from 'react'
import PropTypes from 'prop-types'
import ProfileBox from '../ProfileBox/ProfileBox'
import './PersonInfo.css';


const PersonInfo = ({ data }) => {
    return (
        <div className='PersonInfo-contaioner'>
            {
                data.map((person, index) => {
                    return <ProfileBox person={person} key={index}/> 
                })
            }
        </div>
    )
}

PersonInfo.propTypes = {
    data: PropTypes.any

}

export default PersonInfo