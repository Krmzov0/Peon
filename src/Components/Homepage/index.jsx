import React from 'react'
import { House, Percent, PaperPlaneTilt, UsersThree, CreditCard, ArrowCircleUpRight, Coins } from 'phosphor-react'
import './style.css'
import { motion } from 'framer-motion'

function Homepage() {
  return (
    <>
      <div className='order-first h-screen p-4 grid grid-cols-1 grid-rows-32 gap-8 lg:grid-cols-4 lg:p-16 lg:grid-rows-4 '>

        <motion.div className='bg-[#1e1e24] text-white rounded-3xl shadow-sm flex  justify-start items-center LinkCard' transition={{ type: "spring", stiffness: 700 }} initial={{ scale: 1 }} whileHover={{ scale: 1.10 }} whileTap={{ y: 2.5 }}><div className='bg-[#1e1e24] text-white rounded-3xl p-8 shadow-sm flex  justify-start items-center LinkCard'>
          <div className='w-16 h-16 rounded-full bg-[#fff]'>

          </div>

          <div className='flex flex-col ml-4'>
            <h1 className='text-4xl font-medium text-[#EE1C25] tracking-wide font'>ПЕОН</h1>
            <h4 className='tracking-wide font-light'>ФИНАНСИСКО ДРУШТВО</h4>
          </div>
        </div></motion.div>

        <motion.div transition={{ type: "spring", stiffness: 700 }} initial={{ scale: 1 }} whileHover={{ scale: 1.10 }} whileTap={{ y: 2.5 }} className='bg-[#1e1e24] text-white rounded-3xl row-span-2 h-56 sm:h-full flex flex-col justify-between  shadow-sm LinkCard'><div className='bg-[#1e1e24] text-white rounded-3xl row-span-2 h-56 sm:h-full flex flex-col justify-between p-8 shadow-sm LinkCard'>
          <div className='w-full flex justify-between items-center'>
            <House size={52} color="#EE1C25" weight="thin" />
          </div>

          <div className='flex justify-between items-center'>
            <h1 className='text-[1.8rem] font-thin sm:text-[2.6rem]'>ДОМА</h1>
            <ArrowCircleUpRight size={60} color="#fff" weight="thin" className='relative right-8 opacity-0 transition-all LinkArrow' />
          </div>

        </div></motion.div>

        <motion.div transition={{ type: "spring", stiffness: 700 }} initial={{ scale: 1 }} whileHover={{ scale: 1.10 }} whileTap={{ y: 2.5 }} className='bg-[#1e1e24] text-white rounded-3xl row-span-2 h-56 sm:h-full flex flex-col justify-between shadow-sm LinkCard'><div className='bg-[#1e1e24] text-white rounded-3xl row-span-2 h-56 sm:h-full flex flex-col justify-between p-8 shadow-sm LinkCard'>
          <div className='w-full flex justify-between items-center'>
            <UsersThree size={52} color="#ee1c25" weight="thin" />

          </div>

          <div className='flex justify-between items-center'>
            <h1 className='text-[1.8rem] font-thin sm:text-[2.6rem] ' >ЗА НАС</h1>
            <ArrowCircleUpRight size={60} color="#fff" weight="thin" className='relative right-8 opacity-0 transition-all LinkArrow' />
          </div>

        </div></motion.div>

        <motion.div transition={{ type: "spring", stiffness: 700 }} initial={{ scale: 1 }} whileHover={{ scale: 1.10 }} whileTap={{ y: 2.5 }} className='bg-[#EE1C25] text-white rounded-3xl h-56 sm:h-full flex flex-col justify-between p-8 shadow-sm LinkCard '><div className='bg-[#EE1C25] text-white rounded-3xl h-56 sm:h-full flex flex-col justify-between p-8 shadow-sm LinkCard '>
          <div className='w-full flex justify-end'>

          </div>

          <div className='flex justify-between items-center'>
            <h1 className='text-[1.8rem] font-thin sm:text-[2.6rem]' >УСЛУГИ</h1>
            <ArrowCircleUpRight size={60} color="#fff" weight="thin" className='relative right-8 opacity-0 transition-all LinkArrow' />
          </div>
        </div></motion.div>


        <motion.div transition={{ type: "spring", stiffness: 700 }} initial={{ scale: 1 }} whileHover={{ scale: 1.10 }} whileTap={{ y: 2.5 }} className='bg-[#EE1C25] text-white rounded-3xl row-span-3 h-96 sm:h-full flex flex-col justify-between shadow-sm LinkCard'><div className='bg-[#EE1C25] text-white rounded-3xl row-span-3 h-96 sm:h-full flex flex-col justify-between p-8 shadow-sm LinkCard'>
          <div className='w-full flex justify-start'>
            <CreditCard size={52} color="#fff" weight="thin" />
          </div>

          <div className='flex justify-between items-end'>
            <h1 className='text-[1.8rem] font-thin sm:text-[2.6rem] text-[#fff]' >КАКО ДА <br /> ПЛАТАМ?</h1>
            <ArrowCircleUpRight size={60} color="#fff" weight="thin" className='relative right-8 opacity-0 transition-all LinkArrow' />
          </div>

        </div></motion.div>

        <motion.div transition={{ type: "spring", stiffness: 700 }} initial={{ scale: 1 }} whileHover={{ scale: 1.10 }} whileTap={{ y: 2.5 }} className='bg-[#1e1e24] text-white rounded-3xl row-span-3 h-96 sm:h-full flex flex-col justify-between shadow-sm LinkCard'><div className='bg-[#1e1e24] text-white rounded-3xl row-span-3 h-96 sm:h-full flex flex-col justify-between p-8 shadow-sm LinkCard'>
          <div className='w-full flex justify-between items-center'>
            <PaperPlaneTilt size={52} color="#ee1c25" weight="thin" />

          </div>

          <div className='flex justify-between items-center'>
            <h1 className='text-[1.8rem] font-thin sm:text-[2.6rem]' >КОНТАКТ</h1>
            <ArrowCircleUpRight size={60} color="#fff" weight="thin" className='relative right-8 opacity-0 transition-all LinkArrow' />
          </div>

        </div></motion.div>

        <motion.div transition={{ type: "spring", stiffness: 700 }} initial={{ scale: 1 }} whileHover={{ scale: 1.10 }} whileTap={{ y: 2.5 }} className='bg-[#1e1e24] text-white rounded-3xl row-span-2 h-56 sm:h-full flex flex-col justify-between shadow-sm LinkCard'> <div className='bg-[#1e1e24] text-white rounded-3xl row-span-2 h-56 sm:h-full flex flex-col justify-between p-8 shadow-sm LinkCard'>
          <div className='w-full flex justify-between items-center'>
            <Coins size={44} color="#ee1c25" weight="thin" />
          </div>

          <div className='flex justify-between items-center'>
            <h1 className='text-[1.8rem] font-thin sm:text-[2.6rem]' >КРЕДИТИ</h1>
            <ArrowCircleUpRight size={60} color="#fff" weight="thin" className='relative right-8 opacity-0 transition-all LinkArrow' />
          </div>

        </div></motion.div>

        <motion.div transition={{ type: "spring", stiffness: 700 }} initial={{ scale: 1 }} whileHover={{ scale: 1.10 }} whileTap={{ y: 2.5 }} className='bg-[#1e1e24] text-white rounded-3xl row-span-2 h-56 sm:h-full flex flex-col justify-between shadow-sm LinkCard'><div className='bg-[#1e1e24] text-white rounded-3xl row-span-2 h-56 sm:h-full flex flex-col justify-between p-8 shadow-sm LinkCard'>
          <div className='w-full flex justify-between items-center'>
            <Percent size={52} color="#ee1c25" weight="thin" />

          </div>

          <div className='flex justify-between items-center 2'>
            <h1 className='text-[1.8rem] font-thin sm:text-[2.6rem]' >КАЛКУЛАТОР</h1>
            <ArrowCircleUpRight size={60} color="#fff" weight="thin" className='relative right-8 opacity-0 transition-all LinkArrow' />
          </div>

        </div></motion.div>
      </div>
    </>
  )
}

export default Homepage