import { ShoppingCart } from 'phosphor-react';
import conffees from '../../data/coffee.json'
import { HomeContainer, ConffeeCard, Container, Button, Counter,CoffeeList } from './style'


// interface Props {

//     id: string
//     title: string
//     description: string
//     tags: []
//     price: number,
//     image: string
// }


export function Home() {

    const id = "0";
    const title = "Expresso Tradicional";
    const description = "O tradicional café feito com água quente e grãos moídos";
    const tags = ["tradicional"];
    const price = 9.90;
    const image = "src/assets/images/coffees/expresso.png";

    return (
        <HomeContainer>


            {conffees.coffees.map(coffee => (
                <ConffeeCard>
                    <img src={coffee.image} alt="" />
                    <span>{coffee.tags[0].toUpperCase()}</span>

                    <strong>{coffee.title}</strong>

                    <p>{coffee.description}</p>

                    <div>
                        <p>R$ <strong>{coffee.price}</strong></p>
                        <Container>
                            <Button >-</Button>
                            <Counter>1</Counter>
                            <Button >+</Button>
                        </Container>
                        <ShoppingCart size={22} weight="fill" />
                    </div>
                </ConffeeCard>
            ))}




        </HomeContainer>

        // <HomeContainer>

        //     <ol>
        //         {conffees.coffees.map(coffee => (
        //             <div>
        //                 <h1>{coffee.title}</h1>
        //                 <li><img src={coffee.image} alt="" /></li>
        //             </div>
        //         ))}

        //     </ol>
        // </HomeContainer>
    )
}