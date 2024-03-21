import React, { useEffect, useState } from 'react'
import { FetchMenuCards } from '../../services/services'

export const MenuCards = () => {

    const [cards, setcards] = useState([])
    const fetchMenuCards=async()=>{
        const response =await FetchMenuCards()
    
        if(response.message==="successfully"){
            setcards(response?.data)
            console.log(response)
        }
    }
    useEffect(()=>{
        fetchMenuCards()
    },[])
  return (
   <>
    {
        cards.map((data,index)=>{
            return(<>
                <div className='content' style={{marginLeft:"20%"}}>
     <div className="card" style={{width: '18rem'}}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{data?.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
   </div>
            </>)
        })
    }
   </>

  )
}
