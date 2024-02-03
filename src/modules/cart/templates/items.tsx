import { LineItem, Region } from "@medusajs/medusa"
import { Heading, Table } from "@medusajs/ui"
import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"
import { textXlSemi } from '@modules/design/custom-classes'
import Cart from "@modules/common/icons/cart"

type ItemsTemplateProps = {
  items?: Omit<LineItem, "beforeInsert">[]
  region?: Region
}

const ItemsTemplate = ({ items, region }: ItemsTemplateProps) => {
  return (
    <>
    <div className="flex justify-center items-center py-6">
      <Heading className={`${textXlSemi} flex flex-row gap-3 text-primary-deeper`}>
        <Cart size={35} />
        <span>Your trolley</span>
      </Heading>
    </div>
    <div className="py-6 border-t border-primary-normal">
      <Table className="">
        <Table.Header className="border-t-0">
          <Table.Row className="text-ui-fg-subtle txt-medium-plus [&_th:last-child]:pr-3 [&_th:first-child]:pl-3 small:[&_th:last-child]:pr-6 small:[&_th:first-child]:pl-6">
            <Table.HeaderCell className="small:pl-3">Item</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell className="hidden small:table-cell">
              Price
            </Table.HeaderCell>
            <Table.HeaderCell className="small:pr-3 text-right">
              Total
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items && region
            ? items
                .sort((a, b) => {
                  return a.created_at > b.created_at ? -1 : 1
                })
                .map((item) => {
                  return <Item key={item.id} item={item} region={region} />
                })
            : Array.from(Array(5).keys()).map((i) => {
                return <SkeletonLineItem key={i} />
              })}
        </Table.Body>
      </Table>
    </div>
    </>
  )
}

export default ItemsTemplate
