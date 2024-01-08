import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"
import { Text } from "@medusajs/ui"
import { ProductProvider } from '@lib/context/product-context'
import ProductButton from './button'

const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
  variantCount,
  stock,
  product,
  isFeatured,
}: ProductPreviewType) => {
  const priceInfo = price && price?.price_type

  return (
    <Link href={`/products/${handle}`} className="group">
      <div className="">
        <div className="border border-primary-normal rounded-t-lg hover:border-2 hover:border-primary-logo">
          <Thumbnail thumbnail={thumbnail} size="square" isFeatured={isFeatured} className="border-2 rounded-b-none border-white" />
        </div>
        <div className="text-base-regular mt-0 border border-primary-light-normal bg-primary-light px-2 py-2 mb-2">
          <Text className="text-xs">{title}</Text>
          <div className="mt-1 flex flex-row justify-between">
            {priceInfo ? (
              <>
                {price.price_type === "sale" && (
                  <Text className="line-through text-ui-fg-muted">
                    {price.original_price}
                  </Text>
                )}
                <Text
                  className={clsx("text-xs text-primary-deep", {
                    "text-ui-fg-interactive": price.price_type === "sale",
                  })}
                >
                  {price.calculated_price}
                </Text>
              </>
            ) : (
              <div className="w-20 h-6">
                <Text className={clsx('font-semibold text-xs text-ui-fg-muted')}>N/A</Text>
              </div>
            )}
            {product
            ? <ProductProvider product={product}>
                <div>
                  <ProductButton product={product} stock={stock} />
                </div>
              </ProductProvider>
            : ''
            }
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductPreview
