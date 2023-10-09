import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"
import { Service } from "."
const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((Service)=>(
        <ServiceCard key={Service.label} { ...Service}/>
      ))}
    </section>
  )
}

export default Services