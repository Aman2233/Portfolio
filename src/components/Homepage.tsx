import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {LiaCatSolid} from 'react-icons/lia';
import aman from '/public/aman.JPG';


function Homepage() {
  return (
      <main className=' bg-white px-10'>
          <section className='min-h-screen'>
              <nav className='py-10 mb-12 flex justify-between'>
                <h1>Amanueal</h1>
                  <ul className='flex  items-center'>
                      <li>
                          <BsFillMoonStarsFill classname= 'cursor-pointer text-2xl'/>
                      </li>
                      <li>
                          <a className='bg-gradient-to-r from-lime-600 to-lime-600 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a>
                      </li>
                  </ul>
              </nav>
              

            <div className=' relative '>
                <img src='/aman.png' className='rounded-full mx-auto w-60 h-60 mt-15'/>
            </div>

            
             


              {/* The body of the home page */}
              <div className='text-center p-10'>
                  <h2 className='text-5xl py-2  text-lime-600'>Amanueal Fasil Mamo</h2>
                  <h3 className='text-2xl py-2'>3rd Year Student IT(Network and Cyber Security Systems)</h3>
                  <p className='text-md py-5 leading-8 text-gray-800'>
                      Artist, Programmer, Hacker, Developer, Cloud, Cat Lover
                  </p>

                  <div className='relative'>
                      <img src="https://tryhackme-badges.s3.amazonaws.com/Amanueal.png" alt="TryHackMe" className='mx-auto' />
                  </div>


                  <div className='text-5xl flex justify-center py-5 gap-16 text-gray-700'>
                      <AiFillLinkedin />
                      <AiFillGithub />
                  </div>

              </div>

              
          </section>

          <section>
            <div>
                <h3 className='text-3xl py-1'>
                    About me
                </h3>
                <p className='text-md py-2 leading-8'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies massa diam, 
                at porta elit commodo pellentesque. Mauris rhoncus, dui eu scelerisque pretium, dui odio 
                tempor augue, molestie rutrum diam magna sed nulla. Cras volutpat risus ac justo hendrerit maximus. 
                Pellentesque sollicitudin vehicula consequat. 
                </p>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies massa diam, 
                at porta elit commodo pellentesque. Mauris rhoncus, dui eu scelerisque pretium, dui odio 
                tempor augue, molestie rutrum diam magna sed nulla. Cras volutpat risus ac justo hendrerit maximus. 
                Pellentesque sollicitudin vehicula consequat.
                </p>

            </div>
            <div>
                <div>

                </div>
            </div>
          </section>
      </main>
  )
}

export default Homepage