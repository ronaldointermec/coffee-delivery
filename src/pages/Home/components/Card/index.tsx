import { useTheme } from 'styled-components';
import { Quantity } from '../Quantity';
import { ConffeeCard, Tag, PriceContainer, Value, Order } from './style'
import { CheckFat, ShoppingCart } from '@phosphor-icons/react'


interface PropsCard {
    coffee: {
        id: string
        title: string
        description: string
        tags: string[]
        price: number
        image: string
    }
}


export function Card({ coffee }: PropsCard) {
    const theme = useTheme();
    const isItemAdded = false;
    return (

        <ConffeeCard>
            <img src={coffee.image} alt="" />
            <Tag>
                {coffee.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                ))
                }
            </Tag>

            <h3>{coffee.title}</h3>
            <span>{coffee.description}</span>


            <PriceContainer>
                <Value>
                    <span>R$</span>
                    <span>{coffee.price}</span>
                </Value>
                <Order>
                    <Quantity quantity={5} />
                    <button disabled={true} >
                        {isItemAdded ? (
                            <CheckFat
                                weight="fill"
                                size={22}
                                color={theme['base-card']}
                            />
                        ) : (
                            <ShoppingCart size={22} weight="fill" color={theme['base-card']} />
                        )}
                    </button>
                </Order>
            </PriceContainer>
        </ConffeeCard>

    )
}