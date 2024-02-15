import {
  LogoHome,
  TitleHome,
  DescriptionHome,
  JustHome,
  HeroHome
} from './hero-sector.styles'

const HeroSector = ({
  title,
  description
}: {
  title: string
  description: string
}) => (
  <HeroHome>
    <LogoHome
      src="/img/logo.svg"
      alt="Image with curly brackets in magenta with the text React Next Boilerplate"
    />
    <TitleHome>{title}</TitleHome>
    <DescriptionHome>{description}</DescriptionHome>
    <JustHome>just run</JustHome>
  </HeroHome>
)

export default HeroSector
