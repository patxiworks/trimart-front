import clsx from "clsx"
import React from "react"
import Search from '@modules/common/icons/search'
import { useMobileMenu } from '@lib/context/mobile-menu-context'

type HamburgerProps = {
  setOpen: () => void
  scrollState: boolean,
  label: string,
  iconType: string,
  classes: string,
  screen: string,
}

const Lines = ({ color }: any) => {
  return (
    <div className="ml-3 absolute left-1/2 top-1/2 block w-5 -translate-x-1/2  -translate-y-1/2 transform">
      <span
        aria-hidden="true"
        className={clsx(
          `absolute block h-0.5 w-5 -translate-y-1.5 rounded-sm bg-current ${color}`
        )}
      ></span>
      <span
        aria-hidden="true"
        className={clsx(
          `absolute block h-0.5 w-5 transform rounded-sm bg-current  ${color}`
        )}
      ></span>
      <span
        aria-hidden="true"
        className={clsx(
          `absolute block h-0.5 w-5 translate-y-1.5 rounded-sm bg-current  ${color}`
        )}
      ></span>
    </div>
  )
}

const Hamburger: React.FC<HamburgerProps> = ({ setOpen, scrollState, label, iconType, classes, screen }) => {
  const {
    screen: [_, setScreen],
  } = useMobileMenu()

  const setScreenMain = () => setScreen("main")
  const setScreenSearch = () => setScreen("search")
  const color = scrollState ? 'span-white' : ''

  return (
    <div className="flex flex-row relative focus:outline-none cursor-pointer hover:text-primary-deep" onClick={(setOpen)}>
      <span className="sr-only">Open main menu</span>
      { 
      iconType === 'search' 
      ? <>
          <Search className="span-gray-500" size={20} />
          <div className={classes} onClick={setScreenSearch}><span>{label}</span></div>
        </>
      : <>
          <Lines color={color} /> 
          <div className={classes} onClick={setScreenMain}><span>{label}</span></div>
        </>
      }
      
    </div>
  )
}

export default Hamburger
