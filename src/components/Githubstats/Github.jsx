import React from 'react'

const Github = () => {
  return (
    <section className='py-20 w-full'>
        <div className='grid gird-cols-12 gap-8 w-full'>
            <div className = 'col-span-8 row-span-2 p-8 rounded-x1 flex items-center justify-center'>
                <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=BlazeWild&show_icons=true&theme=transparent" 
                alt="GitHub Top Languages" loading="lazy" 
                className="w-full h-auto rounded-lg shadow-md"/>
            </div>

        </div>
    </section>
  )
}

export default Github