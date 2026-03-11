import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id = 'right' className='flex flex-nowrap overflow-x-auto gap-10 h-full w-[70%] p-4'>
        {
            props.users.map(function(elem, index){
                return <RightCard key = {index} id ={index} image = {elem.img} tag = {elem.tag} intro = {elem.intro} color = {elem.color}/>
            }

            )
        }

    </div>
  )
}

export default RightContent