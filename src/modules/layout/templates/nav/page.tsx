import { useMobileMenu } from "@lib/context/mobile-menu-context"
import MobileMenu from "@modules/mobile-menu/templates"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import CartDropdown from "@modules/layout/components/cart-dropdown"
import { textXlSemi } from '@modules/design/custom-classes'
import { User } from '@medusajs/icons'

const PageNav = ({title}: any) => {
  return (
    <header
        className={clsx(
          'relative mx-auto border-b border-primary-deeper px-4 bg-primary-deeper shadow-md h-16 page',
        )}
      >
        <nav
          className={clsx(
            'text-small-regular flex h-full w-full items-center justify-center text-gray-900 transition-colors duration-200 text-white',
          )}
        >
          <div className="flex h-full items-center">
              <Link href="/" className={`${textXlSemi}`}>
                {title}
              </Link>
          </div>

          <div className={`flex h-full flex-1 basis-0 items-center justify-end gap-x-4`}>
            <CartDropdown />
            <div className="small:flex hidden text-primary-deeper text-xl">|</div>
            <div className="small:flex hidden h-full items-center gap-x-6">
              {/*{process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}*/}
              <Link href="/account"><div className="flex flex-row gap-2"><User color="white" />Account</div></Link>
            </div>
            
          </div>
        </nav>
        <MobileMenu />
      </header>
  )
}

export default PageNav
