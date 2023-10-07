import {
  Hero,
  Popular,
  SuperQuality,
  Service,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer

} from './sections'
import Nav from './components/Nav'

export default function App() {
  return (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b">
        < Hero/>
      </section>
      <section className="padding">
        <Popular/> 
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding-x padding-y">
        <Service/>
      </section>
      <section className="padding-x padding-y">
        <SpecialOffer/>
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
  )
}