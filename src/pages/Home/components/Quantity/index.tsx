import { Minus, Plus } from  '@phosphor-icons/react';
import { Container } from "./style";

interface Props {
    quantity: number
}
export function Quantity({ quantity }: Props) {
    return (
        <Container>

            <button>
                <Minus size={18} weight="fill" />
            </button>
            <span>{quantity}</span>
            <button>
                <Plus size={18} />
            </button>

        </Container>
    )
}