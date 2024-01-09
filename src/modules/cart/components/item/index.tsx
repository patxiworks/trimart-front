import { useStore } from "@lib/context/store-context"
import { LineItem, Region } from "@medusajs/medusa"
import { Table, Text, clx } from "@medusajs/ui"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import LineItemUnitPrice from "@modules/common/components/line-item-unit-price"
import CartItemSelect from "@modules/cart/components/cart-item-select"
import Trash from "@modules/common/icons/trash"
import Thumbnail from "@modules/products/components/thumbnail"
import Link from "next/link"
import { Quantifier } from "../quantifier"

type ItemProps = {
  item: Omit<LineItem, "beforeInsert">
  region: Region
  type?: "full" | "preview"
}

const Item = ({ item, region, type = "full" }: ItemProps) => {
  const { updateItem, deleteItem } = useStore()
  const { handle } = item.variant.product

  return (
    <Table.Row className="even:bg-white odd:bg-slate-50 border-b-primary-normals w-full [&_td:last-child]:pr-3 [&_td:first-child]:pl-3 small:[&_td:last-child]:pr-6 small:[&_td:first-child]:pl-6 hover:bg-primary-light">
      <Table.Cell className="small:pl-2 p-4 w-24">
        <Link
          href={`/products/${handle}`}
          className={clx("flex", {
            "w-16": type === "preview",
            "small:w-24 w-12": type === "full",
          })}
        >
          <Thumbnail thumbnail={item.thumbnail} size="square" />
        </Link>
      </Table.Cell>

      <Table.Cell className="text-left">
        <Text className="txt-medium-plus text-ui-fg-base">{item.title}</Text>
        <LineItemOptions variant={item.variant} />
      </Table.Cell>

      {type === "full" && (
        <Table.Cell>
          <div className="flex gap-2">
            {/*<CartItemSelect
              value={item.quantity}
              onChange={(value) =>
                updateItem({
                  lineId: item.id,
                  quantity: parseInt(value.target.value),
                })
              }
              className="w-14 h-10 p-4"
            >
              {Array.from(
                [
                  ...Array(
                    item.variant.inventory_quantity > 0
                      ? item.variant.inventory_quantity
                      : 10
                  ),
                ].keys()
              )
                .slice(0, 10)
                .map((i) => {
                  const value = i + 1
                  return (
                    <option value={value} key={i}>
                      {value}
                    </option>
                  )
                })}
            </CartItemSelect>*/}
            <Quantifier 
              quantity={item.quantity}
              max={item.variant.inventory_quantity}
              updateValue={(value: any) => {
                updateItem({
                  lineId: item.id,
                  quantity: parseInt(value),
                })}
              } 
            />
            {/*<button
              className="flex items-center gap-x-"
              onClick={() => deleteItem(item.id)}
            >
              <Trash size={18} />
            </button>*/}
          </div>
        </Table.Cell>
      )}

      {type === "full" && (
        <Table.Cell className="hidden small:table-cell">
          <LineItemUnitPrice item={item} region={region} style="tight" />
        </Table.Cell>
      )}

      <Table.Cell className="small:pr-2">
        <span
          className={clx("!pr-0", {
            "flex flex-col items-end h-full justify-center": type === "preview",
          })}
        >
          {type === "preview" && (
            <span className="flex gap-x-1 ">
              <Text className="text-ui-fg-muted">{item.quantity}x </Text>
              <LineItemUnitPrice item={item} region={region} style="tight" />
            </span>
          )}
          <LineItemPrice item={item} region={region} style="tight" />
        </span>
      </Table.Cell>
    </Table.Row>
  )
}

export default Item
