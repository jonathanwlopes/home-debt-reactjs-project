import * as S from "./styles"

export const HiddenLabel = ({id, children}) => {
   return (
       <S.Container for-id={id}>{children}</S.Container>
   )
}