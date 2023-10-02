// import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ContactUs from "./ContactUs"


function Homepage() {
  return (
      <main className=' bg-white px-10'>
          <section className='min-h-screen'>
              <nav className='py-10 mb-12 flex justify-between'>
                <h1></h1>
                  <ul className='flex  items-center'>
                      <li>
                          <BsFillMoonStarsFill classname= 'cursor-pointer text-2xl'/>
                      </li>
                      <li>
                        <a className='bg-gradient-to-r from-lime-600 to-lime-600 text-white px-4 py-2 rounded-md ml-8'>Resume</a>
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
                <p className='text-md py-2 leading-8 '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies massa diam, 
                at porta elit commodo pellentesque. 
                </p>

                <p>
                Mauris rhoncus, dui eu scelerisque pretium, dui odio 
                tempor augue, molestie rutrum diam magna sed nulla. Cras volutpat risus ac justo hendrerit maximus. 
                Pellentesque sollicitudin vehicula consequat.
                </p>

            </div>
            <div className='lg:flex gap-10 justify-center'>
                  <div className='text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1'>
                      <img src="/tick-dynamic-color.png" className='w-32 h-32 flex mx-auto' />
                      <h3 className='text-lg font-medium pt-8 pb-2'>Skills</h3>
                      <p className='py-2'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies massa diam,
                          at porta elit commodo pellentesque. Mauris rhoncus.
                      </p>
                      <h4 className='py-4 text-lime-600'>Design Tools i use</h4>
                      <p className='text-gray-600 py-1 '>Tools</p>
                      <p>Tools</p>
                      <p>Tools</p>



                  </div>

                  {/* <div className='text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1'>
                      <img src="/travel-dynamic-color.png" className='w-32 h-32 flex mx-auto' />
                      <h3 className='text-lg font-medium pt-8 pb-2'>Certs</h3>
                      <p className='py-2'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies massa diam,
                          at porta elit commodo pellentesque. \

                      </p>
                      <h4 className='py-4 text-lime-600'>Design Tools i use</h4>
                      <p className='text-gray-600 py-1 '>Tools</p>
                      <p>Tools</p>
                      <p>Tools</p>



                  </div> */}

                  <div className='text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1'>
                      <img src="/sun-dynamic-color.png" className='w-32 h-32 flex mx-auto' />
                      <h3 className='text-lg font-medium pt-8 pb-2'>Working On</h3>
                      <p className='py-2'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies massa diam,
                          at porta elit commodo pellentesque..
                      </p>
                      <h4 className='py-4 text-lime-600'>Design Tools i use</h4>
                      <p className='text-gray-600 py-1 '>Tools</p>
                      <p>Tools</p>
                      <p>Tools</p>

                </div>
  
            </div>

              <section className='py-10'>
                  <div className='text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1'>
                      <img src="/travel-dynamic-color.png" className='w-32 h-32 flex mx-auto' />
                      <h3 className='text-3xl py-1 font-medium pt-8 pb-2'>Portfloio</h3>
                      <p className='py-2'>
                      These are things i have worked on so far, University related project are not Posted here.
                      </p>
                      <h4 className='py-4 text-lime-600'>
                        Certificate Collection Swipe Right
                      </h4>
                      <p className='text-gray-600 py-1 '>Tools</p>

                      <Swiper
                          spaceBetween={50}
                          slidesPerView={3}
                          onSlideChange={() => console.log('slide change')}
                          onSwiper={(swiper) => console.log(swiper)}
                      >
                          <SwiperSlide className='px-3 py-3'>
                            <img src='/CCNAITN.png'/>

                            Introduction To Networking

                          </SwiperSlide>

                          <SwiperSlide className='px-3 py-3'>
                            <img src='/CCNASRWE.png'/>

                            Switching And Routing Essentials
                            
                          </SwiperSlide>

                          <SwiperSlide className='px-3 py-3'>
                            <img src='/ANZCERT.png'/>

                            Social Engineering
                            
                          </SwiperSlide>

                          <SwiperSlide className='px-3 py-3'>
                            <img src='/THM.png'/>

                            Pre Security Path
                            
                          </SwiperSlide>
                          ...
                      </Swiper>
                    
                  </div>
              </section>

              <section className='py-7'>
                  <div className='text-center p-10 rounded-xl my-10 gap-13 '>
                      <img src="/mail-dynamic-color.png" className='w-32 h-32 flex mx-auto' />
                      <h3 className='text-3xl py-1 font-medium pt-8 pb-2'>Send Me a Message</h3>

                      <div className=''>

                      <ContactUs />

                      </div>

                      

                  </div>
              </section>

          </section>
      </main>
  )
}

export default Homepage