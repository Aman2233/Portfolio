import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {LiaCatSolid} from 'react-icons/lia';


function Homepage() {
  return (
      <main className=' bg-white px-10'>
          <section className='min-h-screen'>
              <nav className='py-10 mb-12 flex justify-between'>
                <LiaCatSolid classname='cursor-pointer text-5xl'/>
                  <ul className='flex  items-center'>
                      <li>
                          <BsFillMoonStarsFill classname= 'cursor-pointer text-2xl'/>
                      </li>
                      <li>
                          <a className='bg-gradient-to-r from-orange-500 to-orange-950 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a>
                      </li>
                  </ul>

              </nav>
              {/* The body of the home page */}
              <div className='text-center p-10'>
                <h2 className='text-5xl py-2  text-orange-600'>Amanueal Fasil Mamo</h2>
                <h3>3rd Year Student IT(Network and Cyber Security Systems)</h3>
                <p>
                    Artist, Programmer, Hacker, Developer, Cloud, Cat Lover
                </p>

                <div>
                    <AiFillLinkedin/>
                    <AiFillGithub />
                </div>

            </div>
              
          </section>
      </main>
  )
}

export default Homepage