import { Button, Heading, Text } from "@medusajs/ui"
import Link from "next/link"
import {
  textBaseRegular,
  textXlSemi,
} from '@modules/design/custom-classes'

const SignInPrompt = () => {
  return (
    <div className="small:bg-primary-light flex items-center justify-between rounded-t border-b border-primary-deep p-6">
      <div>
        <Heading level="h2" className="txt-xlarge">
          Already have an account?
        </Heading>
        <Text className={`${textBaseRegular} mt-2 w-full text-gray-700`}>
          Sign in for a better experience.
        </Text>
      </div>
      <div>
        <Link href="/account/login">
          <Button variant="secondary" className="h-10">
            Sign in
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default SignInPrompt
