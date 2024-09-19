import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Button from '../../../Button'
import {
  openDelivery,
  closePaymemt,
  clear
} from '../../../../store/redcuers/cart'
import { RootReducer } from '../../../../store'
import { usePurchaseMutation } from '../../../../services/api'
import { formatPrice } from '../../../../utils'
import { getTotalPrice } from '../../../../utils'

import * as S from './styles'

const Payment = () => {
  const { paymentOpen, deliveryInfos, items } = useSelector(
    (state: RootReducer) => state.cart
  )
  const [purchase, { data, isSuccess, isLoading, reset }] =
    usePurchaseMutation()
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: ''
    },
    validationSchema: Yup.object({
      cardDisplayName: Yup.string().min(5).required(),
      cardNumber: Yup.string().min(19).max(19).required(),
      cardCode: Yup.string().min(3).max(3).required(),
      expiresMonth: Yup.string().min(2).max(2).required(),
      expiresYear: Yup.string().min(2).max(2).required()
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: deliveryInfos.fullName,
          address: {
            description: deliveryInfos.address,
            city: deliveryInfos.city,
            zipCode: deliveryInfos.zipCode,
            number: Number(deliveryInfos.houseNumber),
            complement: deliveryInfos.complement
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const backToPayment = () => {
    dispatch(openDelivery())
    dispatch(closePaymemt())
  }

  const handleCompletePurchase = () => {
    dispatch(closePaymemt())
    reset()
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <S.Container className={paymentOpen ? 'payment-is-open' : ''}>
      {isSuccess && data ? (
        <S.Success>
          <h1>Pedido realizado - {data.orderId}</h1>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <Button
            type="button"
            title="Clique aqui para concluir a compra"
            full
            onClick={handleCompletePurchase}
          >
            Concluir
          </Button>
        </S.Success>
      ) : (
        <form onClick={form.handleSubmit}>
          <S.Payment>
            <h1>
              Pagamento - Valor a pagar {formatPrice(getTotalPrice(items))}
            </h1>
            <S.Row>
              <S.InputGroup>
                <label>Nome no cartão</label>
                <input
                  id="cardDisplayName"
                  type="text"
                  value={form.values.cardDisplayName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError('cardDisplayName') ? 'error' : ''
                  }
                />
              </S.InputGroup>
              <S.Column>
                <S.InputGroup>
                  <label>Número do cartão</label>
                  <input
                    id="cardNumber"
                    type="text"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label>CVV</label>
                  <input
                    id="cardCode"
                    type="text"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardCode') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Column>
              <S.Column>
                <S.InputGroup>
                  <label>Mês de vencimento</label>
                  <input
                    id="expiresMonth"
                    type="text"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('expiresMonth') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label>Ano de vencimento</label>
                  <input
                    id="expiresYear"
                    type="text"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('expiresYear') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Column>
            </S.Row>
            <S.RedirectContainer>
              <Button
                type="submit"
                title="Clique aqui para continuar com o pagamento"
                full
                onClick={form.handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? 'Finalizando pagamento...' : 'Finalizar pagamento'}
              </Button>
              <Button
                type="button"
                title="Clique aqui para voltar ao carrinho"
                full
                onClick={backToPayment}
              >
                Voltar para a edição de endereço
              </Button>
            </S.RedirectContainer>
          </S.Payment>
        </form>
      )}
    </S.Container>
  )
}

export default Payment
