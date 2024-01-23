import FilterRadioGroup from "@modules/common/components/filter-radio-group"
import FilterToggle from "@modules/common/components/filter-toggle"
import { ChangeEvent } from "react"

export type SortOptions = "created_at" | "price_desc" | "price_asc"

type SortProductsProps = {
  title: string
  options: any[]
  sortBy: SortOptions
  setSortBy: (value: string) => void
}

const SortProducts = ({ 
  title, 
  options, 
  sortBy, 
  setSortBy
}: SortProductsProps) => {

  const handleChange = (e: ChangeEvent<HTMLButtonElement>) => {
    setSortBy(e.target.value)
  }

  return (
    <div className="flex flex-row gap-6">
      <FilterToggle
        title={title}
        items={options}
        value={sortBy}
        handleChange={handleChange}
      />
    </div>
  )
}

export default SortProducts
