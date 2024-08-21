import React from 'react'

const MessageSkeleton = () => {
  return (
    <>
      <div className='flex gap-3 items-center py-2'>
        <div className='w-10 h-10 bg-gray-300 rounded-full animate-pulse'></div>
        <div className='flex flex-col gap-1'>
          <div className='h-4 w-40 bg-gray-300 rounded animate-pulse'></div>
          <div className='h-4 w-40 bg-gray-300 rounded animate-pulse'></div>
        </div>
      </div>
      <div className='flex gap-3 items-center justify-end py-2'>
        <div className='flex flex-col gap-1'>
          <div className='h-4 w-40 bg-gray-300 rounded animate-pulse'></div>
        </div>
        <div className='w-10 h-10 bg-gray-300 rounded-full animate-pulse'></div>
      </div>
    </>
  )
}

export default MessageSkeleton
