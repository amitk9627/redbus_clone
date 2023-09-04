import React, { useState, useEffect,useRef } from 'react';
import Logo from '../Assets/sideBus.jpg';
import CardBar from './CardBar';
import Navbar from '../components/Navbar';
import SortComponent from './SortComponent';



const SearchComponent = () => {
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const inputRef=useRef();


    const searchChange = (e) => {
        e.preventDefault();
        if (source && destination) {
            setIsLoading(true);
            fetch(`https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${source}&destination=${destination}`)
                .then(res => res.json())
                .then(data => {
                    setData(data);
                    setIsLoading(false);
                })
                .catch(err => console.log(err));
        } else {
            setIsLoading(true)
        }

    }
    useEffect(() => {
        inputRef.current.focus();
        (async () => {
                setIsLoading(true);
                const res = await fetch("https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses");
                const jsonData = await res.json();
                setIsLoading(false);
                setData(jsonData);
            }
        )()

    }, [])

    useEffect(() => {
        if (!source && !destination) {
            setIsLoading(true);

        }
    }, [source, destination])

    // sorting
    const sortDeperature = () => {

        const filteredData = [...data].sort((a, b) => {
            const timeA = a.departureTime.split(":");
            const timeB = b.departureTime.split(":");

            const hourA = parseInt(timeA[0]);
            const hourB = parseInt(timeB[0]);

            const minuteA = parseInt(timeA[1].slice(0, 2));
            const minuteB = parseInt(timeB[1].slice(0, 2));

            const periodA = timeA[1].slice(2);
            const periodB = timeB[1].slice(2);

            if (periodA === "AM" && periodB === "PM") {
                return -1;
            }

            if (periodA === "PM" && periodB === "AM") {
                return 1;
            }

            if (hourA === hourB) {
                if (minuteA === minuteB) {
                    return 0;
                } else {
                    return minuteA < minuteB ? -1 : 1;
                }
            }

            return hourA < hourB ? -1 : 1;
        });
        setData(filteredData);


    }
    const sortArival = () => {

        const filteredData = [...data].sort((a, b) => {
            const timeA = a.arrivalTime.split(":");
            const timeB = b.arrivalTime.split(":");

            const hourA = parseInt(timeA[0]);
            const hourB = parseInt(timeB[0]);

            const minuteA = parseInt(timeA[1].slice(0, 2));
            const minuteB = parseInt(timeB[1].slice(0, 2));

            const periodA = timeA[1].slice(2);
            const periodB = timeB[1].slice(2);

            if (periodA === "AM" && periodB === "PM") {
                return -1;
            }

            if (periodA === "PM" && periodB === "AM") {
                return 1;
            }

            if (hourA === hourB) {
                if (minuteA === minuteB) {
                    return 0;
                } else {
                    return minuteA < minuteB ? -1 : 1;
                }
            }

            return hourA < hourB ? -1 : 1;
        });
        setData(filteredData);


    }

    const sortRating = () => {
        alert("rating data not present API \n Hard coded value");
    }

    const sortPrice = () => {
        setData("");
        const filteredData = [...data].sort((item1, item2) => item1.ticketPrice - item2.ticketPrice);
        setData(filteredData);


    }
    return (
        <div>
            <Navbar />
            <div id="main">
                <div>
                    <h1 className='heading'>Bus Ticket Booking </h1>
                    <form className='input-wrapper' onSubmit={searchChange} >

                        <div className='single-InputField'>
                            <label >FROM</label>
                            <input type='text' ref={inputRef} value={source} onChange={(e) => setSource(e.target.value)} />
                        </div>

                        <div className=' arrow'>
                            <div>&hArr;</div>
                        </div>

                        <div className='single-InputField'>
                            {/* to */}
                            <label>TO</label>
                            <input type='text' value={destination} onChange={(e) => setDestination(e.target.value)} />
                        </div>

                        <div className='single-InputField' >
                            <label>DATE</label>
                            <input type='date' />
                        </div>
                        <div style={{ background: "#e55454" }} className='sButton single-InputField'>
                            <button type='submit' >Search Buses</button>
                        </div>

                    </form>
                </div>
            </div>
            {
                !isLoading && <>
                    <div className='bus-svg'><img src={Logo} alt='bus' /></div>
                    <div style={{ background: '#e55454', padding: '10px' }}>
                        {!isLoading && <SortComponent sortDeperature={sortDeperature} sortRating={sortRating} sortPrice={sortPrice} sortArival={sortArival} />}
                        {
                            !isLoading &&
                            (data.map((item, i) => <CardBar key={i} item={item} />))
                        }
                    </div>
                </>}


        </div>
    )
}

export default SearchComponent
