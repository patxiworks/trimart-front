import { Heading, Text } from "@medusajs/ui"
import UnderlineLink from "@modules/common/components/interactive-link"
import {
  text2xlSemi,
  textBaseRegular,
} from "@modules/design/custom-classes"

const EmptyCartMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-primary-light small:border border-primary-deep rounded px-8 py-24">
      <Text className={`${text2xlSemi} text-center`}>
        Your trolley is empty!
      </Text>
      <Text
        className={`${textBaseRegular} mb-6 mt-4 max-w-[32rem] text-center`}
      >
        You don&apos;t have anything in your trolley. Why not add something...
      </Text>
      <div>
        <UnderlineLink href="/store">Explore our products</UnderlineLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
