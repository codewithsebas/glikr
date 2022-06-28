import React from 'react'
import './Start.css'
import RondaOne from '../round_one/RondaOne'


const Start = () => {
  return (
    <>
        <div className='all'>
            <div className='src'></div>
            <div className='splash'>
                <img src='https://1000marcas.net/wp-content/uploads/2020/02/Marvel-Studios-Logo-2002.png' alt='Logo'></img>
            </div>
            <div className='container'>
              <div className='ronda_one'>
                <RondaOne/>
              </div> 
            </div>
        </div>
    </>
  )
}

export default Start