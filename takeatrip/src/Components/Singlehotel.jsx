import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Singlehotel = () => {
    const { hotelId } = useParams();
    const [hotel, setHotel] = useState(null); 
   useEffect(()=>{
    fetch(`https://long-plum-mite-cape.cyclic.app/results/${hotelId}`)
    .then(response=>response.json())
    .then(data=>{
        setHotel(data);
        console.log("data",data)
    })
    .catch(error=>{
        console.log(error.message);
    });
   },[])
  return (
     <div>
        {hotel ? (
            <div>

                <h1>hotel.title</h1>
                <p>hotel.city</p>
            </div>
        ):(<p>Loading....</p>)}
     </div>
  )
}

export default Singlehotel