"use client"

import React, { useEffect, useRef, useState } from "react"
import { ProductProvider } from "@lib/context/product-context"
import { useIntersection } from "@lib/hooks/use-in-view"
import ProductInfo from "@modules/products/templates/product-info"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ImageGallery from "@modules/products/components/image-gallery"
import MobileActions from "@modules/products/components/mobile-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import ProductActions from "../components/product-actions"
import { StoreGetProductsParams } from "@medusajs/medusa"
import RefinementNav from "@modules/store/components/refinement-nav"

type ProductTemplateProps = {
  product: PricedProduct
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product }) => {
  const [isOnboarding, setIsOnboarding] = useState<boolean>(false)

  const infoRef = useRef<HTMLDivElement>(null)

  const inView = useIntersection(infoRef, "0px")

  const [params, setParams] = useState<StoreGetProductsParams>({})

  useEffect(() => {
    const onboarding = window.sessionStorage.getItem("onboarding")
    setIsOnboarding(onboarding === "true")
  }, [])

  return (
    <>
      <RefinementNav refinementList={params} setRefinementList={setParams} />
      <ProductProvider product={product}>
        <div className="content-container flex flex-col small:flex-row small:items-start py-6 relative pb-8 border-b">
          <div className="block small:w-1/2 relative items-center small:sticky">
            <ImageGallery images={product?.images || []} />
          </div>
          <div className="flex flex-col small:shadow small:top-48 small:mt-16 small:p-8 small:max-w-[450px] small:border small:rounded-lg w-full py-8 gap-y-6">
            <ProductInfo product={product} />
            {isOnboarding && <ProductOnboardingCta />}
            <ProductActions product={product} />
            <ProductTabs product={product} />
          </div>
          {/*<div
            className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-12"
            ref={infoRef}
          >
            {isOnboarding && <ProductOnboardingCta />}
            <ProductActions product={product} />
          </div>*/}
        </div>
        <div className="content-container my-16 px-6 small:px-8">
          <RelatedProducts product={product} />
        </div>
        <MobileActions product={product} show={!inView} />
      </ProductProvider>
    </>
  )
}

export default ProductTemplate
