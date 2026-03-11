import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='flex items-center py-10 px-4 h-[90vh] gap-10'>
        <LeftContent />
        <RightContent users = {props.users}/>
    </div>
  )
}

export default Page1Content