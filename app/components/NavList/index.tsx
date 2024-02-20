import { NavListProps } from '@/types'
import Link from 'next/link'

const NavList = (props: NavListProps) => {
  return (
    <ul className='my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Link href={props.href} target={props.target}>
        <li>
          <span className='font-sans text-lg font-bold uppercase text-white lg:text-xl'>
            {props.title}
          </span>
        </li>
      </Link>
    </ul>
  )
}

export default NavList
