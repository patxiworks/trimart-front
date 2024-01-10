"use client"

import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import { ProductCollection } from "@medusajs/medusa"
import ProductPreview from "@modules/products/components/product-preview"
import { Text } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import { textXlSemi } from '@modules/design/custom-classes'
import Divider from "@modules/common/components/divider"

const ProductRail = ({ collection }: { collection: ProductCollection }) => {
  const { data } = useFeaturedProductsQuery(collection.id)
  const length = data && data.length || 0

  return (
    <div className="small:py-6">
      <div className="content-container">
        <div className="flex justify-between mb-2">
          <Text className={`${textXlSemi}`}>{collection.title}</Text>
          <InteractiveLink href={`/collections/${collection.handle}`}>
            View all
          </InteractiveLink>
        </div>
        <Divider className="mb-6" />
        <div className="overflow-auto no-scrollbar h-[300px]">
          <div className="overflow-auto" style={{width: `${length*200}px`}}>
            <ul className={`grid grid-cols-${length} small:grid-cols-${length} gap-x-6 gap-y-8`}>
              {data &&
                data.map((product) => (
                  <li key={product.id}>
                    <ProductPreview isFeatured {...product} />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductRail
