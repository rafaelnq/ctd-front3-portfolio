import {MainLayout} from '../layouts/main-layout'
import {Banner} from '../components/banner'
import {Projects} from '../components/projects'
import {Contact} from '../components/contact'

function Home() {
  return (
    <MainLayout>
      <Banner />
      <Projects />
      <Contact />
    </MainLayout>
  )
}

export {Home}
