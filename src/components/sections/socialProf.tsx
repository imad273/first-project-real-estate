import React from 'react'

const socialProf = () => {
  return (
    <section>
      <div className='h-full md:h-[30vh] bg-slate-800'>
        <div className="container grid md:grid-cols-3 gap-8 md:gap-0 text-white h-full py-6 md:py-0">
          <div className='flex flex-col justify-center items-center h-full'>
            <h3 className='text-4xl font-semibold mb-2 md:mb-3'>
              +90
            </h3>
            <p>
              Properties Sold
            </p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h3 className='text-4xl font-semibold mb-2 md:mb-3'>
              +12
            </h3>
            <p>
              Homes Managed
            </p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h3 className='text-4xl font-semibold mb-2 md:mb-3'>
              100%
            </h3>
            <p>
              Client Satisfaction Rate
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default socialProf