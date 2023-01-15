// create your App component here
import React, {useEffect, useState} from 'react'

const API = "https://dog.ceo/api/breeds/image/random"



function App(){

    const [randomDogImage, setRandomDogImage] = useState(null)

    useEffect(()=>{
        fetch(API)
        .then((res)=>res.json())
        .then(data=>setRandomDogImage(data.message))
    }, [])

    if (!randomDogImage) {
        return <p>Loading...</p>
    }

    return(
        <>
        <img src= {randomDogImage} alt="A Random Dog"/>
        </>

    )
}
export default App;