import React, { FunctionComponent, useState } from 'react'

export type Operation = 'decrease' | 'increase'

interface Props {
  quantity: number
  max: number
  updateValue: (value: number) => void
}


export const Quantifier: React.FC<Props> = ({ quantity, max, updateValue }) => {
  const [value, setValue] = useState<number>(quantity)

  const reduce = ():void => {
    //handleUpdateQuantity(productId, 'decrease')

    setValue(prevState => {
      const updatedValue = prevState - 1
      if (updatedValue < 0) {
        updateValue(0)
        return 0
      }
      updateValue(updatedValue)
      return updatedValue
    })
  }

  const increase = ():void => {
    //handleUpdateQuantity(productId, 'increase')
    setValue(prevState => {
        const newValue = prevState + 1 < max ? prevState + 1 : max
        updateValue(newValue)
        return newValue
    })
  }

  return (
    <div className="flex items-center">
      <input type="button" value="-" className="w-[30px] h-[30px] hover:bg-primary-normal transition-all ease duration-300 bg-gray-100 border border-r-0 border-gray-300 font-bold text-md cursor-pointer" onClick={reduce} />
      <input disabled
             step="1"
             max=""
             min={0}
             value={value < max ? value : max}
             onChange={e => updateValue(parseInt(e.target.value))}
             className="w-[36px] h-[30px] text-center relative bg-white border border-gray-300 p-1" />
      <input type="button" value="+" className="w-[30px] h-[30px] hover:bg-primary-normal transition-all ease duration-300 bg-gray-100 border border-l-0 border-gray-300 font-bold text-md cursor-pointer" onClick={increase} />
    </div>
  )
}