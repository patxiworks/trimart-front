import { useMobileMenu } from "@lib/context/mobile-menu-context"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'

const HomeNav = ({title}: any) => {
  return (
    <header
        className={clsx(
          'relative mx-auto border-b border-primary-deeper px-4 bg-primary-deeper h-[150px] opacity-90 home',
        )}
      >
        <nav
          className={clsx(
            'text-small-regular flex h-full w-full items-center justify-center text-gray-900 transition-colors duration-200 text-white',
          )}
        >
            <div className="flex h-full items-center logo">
                <Link href="/">
                    <Image
                        alt={title}
                        src='/logo.png'
                        width={260}
                        height={140}
                        className="w-[260px] h-[140px] my-4 hover:drop-shadow-[0_0_2em_rgba(0,0,0,0.9)] drop-shadow-[0_0_2em_rgba(245,170,66,0.9)]"
                    />
                </Link>
            </div>
        </nav>
      </header>
  )
}

export default HomeNav
