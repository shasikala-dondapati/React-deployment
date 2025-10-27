import React from "react";
class Card extends React.Component{
     favs=[{name:"cat",image:"https://wallpapercave.com/wp/wp2645383.jpg"},{name:"Dog",image:"https://img.freepik.com/premium-photo/dog-image_1115474-21599.jpg"},{name:"Pegion",image:"https://i.pinimg.com/originals/53/f0/c2/53f0c23855c08162e79eb5107c18bef5.png"},{name:"Dog",image:"https://img.freepik.com/premium-photo/dog-image_1115474-21599.jpg"},{name:"Pegion",image:"https://i.pinimg.com/originals/53/f0/c2/53f0c23855c08162e79eb5107c18bef5.png"},{name:"cat",image:"https://wallpapercave.com/wp/wp2645383.jpg"}]
   render(){
    return(
        <div id="div">
        {
            this.favs.map((fav)=>{
              return <div key={fav.name}>
                <img id="img" src={fav.image}/>
                <h2>{fav.name}</h2>
                </div>
            })
        }
        </div>
    )
   }
}
export default Card;