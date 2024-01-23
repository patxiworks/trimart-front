import { StoreGetProductsParams } from "@medusajs/medusa"
import SortProducts, { SortOptions } from "./sort-products"
import CollectionFilter from "./collection-filter"
import { ArrowUpMini, ArrowDownMini, CalendarMini } from "@medusajs/icons"

type RefinementListProps = {
  refinementList: StoreGetProductsParams
  setRefinementList: (refinementList: StoreGetProductsParams) => void
  sortBy: SortOptions
  setSortBy: (...args: any[]) => void
  search?: boolean
}

const sortOptions = [
  {
    value: "created_at",
    label: "Sort by date",
    icon: <CalendarMini />
  },
  {
    value: "price_asc",
    label: "Sort by price (ascending)",
    icon: <ArrowUpMini />
  },
  {
    value: "price_desc",
    label: "Sort by price (decending)",
    icon: <ArrowDownMini />
  },
]

const RefinementList = ({
  refinementList,
  setRefinementList,
  sortBy,
  setSortBy,
  search = false,
}: RefinementListProps) => {
  return (
    <div className="flex small:flex-col gap-12 px-8 pr-4 py-4 small:pr-0 small:pl-8 small:mx-4">
      <SortProducts title="Sort:" options={sortOptions} sortBy={sortBy} setSortBy={setSortBy} />
      {/*<SortProducts title="Price" options={priceSortOptions} sortBy={sortByPrice} setSortBy={setSortBy} />*/}
      {/*!search && (
        <CollectionFilter
          refinementList={refinementList}
          setRefinementList={setRefinementList}
        />
      )*/}
    </div>
  )
}

export default RefinementList
