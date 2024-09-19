import * as S from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  full?: boolean
  children: React.ReactNode
  disabled?: boolean
}

const Button = ({
  type,
  title,
  to,
  onClick,
  full,
  children,
  disabled
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.ButtonContainer
        type={type}
        title={title}
        onClick={onClick}
        full={full}
        disabled={disabled}
      >
        {children}
      </S.ButtonContainer>
    )
  }

  return (
    <S.ButtonLink to={to as string} title={title} onClick={onClick}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
