"use client"

import clsx from "clsx"
import { useCollections, useProductCategories } from "medusa-react"
import { Text } from "@medusajs/ui"
import Link from "next/link"
import MedusaCTA from "../medusa-cta"

const FooterNav = () => {
  const { collections } = useCollections()
  const { product_categories } = useProductCategories()

  return (
    <div className="content-container flex flex-col gap-y-8 pt-12 pb-8 px-6 border-t border-gray-300">
      <div className="flex gap-y-6 xsmall:flex-row flex-col items-start gap-8 xsmall:justify-between">
        <div>
        <div>
          {/*<Link href="/" className="text-xl-semi uppercase">Trimart</Link>*/}
        </div>
        <div className="text-small-regular grid grid-cols-3 gap-x-16">
          <div className="flex flex-col gap-y-2 border-r">
            <span className="text-base-semi font-bold">Trimart</span>
            <ul className="grid grid-cols-1 gap-y-2 text-sm">
              <li className="hover:text-primary-deep">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  About
                </a>
              </li>
              <li className="hover:text-primary-deep">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact
                </a>
              </li>
              <li className="hover:text-primary-deep">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Helpdesk
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-2 border-r">
            <span className="text-base-semi font-bold">Collections</span>
            <ul
              className={clsx("grid grid-cols-1 gap-y-2 text-sm", {
                "grid-cols-2": (collections?.length || 0) > 4,
              })}
            >
              {collections?.map((c) => (
                <li key={c.id} className="hover:text-primary-deep">
                  <Link href={`/#/collections/${c.id}`}>
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi font-bold">Categories</span>
            <ul
              className={clsx("grid grid-cols-1 gap-y-2 text-sm")}
            >
              {product_categories?.slice(0, 6).map((c) => {
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
                      className="hover:text-primary-deep"
                      key={c.id}
                    >
                      <Link href={`/store/${c.handle}`}>
                        {c.name}
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
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      )}
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
        </div>
        <div className="text-sm">
          {/*<CountrySelect />*/}
        </div>
      </div>
      <div className="flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:items-end border-t pt-4">
        <span className="text-xsmall-regular text-gray-500 text-sm">
          © Copyright 2024 Trimart Supermarket
        </span>
      </div>
    </div>
    
  )
}

export default FooterNav
