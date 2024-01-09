import repeat from "@lib/util/repeat"
import { Heading, Table } from "@medusajs/ui"
import SkeletonCartItem from "@modules/skeletons/components/skeleton-cart-item"
import SkeletonCodeForm from "@modules/skeletons/components/skeleton-code-form"
import SkeletonOrderSummary from "@modules/skeletons/components/skeleton-order-summary"

const SkeletonCartPage = () => {
  return (

    <div className="py-12 small:pt-28">
      <div className="small:max-w-[1440px] small:px-8 mx-auto w-full">
        <div className="small:grid-cols-[1fr_360px] grid grid-cols-1 gap-x-8">
          <div className="flex flex-col bg-white small:border rounded p-0 gap-y-6">
            <div className="bg-white flex items-start justify-between border-b p-6">
              <div className="flex flex-col gap-y-2">
                <div className="w-60 h-8 bg-gray-200 animate-pulse" />
                <div className="w-48 h-6 bg-gray-200 animate-pulse" />
              </div>
              <div>
                <div className="w-14 h-8 bg-gray-200 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="border-b flex justify-center items-center mb-6 py-6 pt-0">
                <div className="w-20 h-10 bg-gray-200 animate-pulse" />
              </div>
              <Table>
                <Table.Header className="border-t-0">
                  <Table.Row className="[&_th:last-child]:pr-3 [&_th:first-child]:pl-3 small:[&_td:last-child]:pr-6 small:[&_td:first-child]:pl-6">
                    <Table.HeaderCell className="small:pl-3">
                      <div className="w-10 h-6 bg-gray-200 animate-pulse" />
                    </Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell>
                      <div className="w-16 h-6 bg-gray-200 animate-pulse" />
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      <div className="w-12 h-6 bg-gray-200 animate-pulse" />
                    </Table.HeaderCell>
                    <Table.HeaderCell className="small:pr-3">
                      <div className="flex justify-end">
                        <div className="w-12 h-6 bg-gray-200 animate-pulse" />
                      </div>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {repeat(4).map((index) => (
                    <SkeletonCartItem key={index} />
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <SkeletonOrderSummary />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonCartPage
