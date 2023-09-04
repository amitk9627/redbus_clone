import React from 'react'

const Navbar = () => {
    return (
        <div style={{ height: "100px", display: "flex", justifyContent: "space-around", alignItems: "center", }}>
            
            <div>
                <img src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" alt="hg" />
            </div>

            <div style={{ fontSize: "1.2rem" }}>
                <div style={{ display: "flex", gap: "10px", justifyContent: "space-between" }}>
                    <div className='navlink' onClick={()=>alert("its a dummy link")}>
                        <div>
                            <img src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" width="40px" alt="xyz" />
                        </div>
                        <span>Bus Tickets</span>
                    </div>

                    <div className='navlink' onClick={()=>alert("its a dummy link")}>
                        <div>
                            <img src="https://st.redbus.in/web/images/layout/ryde_vertical.svg" width={"40px"} alt="zyx" />
                        </div>
                        <span>Cab Rental</span>
                    </div>
                    <div className='navlink' onClick={()=>alert("its a dummy link")}>
                        <div>
                            <img src="	https://st.redbus.in/web/images/layout/rail_vertical.svg" width={"40px"} alt="yzx" />
                        </div>
                        <span>Train Tickets</span>
                    </div>
                </div>
            </div>

            <div style={{flexDirection:"row", gap: "10px" }} className='navlink' onClick={()=>alert("its a dummy link")}>
                <img width="25px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAbFBMVEX///8AAADk5ORmZmZiYmLIyMj19fVFRUWXl5f7+/vMzMw/Pz94eHjw8PC2trawsLDU1NRdXV1LS0vq6uqKiopRUVHCwsLb29uCgoKQkJCqqqoJCQkiIiIzMzNYWFgdHR2fn58WFhZvb28rKyscxes8AAADnElEQVRoge2b4bqiIBCGTdPC1DTMzMzUc//3uEsJKpmCjLTnWb+/wbwCwzDiZBirfoeQj90ku8ZxfM2SEPtIF/iSeefbpqvbOc3M5cGBV22GlafJkuDQ+8ClSsNlwCg4TJCJTsES5LsAmegOPfXuWZBMVEDOvDO1zrxSBwqdDFiPrllgu65rB9k1ev/54cKg+UH/pIHPNfGDlHeHGICM+yudp+FwEEOXNO/PDP+A0gp74zlkYwb9rLcLDxc1tFt1jN2PUy6Ejt1HzZX83e2OYy9yYqB9t4vCyMPuDGLBTrg78bNPmEvHyFWi314dbv4wC5Ut1dNuveQwy9uddnPdZdfNbF0umsNOW7ToUrfCLVxmtRoF7YTPCc7Og/WXDq8O63qbF5/81oBsNrdV3qPtLvHkOtqs4/w8pF01qfiGWHxIZ6M73lrI9DoyF1dJAhzm7BJpVNtJLfthMfkk7m5s2JJe8iZPeuBoR7uoHv9so51FezAnV897YtnFs2hQkI+lvLDkfvGrpn2tjDaMurGVi3lbIDtPY2KuLnYK03Rb2D9GRU9isUmnT1qCsEtqTqQxyw8VU9xG7EgRyZ7og0rEojE5p8ZeJtCYeqZqTKOisU1kwWnCcQRi0wB9mG7KwiDU5Y1JDQqsIWoEhF7A4CowBdGOKoK5rRK22L/egNjhfYsjJyN/qaN+UyZukb/VUUmQX0o5i5+n0uJabpXZW86i9S+xcelZEdbGxpHllU0q+Do0TW3sV4Dfk5+bNFY3myTgNJnTzv6bitJdoJ+dGvQSVD87Z1mpfvZmZa/slb2yV/bKXtm/kE2rRfSzb4ynn22xtzX97IRdYWpnkw+GzvYr7O3rS0xSVA+t7EdVvF1B/GfvwEw111L9woW3+PnC5ci1VL9SlbB46jU8KaMNYydssVe45EEUJclYRCYmlwExNqHuXpFJJWCRlGnsgcCyWtkre2Wv7CWUbWYVQIGInHuzKr8ARD5CV19i42oD9zVUVqSYqfwSu/zipJswudo8PfMc9cKaWXoOHKjeQVrPT0fWMNx07SG5UDsDFQReDJRx4braDKuygOj+s+Iif/t0an4iE91gKmJoAVbB0fMRNPn6AiOfvlHUWeI2Cq+jaLiIhOIJ0IA+v2bKKixk2ZD70q1/poEdFaAxwbfL+rQ7vLQbdzWIQoHPukywF/ob1Uvj/gfxf5YR8cUTumb8qdA774Z09had8EbIGdJapiWsP9LwLvQ/vloqAAAAAElFTkSuQmCC" alt="gdf" />
                <span>Help</span>
            </div>

        </div>
    )
}

export default Navbar
