"use client"

import { useState } from "react"
import { CheckoutProvider } from "@lib/context/checkout-context"
import ChevronDown from "@modules/common/icons/chevron-down"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import { StoreGetProductsParams } from "@medusajs/medusa"
import RefinementNav from "@modules/store/components/refinement-nav"
import Link from "next/link"
import CheckoutLoader from "../components/checkout-loader"
import CheckoutForm from "./checkout-form"
import CheckoutSummary from "./checkout-summary"
import SubmitSpinner from "../components/submit-spinner"
import { contentContainer } from '@modules/design/custom-classes'

const CheckoutTemplate = () => {
  const [params, setParams] = useState<StoreGetProductsParams>({})

  return (
    <CheckoutProvider>
      <div className="bg-white relative small:min-h-screen">
        <SubmitSpinner />
        <RefinementNav refinementList={params} setRefinementList={setParams} />
        <div className="relative">
          <CheckoutLoader />
          <div className={`${contentContainer}`}>
            <div className="grid grid-cols-1 small:grid-cols-[1fr_416px] gap-x-8 small:p-6 small:py-12">
              <CheckoutForm />
              <CheckoutSummary />
            </div>
          </div>
        </div>
      </div>
    </CheckoutProvider>
  )
}

export default CheckoutTemplate
