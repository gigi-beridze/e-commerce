import { Carousel } from "react-bootstrap"
import StoreItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

export const Home = () => {
    const filteredItems = StoreItems.slice(0,5);
    return (
        <Carousel>
            {filteredItems.map((item) => (
                <Carousel.Item key={item.id} interval={1500}>
                    <img
                        className="d-block w-100"
                        src={item.imgUrl}
                        alt={item.name}
                    />
                    <Carousel.Caption>
                        <h3>{item.name}</h3>
                        <p>{formatCurrency(item.price)}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
    </Carousel>
    )
}