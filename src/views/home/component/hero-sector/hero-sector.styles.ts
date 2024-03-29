import styled from 'styled-components'

export const HeroHome = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: var(--30px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const LogoHome = styled.img`
  width: min(var(--300px), 50%);
`

export const TitleHome = styled.h1`
  color: var(--color-primary-pure);
  font-size: 2rem;
  text-align: center;
`

export const DescriptionHome = styled.h2`
  font-size: 1.5rem;
  line-height: 140%;
  font-weight: 400;
  width: min(var(--720px), 80%);

  @media (max-width: 980px) {
    width: 100%;
  }
`

export const JustHome = styled.p`
  font-size: 1.5rem;
`
