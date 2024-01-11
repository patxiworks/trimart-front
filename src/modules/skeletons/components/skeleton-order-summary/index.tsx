import SkeletonButton from "@modules/skeletons/components/skeleton-button"
import SkeletonCartTotals from "@modules/skeletons/components/skeleton-cart-totals"
import SkeletonCodeForm from "../skeleton-code-form"

const SkeletonOrderSummary = () => {
  return (
    <div className="border p-2 small:p-6 grid-cols-1">
      <SkeletonCodeForm />
      <div className="mt-4">
        <SkeletonCartTotals header={false} />
        <SkeletonButton />
      </div>
    </div>
  )
}

export default SkeletonOrderSummary
