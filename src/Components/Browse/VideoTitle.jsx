const VideoTitle = ({Title})=>{
 
    const {id,overview,title} = Title
    return(
        <div className='mt-24 z-10 p-5 absolute w-screen aspect-video '>
            <div className='w-1/3 text-white '>
<h1 className='font-semibold text-4xl'>{title}</h1>
<p className='mt-4'>{overview}</p>
<div className='mt-5'>
    <button className='p-2 bg-gray-400 rounded-md text-white mr-3'>▶️Play</button>
    <button className='p-2 bg-gray-400 rounded-md text-white'>ℹ️MoreInfo</button>
</div>
</div>
        </div>
    )
}

export default VideoTitle