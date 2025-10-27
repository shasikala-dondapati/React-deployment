import React from "react";
class Prgm extends React.Component{
  fruits=["apple","pineApple","Mango","guva"]
  render(){
    return(
       <ul>
      {
        this.fruits.map((fruit,index)=>(
            <li key={index}>{fruit}</li>
        ))
        }
      </ul>
    ); 
  }
}
 export default Prgm;









