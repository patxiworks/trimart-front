"use client"

import { useAccount } from "@lib/context/account-context"
import UnderlineLink from "@modules/common/components/interactive-link"
import Spinner from "@modules/common/icons/spinner"
import React, { useEffect } from "react"
import AccountNav from "../components/account-nav"

const AccountLayout: React.FC = ({ children }) => {
  const { customer, retrievingCustomer, checkSession } = useAccount()

  useEffect(() => {
    checkSession()
  }, [checkSession])

  if (retrievingCustomer || !customer) {
    return (
      <div className="flex items-center justify-center w-full min-h-[640px] h-full text-gray-900">
        <Spinner size={36} />
      </div>
    )
  }

  return (
    <div className="small:py-12 bg-primary-light ios:bg-white flex-1">
      <div className="mx-auto small:w-5/6 flex h-full min-w-5xl flex-1 flex-col bg-white small:border border-primary-deep rounded small:shadow-lg">
        <div className="small:grid-cols-[240px_1fr] small:px-8 small:py-12 grid grid-cols-1 py-6 px-4">
          <div>
            <AccountNav />
          </div>
          <div className="flex-1">{children}</div>
        </div>
        <div className="flex flex-col small:flex-row items-end justify-between small:border-t border-gray-200 px-6 py-12 gap-x-8">
          <div>
            <h3 className="text-xl-semi mb-4">Got questions?</h3>
            <span className="text-small-regular">
              You can find frequently asked questions and answers on our
              customer service page.
            </span>
          </div>
          <div>
            <UnderlineLink href="/#">
              Customer Service
            </UnderlineLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountLayout
