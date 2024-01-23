"use client"

import { StoreGetProductsParams } from "@medusajs/medusa"
import InfiniteProducts from "@modules/products/components/infinite-products"
import RefinementNav from "@modules/store/components/refinement-nav"
import RefinementList from "@modules/store/components/refinement-list"
import { useState } from "react"
import { SortOptions } from "../components/refinement-list/sort-products"

const StoreTemplate = () => {
  const [params, setParams] = useState<StoreGetProductsParams>({})
  const [sortBy, setSortBy] = useState<SortOptions>("created_at")

  return (
    <div>
      <RefinementNav refinementList={params} setRefinementList={setParams} />
      <div className="flex flex-col items-end py-2">
        <RefinementList
          refinementList={params}
          setRefinementList={setParams}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <InfiniteProducts params={params} sortBy={sortBy} />
      </div>
    </div>
  )
}

export default StoreTemplate
