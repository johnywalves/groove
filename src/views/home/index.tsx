import Footer from 'views/home/component/footer'

import manifest from '../../../public/manifest.json'

import HeroSector from './component/hero-sector'

const Home = ({
  title = manifest.name,
  description = manifest.description
}) => (
  <>
    <HeroSector title={title} description={description} />
    <Footer />
  </>
)

export default Home
