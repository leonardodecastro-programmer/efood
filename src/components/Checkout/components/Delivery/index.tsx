import InputMask from 'react-input-mask'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Button from '../../../Button'
import {
  openCart,
  closeDelivery,
  openPaymemt,
  setDeliveryInfos
} from '../../../../store/redcuers/cart'
import { RootReducer } from '../../../../store'

import * as S from './styles'

const Delivery = () => {
  const { deliveryOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const backToCart = () => {
    dispatch(openCart())
    dispatch(closeDelivery())
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      houseNumber: '',
      complement: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string().min(5).required(),
      address: Yup.string().min(5).required(),
      city: Yup.string().min(3).required(),
      zipCode: Yup.string().min(9).max(9).required(),
      houseNumber: Yup.string().min(1).max(5).required()
    }),
    onSubmit: (values) => {
      dispatch(setDeliveryInfos(values))
      dispatch(openPaymemt())
      dispatch(closeDelivery())
    }
  })

  const checkInputHasError = (fieldname: string) => {
    const isTouched = fieldname in form.touched
    const isInvalid = fieldname in form.errors
    const hasError = isInvalid && isTouched

    return hasError
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <S.Container className={deliveryOpen ? 'delivery-is-open' : ''}>
        <h1>Entrega</h1>
        <S.Row>
          <S.InputGroup>
            <label>Quem irá receber</label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={form.values.fullName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('fullName') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label>Endereço</label>
            <input
              id="address"
              type="text"
              name="address"
              value={form.values.address}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('address') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label>Cidade</label>
            <input
              id="city"
              type="text"
              name="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('city') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.Column>
            <S.InputGroup>
              <label>CEP</label>
              <InputMask
                id="zipCode"
                type="text"
                name="zipCode"
                value={form.values.zipCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('zipCode') ? 'error' : ''}
                mask="99999-999"
              />
            </S.InputGroup>
            <S.InputGroup>
              <label>Número</label>
              <input
                id="houseNumber"
                type="text"
                name="houseNumber"
                value={form.values.houseNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('houseNumber') ? 'error' : ''}
              />
            </S.InputGroup>
          </S.Column>
          <S.InputGroup>
            <label>Complemento (opcional)</label>
            <input
              id="complement"
              type="text"
              name="complement"
              value={form.values.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('complement') ? 'error' : ''}
            />
          </S.InputGroup>
        </S.Row>
        <S.RedirectContainer>
          <Button
            type="submit"
            title="Clique aqui para continuar com o pagamento"
            full
            onClick={() => form.handleSubmit()}
          >
            Continuar com o pagamento
          </Button>
          <Button
            type="button"
            title="Clique aqui para voltar ao carrinho"
            full
            onClick={backToCart}
          >
            Voltar para o carrinho
          </Button>
        </S.RedirectContainer>
      </S.Container>
    </form>
  )
}

export default Delivery
