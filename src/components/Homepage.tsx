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
                  <a href='https://www.linkedin.com/in/amanueal-mamo-3a62991a2/'><AiFillLinkedin/></a>
                  <a href='https://github.com/Aman2233'><AiFillGithub/></a>
                      
                      
                  </div>

              </div>

              
          </section>

          <section>
            <div>
                <h3 className='text-3xl py-1'>
                    About me
                </h3>
                <p className='text-md py-2 leading-8 '>
                I'm a versatile individual with a passion for exploring the ever-evolving world of technology. 
                My journey through the tech landscape has led me to discover a multitude of exciting domains, 
                and I find joy in diving deep into various aspects of the field.

                My interests span a wide range, including Helpdesk, Cybersecurity, Data Engineering, Computer Networks and Cloud Computing.
                Recently, I've embarked on a thrilling adventure into the realm of Fullstack Development, 
                eager to explore the fusion of front-end and back-end technologies.

                I am committed to continuous learning. You can often find me engrossed in courses from platforms like Tryhackme, Udemy, 
                TCM Security, and EDX, where I'm sharpening my skills and expanding my knowledge.
                </p>

                <p className='text-md py-2 leading-8 '>
                Beyond my commitment to personal growth, I'm an active member of the Flinders Cyber Security Society.
                 I proudly served as the Treasurer for the club between September2022-September2023, 
                 where I contributed to fostering a culture of cybersecurity awareness and collaboration. 
                 Additionally, I've dedicated my time as a volunteer at Flinders University and a current emloyee, 
                 further immersing myself in the world of academia and technology.
                </p>

            </div>
            <div className='lg:flex gap-10 justify-center'>
                  <div className='text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1'>
                      <img src="/tick-dynamic-color.png" className='w-32 h-32 flex mx-auto' />
                      <h3 className='text-lg font-medium pt-8 pb-2'>Skills</h3>
                      <p className='py-2'>
                          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies massa diam,
                          at porta elit commodo pellentesque. Mauris rhoncus. */}
                      </p>
                      <h4 className='py-4 text-lime-600'>Brief Overview</h4>
                      <p className='text-gray-600 py-1 '></p>
                      <p>Programming(C, Java, HTML, CSS, Python)</p>
                      <p>Cloud Computing</p>
                      <p>Finance Managment</p>
                      <p>Managment</p>



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
                          {/* Current topics i am working on */}
                      </p>
                      <h4 className='py-4 text-lime-600'>Brief Overview</h4>
                      <p className='text-gray-600 py-1 '></p>
                      <p>Devops(CI/CD with Jenkins, RESTful API's, Redis, Node.js Javascript frameworks, React, TailwindCSS,  Terraform )</p>
                      <p>Bufferoverflow, Malware Reverse-Engineering using Redux</p>
                      <p>Jupyter Note book for Data Science</p>

                </div>
  
            </div>

              <section className='py-10'>
                  <div className='text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1'>
                      <img src="/travel-dynamic-color.png" className='w-32 h-32 flex mx-auto' />
                      <h3 className='text-3xl py-1 font-medium pt-8 pb-2'>Portfloio</h3>
                      <p className='py-2'>
                      These are certs i have gotten so far, more to come ;)
                      </p>
                      <h4 className='py-4 text-lime-600'>
                        Certificate Collection Swipe Right
                      </h4>
                      <p className='text-gray-600 py-1 '></p>

                      <Swiper
                          spaceBetween={50}
                          slidesPerView={3}
                          onSlideChange={() => console.log('slide change')}
                          onSwiper={(swiper) => console.log(swiper)}
                      >
                          <SwiperSlide className='px-3 py-3'>
                            <img src='/CCNAITN.png' alt='Introduction To Networking' style={{ width: '100%', height: '100%', objectFit: 'contain' }} />

                            Introduction To Networking

                          </SwiperSlide>

                          <SwiperSlide className='px-3 py-3'>
                            <img src='/CCNASRWE.png' style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>

                            Switching And Routing Essentials
                            
                          </SwiperSlide>

                          <SwiperSlide className='px-3 py-3'>
                            <img src='/ANZCERT.png' style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>

                            Social Engineering
                            
                          </SwiperSlide>

                          <SwiperSlide className='px-3 py-3 h-48'>
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

                      <div className='felx mx-auto'>

                      <ContactUs />

                      </div>

                      

                  </div>
              </section>

          </section>
      </main>
  )
}

export default Homepage