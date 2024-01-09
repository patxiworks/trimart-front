/*import { useProductActions } from '@lib/context/product-context'
import Product from '@types/medusa'
import Button from '@modules/common/components/button'
import { useRouter } from 'next/navigation'

type ProductButtonProps = {
  product: Product
  stock: number
}

const ProductButton: React.FC<ProductButtonProps> = ({ product, stock }) => {
    //const { updateOptions, addToCart, options, inStock, variant } = useProductActions()
    const { push } = useRouter()
    
    const variantCount = product.variants.length
    const handle = product.handle

  return (
    <div>
        {stock
        ? <Button
            variant="minimal"
            className="px-1 rounded-sm border-none bg-green-600 hover:bg-green-700 text-white"
            onClick={() => push(`/products/${handle}`)}
        >
            {stock} available
        </Button>
        : <Button 
            variant="minimal"
            className="px-1 rounded-sm border-none bg-gray-400 text-black hover:bg-gray-400 cursor-arrow"
        >
            Out of stock
        </Button>
        }
    </div>
  )
}

export default ProductButton
*/