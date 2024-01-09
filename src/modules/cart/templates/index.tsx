"use client"

import { useState } from "react"
import { StoreGetProductsParams } from "@medusajs/medusa"
import RefinementNav from "@modules/store/components/refinement-nav"
import useEnrichedLineItems from "@lib/hooks/use-enrich-line-items"
import SkeletonCartPage from "@modules/skeletons/templates/skeleton-cart-page"
import { useCart, useMeCustomer } from "medusa-react"
import EmptyCartMessage from "../components/empty-cart-message"
import SignInPrompt from "../components/sign-in-prompt"
import ItemsTemplate from "./items"
import Summary from "./summary"
import Divider from "@modules/common/components/divider"
import { contentContainer } from '@modules/design/custom-classes'

const CartTemplate = () => {
  const { cart } = useCart()
  const { customer, isLoading } = useMeCustomer()
  const items = useEnrichedLineItems()

  const [params, setParams] = useState<StoreGetProductsParams>({})

  if (!cart || !cart?.id?.length || isLoading) {
    return <SkeletonCartPage />
  }

  return (
    <>
    <RefinementNav refinementList={params} setRefinementList={setParams} />
    <div className="bg-gray-50 small:py-12">
      <div className={`${contentContainer}`}>
        {cart.items.length ? (
          <div className="small:grid-cols-[1fr_360px] grid grid-cols-1 gap-x-8">
            <div className="flex flex-col bg-white p-0 small:border border-y border-primary-deep rounded">
              {!customer && (
                <>
                  <SignInPrompt />
                </>
              )}
              <ItemsTemplate region={cart?.region} items={items} />
            </div>
            <div className="relative">
              <div className="top-12 sticky flex flex-col gap-y-8">
                {cart && cart.region && (
                  <>
                    <div className="small:p-6 bg-white px-2 small:border rounded pb-4 small:pt-6 pt-6">
                      <Summary cart={cart} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <EmptyCartMessage />
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default CartTemplate
