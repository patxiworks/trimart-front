import { Metadata } from "next"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "Trimart Supermarket | Store",
  description: "Explore all of our products.",
}

export default function StorePage() {
  return <StoreTemplate />
}
