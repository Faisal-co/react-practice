import {Bookmark} from 'lucide-react'
function Card(props){
    return(
    <div>
            <div className="card">
            <img src={props.image} alt=""/>
                <h1>{props.pay}</h1>
                <p>
                    {props.post}, {props.company}
                </p>
                <button>Save <Bookmark size={15} /></button>
            </div>
        </div>

)}

export default Card; 