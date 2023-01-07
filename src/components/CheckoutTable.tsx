import { formatCurrency } from "../utilities/formatCurrency"
import StoreItems from "../data/items.json"
import { Button } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"

type CartItemProps = {
    id:number 
    quantity: number
}

export const CheckoutTable = ({ id, quantity }:CartItemProps)  => {
    const item = StoreItems.find(i => i.id === id)
    const { removeFromCart } = useShoppingCart()
    if(item == null) return null 

    return (
        <tbody>
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                    <img style={{ width:"50px", height:"50px"}} src={item.imgUrl}/>
                </td>
                <td>{item.name}</td>
                <td>{quantity}</td>
                <td>{formatCurrency(item.price * quantity)}</td>
                <td>
                    <Button 
                        className="btn-danger" 
                        onClick={() => removeFromCart(item.id)}>X
                    </Button>
                </td>
            </tr>
        </tbody>
    )
}