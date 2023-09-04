import React from 'react'

const SortComponent = ({sortDeperature,sortPrice,sortRating,sortArival}) => {
  return (
    <div style={{backgroundColor:'', margin:'0 5rem'}}>
      <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>

        <div><p  className='gilst'>Sort By:</p></div>
        <div onClick={sortDeperature} ><p className='bnfgi'>Departure</p></div>
        <div onClick={sortArival} ><p className='bnfgi'>Arival</p></div>
        <div onClick={sortRating} ><p className='bnfgi'>Rating</p></div>
        <div onClick={sortPrice} ><p className='bnfgi'>Price</p></div>

 
      </div>
    </div>
  )
}

export default SortComponent;
