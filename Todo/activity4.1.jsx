import { useState } from "react"
import Clock from 'react-live-clock';
import './activity4.1.css'
 export default function Active(){
     const [value,setValue]=useState([])
     const [name,setName]=useState('')
     function handle(e){
        e.preventDefault();
        setValue([...value,name])
        setName("")
     }
     function Remove(index){
        let NewTime=[...value]
        NewTime.splice(index,1);
        setValue(NewTime)
     }
         
     const newvalue=value.map((item,index)=><><li>{item}- <Clock format={'hh:mm:ss A'}  timezone={'IN'} /><span onClick={()=>Remove(index)}>  (-)</span></li></>)

    return(

        <>
     

        <form onSubmit={handle}>
            {newvalue }
        <input  value={name}type="text" id="first" onChange={e=>setName(e.target.value)} placeholder="Add item"   />
        </form>
        </>
    )
 }