import {Bookmark} from 'lucide-react'
function Card(props){
    return(
    <div>
            <div className="card">
            <img src={props.img} alt="" />
                <h1>{props.heading}</h1>
                <p>
                    {props.heading}, {props.age}
                </p>
                <button>Save <Bookmark size={15} /></button>
            </div>
        </div>

)}

export default Card;