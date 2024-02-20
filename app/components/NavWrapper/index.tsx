import React, { createElement } from 'react'
import { NavList } from 'components'
import { NavListProps } from '@/types'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { XMarkIcon } from '@heroicons/react/20/solid'

const NavWrapper = (props: {
  data?: NavListProps[]
  openNavbar?: boolean
  setOpenNavbar?: (isOpen: boolean) => void
}) => (
  <div className='relative flex h-fit w-full flex-row items-center justify-end bg-green-100 lg:justify-between'>
    <div className='hidden w-full flex-row items-center justify-around bg-purple-400 lg:flex'>
      {props.data?.map((item, index) => (
        <NavList key={index} title={item.title} target={item.target} href={item.href} />
      ))}
    </div>
    <div
      className={`${props.openNavbar ? 'block' : 'hidden'} absolute inset-0 z-40 flex h-fit flex-col items-start justify-center space-y-5 bg-red-900 lg:hidden`}
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
  </div>
)

export default NavWrapper
