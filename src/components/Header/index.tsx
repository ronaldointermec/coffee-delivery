import { HeaderContainer } from "./styles";
import logo from '../../../public/images/logo.svg'
import cart from '../../../public/images/cart.svg'

export function Header(){
    return (
        <HeaderContainer>
            <img src={logo} alt="" />
            <div>
            <h1>b </h1>
            <img src={cart} alt="" />
            </div>
        </HeaderContainer>
    )
}