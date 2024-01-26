import usePreviews from "@lib/hooks/use-previews"
import getNumberOfSkeletons from "@lib/util/get-number-of-skeletons"
import repeat from "@lib/util/repeat"
import { StoreGetProductsParams } from "@medusajs/medusa"
import { Button } from "@medusajs/ui"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import { useCart } from "medusa-react"
import { useMemo } from "react"
import { useInfiniteQuery } from "@tanstack/react-query"
import ProductPreview from "../product-preview"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { getProductsList } from "@lib/data"
import {
  textBaseRegular,
  textXlRegular,
} from '@modules/design/custom-classes'

type RelatedProductsProps = {
  product: PricedProduct
}

const RelatedProducts = ({ product }: RelatedProductsProps) => {
  const { cart } = useCart()

  const queryParams: StoreGetProductsParams = useMemo(() => {
    const params: StoreGetProductsParams = {}

    if (cart?.id) {
      params.cart_id = cart.id
    }

    if (cart?.region?.currency_code) {
      params.currency_code = cart.region.currency_code
    }

    if (product.collection_id) {
      params.collection_id = [product.collection_id]
    }

    if (product.tags) {
      params.tags = product.tags.map((t) => t.value)
    }

    params.is_giftcard = false

    return params
  }, [product, cart?.id, cart?.region])

  const { data, hasNextPage, fetchNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery(
      [`infinite-products-${product.id}`, queryParams, cart],
      ({ pageParam }) => getProductsList({ pageParam, queryParams }),
      {
        getNextPageParam: (lastPage) => lastPage.nextPage,
      }
    )

  const previews = usePreviews({ pages: data?.pages, region: cart?.region })

  return (
    <div className="product-page-constraint">
      <div className="flex flex-col items-center text-center mb-16">
        <span className={`${textBaseRegular} mb-2 text-gray-600`}>
          Related products
        </span>
        <p className={`${textXlRegular} max-w-lg text-center text-gray-900`}>
          You may also like these
        </p>
      </div>

      <div className="overflow-auto no-scrollbar h-[300px]">
        <div className="flex absolute z-10 justify-center h-[300px] items-center fixed opacity-0">left</div>
        <div className="flex absolute z-10 flex-end right-8 h-[300px] items-center fixed opacity-0">right</div>
        {/*<div className="overflow-auto" style={{width: `${previews.length*200}px`}}>*/}
        <div className="overflow-auto" style={{width: `1600px`}}>
          <ul className={`grid grid-cols-8 small:grid-cols-8 medium:grid-cols-8 gap-x-6 gap-y-8`}>
            {previews.slice(0,8).map((p) => (
              <li key={p.id}>
                <ProductPreview {...p} />
              </li>
            ))}
            {isLoading &&
              !previews.length &&
              repeat(8).map((index) => (
                <li key={index}>
                  <SkeletonProductPreview />
                </li>
              ))}
            {isFetchingNextPage &&
              repeat(getNumberOfSkeletons(data?.pages)).map((index) => (
                <li key={index}>
                  <SkeletonProductPreview />
                </li>
              ))}
          </ul>
        </div>
      </div>
      {/*hasNextPage && (
        <div className="flex items-center justify-center mt-8">
          <Button
            isLoading={isLoading}
            onClick={() => fetchNextPage()}
            className="w-72"
          >
            Load more
          </Button>
        </div>
      )*/}
    </div>
  )
}

export default RelatedProducts
