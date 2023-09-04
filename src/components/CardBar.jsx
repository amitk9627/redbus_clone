import React from 'react'

const CardBar = ({item}) => {

  return (
    <div style={{background:'white',margin:'10px'}}>

        <div style={{display:'flex',justifyContent:"space-around",alignItems:'center'}}>

            <div>
                <p style={{ whiteSpace:"wrap" ,maxWidth: '200px' }} className='jdfie'>
                    {item.busName.toUpperCase().slice(0,15)}
                </p>
            </div>

            <div>
                <div style={{textAlign:'center'}}>
                    <p className='kjnk3h'>Departure</p>
                    <p className='dfugvy'>{item.departureTime}</p>
                </div>
            </div>

            <div>
                <div style={{textAlign:'center'}}>
                    <p className='kjnk3h'>Arival</p>
                    <p className='dfugvy'>{item.arrivalTime}</p>
                </div>
            </div>

            <div><p style={{backgroundColor:'#1CA915',padding:'5px'}} className='jdfie'>9/10</p></div> {/*{Math.floor(Math.random() * 10)+1} */}

            <div><p className='jdfie'>{item.ticketPrice}/-</p></div>
            
        </div>
      
    </div>
  )
}

export default CardBar
