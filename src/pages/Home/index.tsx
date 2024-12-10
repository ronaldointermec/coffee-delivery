
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import conffees from '../../data/coffee.json'
import { Card } from './components/Card'
import { Coffees, Hero, HeroContent, Heading, Info } from './style'
import { useTheme } from 'styled-components'
import hero from '../../assets/images/hero.svg'
import herobg from '../../assets/images/hero-bg.svg'




export function Home() {
    const theme = useTheme()
    return (
        <div>
        <Hero>
            <HeroContent>
                <div>
                    <Heading>

                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>

                        <span>
                            Com o Coffee Delivery você recebe seu café onde estiver, a
                            qualquer hora
                        </span>
                    </Heading>

                    <Info>
                        <div>
                            <ShoppingCart
                                size={32}
                                weight="fill"
                                color={theme.background}
                                style={{ backgroundColor: theme['yellow-dark'] }}
                            />
                            <span>Compra simples e segura</span>
                        </div>

                        <div>
                            <Package
                                size={32}
                                weight="fill"
                                color={theme.background}
                                style={{ backgroundColor: theme['base-text'] }}
                            />
                            <span>Embalagem mantém o café intacto</span>
                        </div>

                        <div>
                            <Timer
                                size={32}
                                weight="fill"
                                color={theme.background}
                                style={{ backgroundColor: theme.yellow }}
                            />
                            <span>Entrega rápida e rastreada</span>
                        </div>

                        <div>
                            <Coffee
                                size={32}
                                weight="fill"
                                color={theme.background}
                                style={{ backgroundColor: theme.purple }}
                            />
                            <span>O café chega fresquinho até você</span>
                        </div>
                    </Info>
                </div>
                <img src={hero} alt="Café do Coffee Delivery" />
                </HeroContent>
                <img src={herobg} id="hero-bg" alt="" />
                </Hero>
                <Coffees>
                    <h2>Nossos cafés</h2>
                    <div>
                        {conffees.coffees.map(coffee => (
                            <Card key={coffee.id} coffee={coffee} />
                        ))}
                    </div>
                </Coffees>      
        </div>
    )
}