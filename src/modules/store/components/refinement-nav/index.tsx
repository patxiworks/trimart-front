import { StoreGetProductsParams } from '@medusajs/medusa'
import { useCollections } from 'medusa-react'
import { ChangeEvent, useState } from 'react'
//import Checkbox from '../../../common/components/checkbox'
//import Search from 'app/modules/common/icons/search'
//import { div, Pressable, Text, Link } from 'app/design'
import { useMobileMenu } from '@lib/context/mobile-menu-context'
import Hamburger from '@modules/common/components/hamburger'
//import SearchMenu from 'app/modules/mobile-menu/components/search-menu'
import {
  textBaseRegular,
  textBaseSemi,
} from '@modules/design/custom-classes'

type RefinementListProps = {
  refinementList: StoreGetProductsParams
  setRefinementList: (refinementList: StoreGetProductsParams) => void
}

const RefinementNav = ({
  refinementList,
  setRefinementList,
}: RefinementListProps) => {
  const { collections, isLoading } = useCollections()

  const [state, setState] = useState<boolean>(false)

  const handleCollectionChange = (
    e: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const { checked } = e.target

    const collectionIds = refinementList.collection_id || []

    const exists = collectionIds.includes(id)

    if (checked && !exists) {
      setRefinementList({
        ...refinementList,
        collection_id: [...collectionIds, id],
      })

      return
    }

    if (!checked && exists) {
      setRefinementList({
        ...refinementList,
        collection_id: collectionIds.filter((c) => c !== id),
      })

      return
    }

    return
  }

  const { toggle } = useMobileMenu()

  return (
    <div className='android:hidden ios:hidden'>
      <div className="small:pr-0 small:pl-2 small:min-w-[250px] small:px-8 px-2 py-4 border-b small:border-l-[10px] border-primary-normal bg-primary-light">
        <div className="flex-row small:gap-y-3 flex gap-x-0">
          <div className="flex flex-row small:gap-y-3 gap-x-0 ml-2">
            <Hamburger 
              setOpen={toggle} 
              scrollState={false} 
              label="Categories" 
              screen='index'
              iconType='lines' 
              classes='absolute w-auto pt-0 pl-8'
            />
          </div>
          <div className="flex flex-row ml-32 px-5 gap-x-2 border-l border-gray-300">
            <Hamburger 
              setOpen={toggle} 
              scrollState={false} 
              label="Search" 
              screen="search"
              iconType='search' 
              classes="pt-0 pl-2" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RefinementNav
