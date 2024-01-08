"use client"

import { useState, useEffect } from "react"
import { usePathname } from 'next/navigation'
import { useMobileMenu } from "@lib/context/mobile-menu-context"
import clsx from 'clsx'
import useToggleState from "@lib/hooks/use-toggle-state"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import SideMenu from "@modules/layout/components/side-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import Link from "next/link"
import HomeNav from './home'
import PageNav from './page'

const Nav = ({ title }: any) => {
  const { toggle } = useMobileMenu()
  const {
    state: searchModalState,
    close: searchModalClose,
    open: searchModalOpen,
  } = useToggleState()

  const pathname = usePathname()
  const [isHome, setIsHome] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  //useEffect that detects if window is scrolled > 5px on the Y axis
  useEffect(() => {
    //if (isHome) {
      const detectScrollY = () => {
        if (window.scrollY > 5) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }

      window.addEventListener('scroll', detectScrollY)

      return () => {
        window.removeEventListener('scroll', detectScrollY)
      }
    //}
  }, [isHome])

  useEffect(() => {
    pathname === '/' ? setIsHome(true) : setIsHome(false)
  }, [pathname])

  useEffect(() => {
    window.addEventListener("scroll", () => shrinkHeader(), false)

    return () => {
      window.removeEventListener("scroll", () => shrinkHeader())
    }
  }, [pathname])

  const shrinkHeader = () => {
    const DISTANCE_FROM_TOP = 140
    const headerElement = document.querySelector(".home") as HTMLElement
    const logoElement = document.querySelectorAll("img")[0] as HTMLElement
    const scrollY = document.body.scrollTop || document.documentElement.scrollTop

    if (headerElement) {
      if (scrollY > DISTANCE_FROM_TOP) {
          headerElement.style.transition = "height 200ms ease-in"
          headerElement.style.height = "80px"
          logoElement.style.transition = "scale 200ms ease-in"
          logoElement.style.scale = "0.5"
      } else {
          headerElement.style.height = "150px"
          logoElement.style.scale = "1"
      }
    }
  }

  return (
    <div
      className={clsx('group inset-x-0 top-0 z-50', 
      {
        'sticky': isHome,
      },{
        'sticky fixed': !isHome,
      })}
    >
      {
      isHome
      ? <HomeNav title={title} />
      : <PageNav title={title} />
      }
    </div>
  )
}

export default Nav
