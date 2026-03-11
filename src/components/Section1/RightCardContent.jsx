
import { MoveRight } from 'lucide-react'
const RightCardContent = (props) => {
  return (
    <div>
        <div className="absolute left-0 top-0 h-full w-full p-2 flex flex-col justify-between">
        <h2 className='bg-white rounded-full flex justify-center items-center h-10 w-10 font-bold'>{props.id+1}</h2>
        <div>
            <p className='pt-[100px] text-lg leading-normal text-white'>{props.intro}</p>
        </div>z
        <div className='flex justify-between items-center'>
            <button style = {{backgroundColor: props.color}} className='bg-blue-500 text-white rounded-full px-3 py-2 w-[130px]'>{props.tag}</button>
            <button className='bg-blue-500 text-white rounded-full px-2 py-1'><MoveRight width={15} /></button>
        </div>

        </div>
    </div>
  )
}

export default RightCardContent