import React from 'react';
import './room.css';

function Room(){
    const [isLit, setLit] = React.useState(false);
    let [temp, settemp] = React.useState(22);
    return(
        <div className = {`room ${isLit ? "lit" : "dark"}`} > The room is {isLit ? 'lit' : 'dark'} 
    <br/>
        <button className ={'mybutton'} onClick = {()=>  setLit(true)}>ON</button> 
        <button className ={'mybutton'} onClick = {()=>  setLit(false)}>OFF</button>
        <br/><br/>
        <div > The temperature is  {temp } C </div>
        <button className ={'mybutton'} onClick = {()=>  settemp(++temp)}>+</button>
        <button className ={'mybutton'} onClick = {()=>  settemp(--temp)}>-</button>


        

  </div> 
        
    );
}

export default Room;