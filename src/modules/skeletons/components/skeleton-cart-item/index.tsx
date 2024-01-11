import { Table } from "@medusajs/ui"

const SkeletonCartItem = () => {
  return (
    <Table.Row className="w-full m-4 [&_td:last-child]:pr-3 [&_td:first-child]:pl-3 small:[&_td:last-child]:pr-6 small:[&_td:first-child]:pl-6">
      <Table.Cell className="small:pl-3 p-4 w-24">
        <div className="flex w-16 h-16 small:w-24 small:h-24 p-4 bg-gray-200 rounded-large animate-pulse" />
      </Table.Cell>
      <Table.Cell className="text-left">
        <div className="flex flex-col gap-y-2">
          <div className="w-20 small:w-32 h-4 bg-gray-200 animate-pulse" />
          <div className="w-16 small:w-24 h-4 bg-gray-200 animate-pulse" />
        </div>
      </Table.Cell>
      <Table.Cell>
        <div className="flex gap-2 items-center">
          <div className="w-20 h-6 bg-gray-200 animate-pulse" />
        </div>
      </Table.Cell>
      <Table.Cell>
        <div className="flex gap-2">
          <div className="w-12 h-6 bg-gray-200 animate-pulse" />
        </div>
      </Table.Cell>
      <Table.Cell className="small:pr-3 text-right">
        <div className="flex gap-2 justify-end">
          <div className="w-12 h-6 bg-gray-200 animate-pulse" />
        </div>
      </Table.Cell>
    </Table.Row>
  )
}

export default SkeletonCartItem
