import React from 'react'

function Home() {
  return (
    <>
      <div className='p-10 bg-white mx-3 	mt-3 mb-3 grid gap-20 lg:grid-cols-2 lg:grid-rows-1 sm:grid-cols-1 sm:grid-rows-2'>
        <img src="Assets/wallpaperflare.com_wallpaper.jpg" />
        <div>
          <div className='lg:text-4xl text-2xl	text-center	'>Integrated Data Management</div>
          <div className='mt-10 sm:mt-5 lg:text-lg sm:text-xl sm:text-justify'>
            <p className='mb-3'> Describe how digital tools enable the centralized storage and management of project data.Highlight the ease of accessing and sharing information across teams and stakeholders.</p>
            <p>Gather data from various sources such as surveys, sensor networks, project documentation, and field reports.
              Integrate data from different phases of a project's lifecycle, including planning, design, construction, operation, and maintenance.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home