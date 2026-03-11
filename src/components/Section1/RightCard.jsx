
import { MoveRight } from 'lucide-react'
import RightCardContent from './RightCardContent'
const RightCard = (props) => {
  return (
    <div className="h-full w-50 rounded-2xl overflow-hidden relative shrink-0">
        <img className="object-cover h-full w-full" src={props.image} alt="" />
        <RightCardContent intro = {props.intro} tag = {props.tag} id = {props.id} color = {props.color}/>
    </div>
  )
}

export default RightCard