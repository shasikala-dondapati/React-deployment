import React from "react";
class Prgm1 extends React.Component{
    names=[{id:1,name:"shashi"},{id:2,name:"lovvie"},{id:3,name:"chinnu"},{id:4,name:"shan"}]
  render(){
    return(
        <ol>
            {
               this.names.map((name)=>{
                  return <li key={name.id}>{name.name}</li>
               })
            }
        </ol>
    )
  }
}
export default Prgm1;