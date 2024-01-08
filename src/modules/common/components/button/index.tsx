import Spinner from "@modules/common/icons/spinner"
import clsx from "clsx"
import React from "react"
import { textSmallRegular } from '@modules/design/custom-classes'

type ButtonProps = {
  isLoading?: boolean
  variant?: "primary" | 'primary-disabled' | 'secondary' | 'minimal'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  className,
  isLoading = false,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "w-full flex items-center justify-center text-small-regular border transition-colors duration-200 disabled:opacity-50",
        {
          "uppercase min-h-[50px] px-5 py-[10px] text-white bg-gray-900 border-gray-900 hover:bg-white hover:text-gray-900 disabled:hover:bg-gray-900 disabled:hover:text-white":
            variant === "primary",
          "uppercase min-h-[50px] px-5 py-[10px] rounded-lg border-gray-300 bg-gray-200":
            variant === 'primary-disabled',
          "uppercase min-h-[50px] px-5 py-[10px] text-gray-900 bg-transparent border-gray-920 hover:bg-gray-100":
            variant === "secondary",
          "border-gray-900 hover:bg-gray-100":
            variant === 'minimal',
        },
        className
      )}
    >
      {isLoading ? (
          <Spinner />
        ) : (
          <div
            className={clsx(textSmallRegular, '', {
              'uppercase text-extrabold text-white group-hover/button:text-white disabled:group-hover:text-white':
                variant === 'primary',
              'uppercase text-extrabold text-black group-hover/button:text-black disabled:group-hover:text-bold':
                variant === 'primary-disabled',
              'uppercase text-gray-900': variant === 'secondary',
              'text-white': variant === 'minimal',
            })}
          >
            {children}
          </div>
        )}
    </button>
  )
}

export default Button
