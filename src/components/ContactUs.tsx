import React, { useRef } from 'react';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_63h33to', 'template_ss4bcpy', form.current, '9kQN4CDfHWI7dHBgJ')
        .then(
          (result: EmailJSResponseStatus) => {
            console.log(result.text);
          },
          (error: EmailJSResponseStatus) => {
            console.log(error.text);
          }
        );
        form.current.reset()
    }
  };

  <div>
    
  </div>

  return (
    <form ref={form} onSubmit={sendEmail} className='text-lg font-medium pt-8 pb-2'>
      <label className='px-5'>Name</label>
      <input type="text" name="user_name" className='w-96 px-3 text-center shadow-xl  dark:bg-white flex-1'style={{ textAlign: 'left' }}/>
      <p className='py-5'></p>
      <label className='px-5'>Email</label>
      <input type="email" name="user_email" className='w-96 px-3 text-center shadow-xl  dark:bg-white flex-1' style={{ textAlign: 'left' }}/>
      <p className='py-5'></p>
      <label className='px-3'>Message</label>
      <textarea name="message" className='w-96 h-48 px-3 py-1 fill shadow-xl dark:bg-white' style={{ textAlign: 'left' }}/>
      <p className='py-5'></p>
      <input type="submit" value="Send" className='bg-gradient-to-r from-lime-600 to-lime-600 text-white px-4 py-2 rounded-md ml-8' />
    </form>
  );
};

export default ContactUs;