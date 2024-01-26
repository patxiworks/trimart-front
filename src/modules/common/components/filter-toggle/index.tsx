import { FC } from "react"
import { Label, RadioGroup, Text, clx } from "@medusajs/ui"
import { EllipseMiniSolid } from "@medusajs/icons"
import { ChangeEvent } from "react"
import { ArrowUpMini, ArrowDownMini } from "@medusajs/icons"

type FilterToggleProps = {
  title: string
  items: {
    value: string
    label: string
    icon: FC
  }[]
  value: any
  handleChange: (...args: any[]) => void
}

const FilterToggle = ({
  title,
  items,
  value,
  handleChange,
}: FilterToggleProps) => {
  return (
    <div className="flex gap-x-3 flex-row gap-x-3">
      <Text className="txt-compact-small-plus text-ui-fg-muted">{title}</Text>
      <RadioGroup>
        <div className="flex flex-row gap-3">
        {items?.map((i) => (
          <div
            key={i.value}
            className={clx("flex gap-x-2 items-start")}
          >
            <RadioGroup.Item
              checked={i.value === value}
              onClick={(e) =>
                handleChange(
                  e as unknown as ChangeEvent<HTMLButtonElement>,
                  i.value
                )
              }
              className="hidden peer"
              id={i.value}
              value={i.value}
            />
            <Label
              htmlFor={i.value}
              title={i.label}
              className={clx(
                "text-gray-300 txt-compact-small-plus hover:cursor-pointer",
                {
                  "text-ui-fg-base": i.value === value,
                }
              )}
            >
              {i.icon}
            </Label>
          </div>
        ))}
        </div>
      </RadioGroup>
    </div>
  )
}

export default FilterToggle
