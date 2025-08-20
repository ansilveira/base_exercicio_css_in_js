import styled from 'styled-components'

const CabecalhoContainer = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`

const Titulo = styled.h1`
  font-size: 24px;
`

const Cabecalho = () => {
  return (
    <CabecalhoContainer>
      <Titulo>EBAC Jobs</Titulo>
    </CabecalhoContainer>
  )
}

export default Cabecalho
