import React from 'react'

const Contact = () => {
  return (
    <div className='contact-wrapper'>
      
      <h1 style={{color:"white"}}>ENJOY THE APP</h1>
      <div className='contactsub'>
        <div style={{background:"white",borderRadius:"10px",padding:"20px",display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
            <p style={{display:"flex" ,alignItems:"center",gap:"20px",}}>
                <img src="https://s3.rdbuz.com/web/images/homeV2/appinstall/tick.svg" alt="tgj" />
                <span>Quick access</span>
            </p>
            <p style={{display:"flex" ,alignItems:"center",gap:"20px",}}>
                <img src="https://s3.rdbuz.com/web/images/homeV2/appinstall/tick.svg" alt="yf" />
                <span>Superior live tracking </span>
            </p>
        </div>

        <div style={{display:"flex",color:"white",gap:"20px"}}>
            <div>
                <p style={{marginBottom:"10px",fontSize:"1.1rem",fontWeight:"600"}}>Scan to download</p>
                <img src='https://s1.rdbuz.com/web/images/homeV2/qrCode.svg' alt='' />
            </div>
            <div >
                <p style={{marginBottom:"10px",fontSize:"1.1rem",fontWeight:"600"}}>Download the App on</p>
                <div style={{gap:"10px",display:"flex",flexDirection:"column"}}>
                <img src="https://s2.rdbuz.com/web/images/homeV2/appinstall/playStore.svg" alt="" />
                <img src="https://s3.rdbuz.com/web/images/homeV2/appinstall/appStore.svg" alt="" />
                </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Contact
