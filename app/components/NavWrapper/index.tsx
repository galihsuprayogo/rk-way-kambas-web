import React, { createElement } from 'react'
import { NavList } from 'components'
import { NavListProps } from '@/types'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { XMarkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'

const ButtonDonateLanguage = () => (
  <div className='hidden flex-col space-y-3 bg-none lg:flex'>
    <span className='text-right text-base font-semibold text-white'>{`EN | ID`}</span>
    <span className='bg-primary-900 px-6 py-1 text-lg font-bold text-white'>Donate</span>
  </div>
)

const NavWrapper = (props: {
  data?: NavListProps[]
  openNavbar?: boolean
  setOpenNavbar?: (isOpen: boolean) => void
}) => (
  <div
    className={`relative flex h-fit w-full flex-row ${props.openNavbar ? 'items-start' : 'items-center'} justify-between py-2`}
  >
    <Link href='/' target='_top' className={`${props.openNavbar ? 'hidden' : 'block'}`}>
      <Image
        src='/logo.png'
        alt='navbar-logo'
        placeholder='blur'
        blurDataURL='/logo.png'
        height={0}
        width={0}
        sizes='100vw'
        style={{
          objectFit: 'contain',
        }}
        className='h-auto w-[15rem] bg-none lg:w-[22rem]'
      />
    </Link>
    <div className='hidden w-full flex-row items-center justify-around lg:flex'>
      {props.data?.map((item, index) => (
        <NavList key={index} title={item.title} target={item.target} href={item.href} />
      ))}
    </div>
    <div
      className={`${props.openNavbar ? 'block' : 'hidden'} sticky inset-0 z-40 mt-10 flex flex-grow flex-col items-start justify-center space-y-5 overflow-y-scroll rounded-lg bg-transparent px-3 shadow-lg lg:hidden`}
    >
      {props.data?.map((item, index) => (
        <NavList key={index} title={item.title} target={item.target} href={item.href} />
      ))}
    </div>
    <React.Fragment>
      <div
        className={`${props.openNavbar ? 'hidden' : 'block'} sticky inset-0 z-50 block h-fit rounded-lg p-1 hover:cursor-pointer hover:bg-gray-200 lg:hidden`}
        onClick={() => props.setOpenNavbar!(true)}
      >
        {createElement(Bars3Icon, { className: 'h-6 w-6 text-white', strokeWidth: 4 })}
      </div>
      <div
        className={`${props.openNavbar ? 'block' : 'hidden'} sticky inset-0 z-50 h-fit rounded-lg p-1 hover:cursor-pointer hover:bg-gray-200`}
        onClick={() => props.setOpenNavbar!(false)}
      >
        {createElement(XMarkIcon, { className: 'h-6 w-6 text-white', strokeWidth: 4 })}
      </div>
    </React.Fragment>
    <ButtonDonateLanguage />
  </div>
)

export default NavWrapper
