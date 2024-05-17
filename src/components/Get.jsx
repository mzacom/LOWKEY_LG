import React from 'react'
import styles from '../style'

const Get = () => {
  return (
    <>
    <section className={`${styles.padding} flex flex-col bg-white ${styles.paddingX}`}>

      <div className='  flex flex-col sm:w-[40%] ' >
        <h1 className='sm:text-4xl text-xl font-bold mt-6  ' >Get in touch </h1>

        <p className=' sm:text-xl  font-light text-xs' >
          Do not hesitate to reach out Just fill in the contact form here and we'll be sure to reply as fast as possible 
        </p>

        <h1 className='sm:text-4xl text-xl font-bold mt-6  ' >Our Office  </h1>

        <p className=' sm:text-xl  font-light text-xs' >
          Unit 36, 416 Brixton Road, Ile-Ife Osun
        </p>

        <h1 className='sm:text-4xl text-xl font-bold mt-6  ' >Message Us   </h1>

        <p className=' sm:text-xl  font-light text-xs' >
          oyetolamuiz81@gmail.com | +2349041589381
        </p>

        <h1 className='sm:text-2xl font-bold mt-6 text-xs  ' >Follow us   </h1>


        <div className=' flex gap-7 pt-3' >
          <i className=' fa-brands text-[lime] fa-whatsapp '></i>
          <i className=' fa-brands text-[lime] fa-instagram '></i>
          <i className=' fa-brands fa-facebook text-[lime] '></i>
        </div>


      </div>






    </section>
    </>
  )
}

export default Get