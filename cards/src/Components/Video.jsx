import Video1 from '../assets/Video1.mp4'
import Video2 from '../assets/Video2.mp4'
export function Video(){
    return(
        <div>
            <video controls>
                <source src={Video1}/>
            </video>
            <video controls>
                <source src={Video2}/>           
            </video>
        </div>
    )
}