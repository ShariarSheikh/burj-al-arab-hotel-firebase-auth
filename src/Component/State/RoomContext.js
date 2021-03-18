import React, { createContext, useState } from 'react'
import hotelPic2 from '../../Images/hotel_room2.jpg'
import hotelPic1 from '../../Images/hotel_room1.jpg'
import hotelPic3 from '../../Images/hotel3.jpg'
import hotelPic4 from '../../Images/home.jpg'

export  const RoomContext = createContext()

export const RoomProvider =(props)=>{
    const [roomInfo,setRoomInfo] = useState([
        {
            id:1,
            img: hotelPic1,
            title:"Couple Power Room",
            description:`Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica`,
        },
        {
            id:2,
            img: hotelPic2,
            title:"Standard Room",
            description:`Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica`,
        },
        {
            id:3,
            img: hotelPic3,
            title:"Family Capacity Room",
            description:`Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica`,
        },
        {
            id:4,
            img: hotelPic4,
            title:"Couple Room",
            description:`Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica`,
        },
   
])
 return(
     <>
     <RoomContext.Provider value={[roomInfo,setRoomInfo]}>
         {props.children}
     </RoomContext.Provider>
     </>
 )
}

