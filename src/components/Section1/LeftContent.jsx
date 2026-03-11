import { ArrowUpRight } from 'lucide-react'
const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between '>
        <div className='p-7'>
            <h3 className='text-3xl font-bold mb-5'>
                Prospective <br/>Customer <br/>Segmentation
            </h3>
            <p className='text-xl text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit maiores nihil corporis eius accusamus repellat nostrum exercitationem esse numquam aliquam possimus, officiis voluptate fugiat, adipisci, eum dolor enim quis!
            </p>
        </div>
        <div className='text-[300px]'>
            <ArrowUpRight />
        </div>
    </div>
  )
}

export default LeftContent