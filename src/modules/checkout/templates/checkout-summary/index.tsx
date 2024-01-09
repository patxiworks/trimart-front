"use client"

import { Heading } from "@medusajs/ui"
import ItemsPreviewTemplate from "@modules/cart/templates/preview"
import DiscountCode from "@modules/checkout/components/discount-code"
import CartTotals from "@modules/common/components/cart-totals"
import Divider from "@modules/common/components/divider"
import { useCart } from "medusa-react"
import { textXlSemi } from '@modules/design/custom-classes'

const CheckoutSummary = () => {
  const { cart } = useCart()

  if (!cart?.id) {
    return null
  }

  return (
    <div className="sticky top-0 flex flex-col-reverse small:border small:rounded border-t small:flex-col px-4 small:py-2 ">
      <div className="w-full bg-white flex flex-col pt-4 small:pt-0">
        {/*<Divider className="my-6 small:hidden" />*/}
        <Heading
          level="h2"
          className={`${textXlSemi} flex flex-row text-3xl-regular items-baseline`}
        >
          In your trolley
        </Heading>
        <Divider className="my-6" />
        <CartTotals data={cart} />
        <ItemsPreviewTemplate region={cart?.region} items={cart?.items} />
        <div className="my-6">
          <DiscountCode cart={cart} />
        </div>
      </div>
    </div>
  )
}

export default CheckoutSummary
