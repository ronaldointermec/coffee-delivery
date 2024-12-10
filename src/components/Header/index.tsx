import { HeaderContainer, EstadoContainer, CartContainer } from "./styles";
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'


export function Header() {
const count = 10;

    return (

        <HeaderContainer>

            <NavLink to="/" title="Coffe Delivery Screen">
                <img src={logo} alt="" />
            </NavLink>

            <div>
                <EstadoContainer>
                    <MapPin size={22} weight="fill" />
                    <span>Porto Alegre, RS</span>
                </EstadoContainer>

                <CartContainer>
                    <NavLink to="/cart" title="Cart">
                        <ShoppingCart size={22} weight="fill" />
                        {count > 0 && <span>{count}</span>}
                    </NavLink>
                </CartContainer>
            </div>


        </HeaderContainer>
    )
}