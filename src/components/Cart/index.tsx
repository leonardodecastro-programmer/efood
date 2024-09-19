import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { openDelivery, closeCart, remove } from '../../store/redcuers/cart'
import Button from '../Button'
import { formatPrice } from '../../utils'
import { getTotalPrice } from '../../utils'

import * as S from './styles'

const Cart = () => {
  const { items, cartOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  function handleGoToDelivery() {
    dispatch(openDelivery())
    dispatch(closeCart())
  }

  return (
    <S.Container className={cartOpen ? 'cart-is-open' : ''}>
      {items.length > 0 ? (
        <>
          <ul>
            {items.map((item) => (
              <S.CartItem key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <span>{formatPrice(item.preco)}</span>
                </div>
                <button onClick={() => removeItem(item.id)} type="button" />
              </S.CartItem>
            ))}
          </ul>
          <S.Prices>
            Valor total
            <span>{formatPrice(getTotalPrice(items))}</span>
          </S.Prices>
          <Button
            title="Clique aqui para continuar com a entrega"
            type="button"
            full
            onClick={handleGoToDelivery}
          >
            Continuar com a entrega
          </Button>
        </>
      ) : (
        <p className="empty-text">
          O carrinho está vazio, adicione pelo menos um produto para continuar
          com a compra
        </p>
      )}
    </S.Container>
  )
}

export default Cart
