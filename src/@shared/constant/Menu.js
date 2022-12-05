import { useEffect, useState } from "react"

export const Menu = () =>{
    const [menu , setMenu] = useState([])
    useEffect(()=>{
        fetch('https://mpnews24bd.com/api/category')
        .then(res=> res.json())
        .then(data => setMenu(data?.category))
    },[])
    return menu
}