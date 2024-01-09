import { useMemo } from "react"
import { ProductVariant } from "@medusajs/medusa"
import { Container, Heading } from "@medusajs/ui"
import Thumbnail from "@modules/products/components/thumbnail"
import useProductPrice from '@lib/hooks/use-product-price'
import Link from "next/link"
import ChevronDown from "@modules/common/icons/chevron-down"
import {
  textBaseRegular,
  textLargeSemi,
} from '@modules/design/custom-classes'

export type ProductHit = {
  id: string
  title: string
  handle: string
  description: string | null
  thumbnail: string | null
  variants: ProductVariant[]
  collection_handle: string | null
  collection_id: string | null
}

export type HitProps = {
  hit: ProductHit
}

const Hit = ({ hit }: HitProps) => {
  const price = useProductPrice({ id: hit.id, variantId: hit.variants[0]?.id })
  const selectedPrice = useMemo(() => {
      const { variantPrice, cheapestPrice } = price
  
      return variantPrice || cheapestPrice || null
    }, [price])
  //const { close } = useMobileMenu()
  const calc_price = selectedPrice?.calculated_price
  //const editedPrice = calc_price ? setCurrency(calc_price) : calc_price

  return (
    <div onClick={close} className="hover:bg-primary-normal">
      <div key={hit.id} className="grid grid-cols-[86px_8fr_1fr] gap-4 w-full p-6 border-b border-primary-normal">
        <div className="flex border border-primary-light-deep justify-center rounded bg-white px-4">
          <Thumbnail thumbnail={hit.thumbnail} size="full" className="shadow-none" />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col">
            {hit.collection_id && (
                <Link
                  href={`/collections/${hit.collection_handle}`}
                  className="span-small-regular span-gray-500"
                >
                  {hit.collection_handle}
                </Link>
            )}
            <span className={`${textLargeSemi}`}>{hit.title}</span>
            <span className={`${textBaseRegular} span-gray-700`}>
              {hit.description}
            </span>
          </div>
          <div className={`${textBaseRegular} text-primary-deeper mt-4 text-xs`}>
              {calc_price}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <ChevronDown className="-rotate-90 text-primary-deeper" />
        </div>
      </div>
    </div>
  )
}

export default Hit
