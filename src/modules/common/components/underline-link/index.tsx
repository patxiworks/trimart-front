//import ArrowRight from 'app/modules/common/icons/arrow-right'
import { ArrowUpRightMini } from "@medusajs/icons"
import clsx from 'clsx'
import Link from 'next/link'
import { textBaseRegular } from '@modules/design/custom-classes'

type UnderlineLinkProps = {
  href: string
  color?: string
  children?: React.ReactNode
  border?: string
}

const UnderlineLink = ({
  href,
  children,
  color = 'black',
  border = 'b'
}: UnderlineLinkProps) => {
  return (
    <Link href={href}>
      <div
        className={`group flex flex-row items-center gap-x-4 border-${border} border-current border-${color} py-2 transition-all duration-300 hover:pl-4 hover:pr-1`}
      >
        <div className={`${textBaseRegular} div-${color}`}>{children}</div>
        <ArrowUpRightMini
            className="group-hover:rotate-45 ease-in-out duration-150"
            color="white"
        />
      </div>
    </Link>
  )
}

export default UnderlineLink
