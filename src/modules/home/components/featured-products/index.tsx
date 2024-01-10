import { ProductCollection } from "@medusajs/medusa"
import ProductRail from "./product-rail"

const FeaturedProducts = ({
  collections,
}: {
  collections: ProductCollection[]
}) => {
  return (
    <div className="py-0">
      <div className="py-8">
        <ul className="flex flex-col gap-x-6 gap-y-0">
          {collections.map((collection) => (
            <li key={collection.id}>
              <ProductRail collection={collection} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FeaturedProducts
