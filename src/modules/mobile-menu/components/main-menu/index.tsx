import { useMobileMenu } from "@lib/context/mobile-menu-context"
import { useStore } from "@lib/context/store-context"
import useCountryOptions from "@lib/hooks/use-country-options"
import ChevronDown from "@modules/common/icons/chevron-down"
import { XMark as X } from "@medusajs/icons"
import { useCollections, useProductCategories, useMeCustomer } from "medusa-react"
import Link from "next/link"
import ReactCountryFlag from "react-country-flag"
import { Heading } from "@medusajs/ui"

const MainMenu = () => {
  const { collections } = useCollections()
  const { product_categories} = useProductCategories()
  const { customer } = useMeCustomer()
  const { countryCode } = useStore()

  const countries = useCountryOptions()

  const {
    close,
    screen: [_, setScreen],
  } = useMobileMenu()

  const setScreenCountry = () => setScreen("country")
  const setScreenSearch = () => setScreen("search")

  return (
    <div className="flex flex-col flex-1 bg-primary-light">
      <div className="flex flex-row w-full justify-between items-center border-b border-primary-deep">
        {/*<div className="flex-1 basis-0">
          <button
            className="flex items-center gap-x-2"
            onClick={setScreenCountry}
          >
            <ReactCountryFlag countryCode={countryCode || "us"} svg />
            <ChevronDown />
          </button>
        </div>*/}

        <Heading className="txt-5xl font-bold w-5/6 p-5 pl-4 border-r border-primary-deep">
          <span className="txt-5xl text-base font-bold text-primary-deeper">Product Categories</span>
        </Heading>

        <div className="flex-1 basis-0 flex justify-center">
          <button onClick={close} className='justify-center items-center text-primary-deeper outline-none'>
            <X onClick={close} className="text-primary-deeper" />
          </button>
        </div>
      </div>

      {/*<div className="txt-5xl font-bold w-5/6 p-5 pl-4 border-r border-primary-deep">
          <span className="txt-5xl text-base font-bold text-primary-deeper">Product Categories</Text>
        </div>
        <div className="flex w-1/6 h-full justify-center cursor-pointer hover:bg-primary-normal">
          <button onClick={close} className='justify-center items-center text-primary-deeper'>
            <X onClick={close} className="text-primary-deeper" />
          </button>
        </div>*/}

      <div className="space-y-6 flex-1 flex flex-col justify-between p-0">
        {/*process.env.FEATURE_SEARCH_ENABLED && (
          <button
            className="bg-gray-50 flex items-center px-4 py-2 gap-x-2 text-ui-fg-muted rounded-rounded"
            onClick={setScreenSearch}
          >
            <MagnifyingGlassMini />
            <span placeholder="Search products" className="text-base-regular">
              Search products
            </span>
          </button>
        )}*/}

        {/*<div className="flex flex-col flex-1 text-large-regular text-gray-900">
          <ul className="flex flex-col gap-y-2">
            <li className="bg-gray-50 p-4 rounded-rounded">
              <Link href="/store">
                <button
                  className="flex items-center justify-between w-full"
                  onClick={close}
                >
                  <span className="sr-only">Go to Store</span>
                  <span>Store</span>
                  <ChevronDown className="-rotate-90" />
                </button>
              </Link>
            </li>
            {collections ? (
              <>
                {collections.map((collection) => (
                  <li
                    key={collection.id}
                    className="bg-gray-50 p-4 rounded-rounded"
                  >
                    <Link href={`/collections/${collection.handle}`}>
                      <button
                        className="flex items-center justify-between w-full"
                        onClick={close}
                      >
                        <span className="sr-only">
                          Go to {collection.title} collection
                        </span>
                        <span>{collection.title}</span>
                        <ChevronDown className="-rotate-90" />
                      </button>
                    </Link>
                  </li>
                ))}
              </>
            ) : null}
          </ul>
        </div>*/}

        <div className="flex flex-col flex-1 text-large-regular text-gray-900">
          <ul className="flex flex-col gap-y-0">
            <Link href="/store">
              <li onClick={close} className="bg-none hover:bg-primary-normal hover:cursor-pointer border-b border-primary-normal p-4 py-5 pr-10">
                <button
                  className="flex items-center justify-between w-full"
                >
                  <span className="sr-only">Go to Store</span>
                  <span className="text-base text-primary-deeper">All products</span>
                  <ChevronDown className="-rotate-90 text-primary-deeper" />
                </button>
              </li>
            </Link>
            {product_categories ? (
              <>
                {product_categories?.map((c) => {
                  if (c.parent_category) {
                    return
                  }

                  const children =
                    c.category_children?.map((child) => ({
                      name: child.name,
                      handle: child.handle,
                      id: child.id,
                    })) || null

                  return (
                    <li
                      className="bg-none hover:bg-primary-normal border-b border-primary-normal"
                      key={c.id}
                    >
                      <Link href={`/store/${c.handle}`}>
                        <button
                          className="flex items-center justify-between w-full p-4 py-5 pr-10"
                          onClick={close}
                        >
                          {/*<span className="sr-only">Go to category</span>*/}
                          <span className="text-base text-primary-deeper">{c.name}</span>
                          <ChevronDown className="-rotate-90 text-primary-deeper" />
                        </button>
                      </Link>
                      {children && (
                        <ul className="grid grid-cols-1 ml-3 gap-2">
                          {children &&
                            children.map((child) => (
                              <li key={child.id}>
                                <Link
                                  className="hover:text-ui-fg-base"
                                  href={`/store/${child.handle}`}
                                >
                                  <button
                                    className="flex items-center justify-between w-full"
                                    onClick={close}
                                  >
                                    <span>{child.name}</span>
                                    <ChevronDown className="-rotate-90" />
                                  </button>
                                </Link>
                              </li>
                            ))}
                        </ul>
                      )}
                    </li>
                  )
                })}
              </>
            ) : null}
          </ul>
        </div>

        {/*<div className="flex flex-col">
          <div className="flex flex-col gap-y-8 text-small-regular">
            {!customer ? (
              <div className="flex flex-col gap-y-4 ">
                <span className="text-gray-700 uppercase">Account</span>
                <Link href={`/account/login`} passHref>
                  <button
                    className="flex items-center justify-between border-b border-gray-200 py-2 w-full"
                    onClick={close}
                  >
                    <span className="sr-only">Go to sign in page</span>
                    <span className="normal-case">Sign in</span>
                    <ChevronDown className="-rotate-90" />
                  </button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-y-4">
                <span className="text-gray-700 uppercase">Signed in as</span>
                <Link href={`/account`} passHref>
                  <button
                    className="flex items-center justify-between border-b border-gray-200 py-2 w-full"
                    onClick={close}
                  >
                    <span className="sr-only">Go to account page</span>
                    <span className="normal-case">{customer.email}</span>
                    <ChevronDown className="-rotate-90" />
                  </button>
                </Link>
              </div>
            )}
            <div className="flex flex-col gap-y-4">
              <span className="text-gray-700 uppercase">Delivery</span>
              <button
                className="flex items-center justify-between border-b border-gray-200 py-2"
                onClick={setScreenCountry}
              >
                <span className="sr-only">
                  Click to select shipping country
                </span>
                <div className="flex items-center gap-x-2">
                  <ReactCountryFlag countryCode={countryCode || "us"} svg />
                  <span className="normal-case">
                    Shipping to{" "}
                    {countries?.find((c) => c.country === countryCode)?.label}
                  </span>
                </div>
                <ChevronDown className="-rotate-90" />
              </button>
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  )
}

export default MainMenu
