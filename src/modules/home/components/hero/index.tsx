import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import UnderlineLink from "@modules/common/components/underline-link"
import { Github } from "@medusajs/icons"
import Image from "next/image"
import { text2xlSemi } from '@modules/design/custom-classes'

const Hero = () => {
  return (
    <div className="h-[70vh] relative w-full">
      <Image
        alt="Trimart store"
        src="http://trimart.com.ng/wp-content/uploads/2020/07/WhatsApp-Image-2020-07-08-at-16.19.29.jpeg"
        className="h-full w-full object-cover"
        fill={true}
      />
      <div className="small:justify-start small:items-center medium:p-32 absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-0 small:mt-40">
        <div className="ios:p-2 bg-black opacity-80 p-6 pl-4 text-center">
          <div
            className={`${text2xlSemi} leading-[32px] text-center font-bold mb-4 text-white shadow-black drop-shadow-md`}
          >
            Your neighbourhood store
          </div>
          <div className="text-base-regular small:text-center mb-6 max-w-[32rem] text-white shadow-black drop-shadow-md">
            Welcome to the online supermarket that meets all your regular domestic needs! You can shop comfortably from your home or office and pick up when you like.
          </div>
        </div>
        <div className="flex relative bg-green-700 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-900 rounded ml-4 -mt-30 text-white" style={{marginTop: '-30px'}}>
          <UnderlineLink href="/store" color={'white'} border={'none'}>
            Check out our store
          </UnderlineLink>
        </div>
        <div className="mt-4 h-2 bg-amber-400" />
      </div>
    </div>
  )
}

export default Hero
