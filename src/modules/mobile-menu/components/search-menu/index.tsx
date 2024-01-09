import { useMobileMenu } from "@lib/context/mobile-menu-context"
import { searchClient, SEARCH_INDEX_NAME } from "@lib/search-client"
import { MagnifyingGlassMini, XMark as X } from "@medusajs/icons"
import MobileHit from "@modules/search/components/mobile-hit"
import MobileHits from "@modules/search/components/mobile-hits"
import SearchBox from "@modules/search/components/search-box"
import { InstantSearch } from "react-instantsearch-hooks-web"

const SearchMenu = () => {
  const {
    screen: [_, setScreen],
    close,
  } = useMobileMenu()

  return (
    <InstantSearch searchClient={searchClient} indexName={SEARCH_INDEX_NAME}>
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between w-full border-b border-primary-deep">
          <div className="flex-1 basis-0">
            <div className="flex items-center bg-primary-light">
              <div className="flex flex-row txt-5xl font-bold w-5/6 border-r border-primary-deep py-6 px-6">
                <MagnifyingGlassMini className="mr-2" />
                <SearchBox close={close} />
              </div>
              <div className="flex w-1/6 h-full justify-center cursor-pointer">
                <div onClick={close} className="h-full justify-center items-center text-primary-deeper">
                  <X className="text-primary-deeper" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-0 px-0">
          <MobileHits hitComponent={MobileHit} />
        </div>
      </div>
    </InstantSearch>
  )
}

export default SearchMenu
