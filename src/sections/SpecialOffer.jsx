import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img src={offer} alt="offer " width={773} height={687} className="object-containss w-full"/>

      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitilize font-bold lg:max-w-lg">
          <span className="text-coral-red "> Special</span>
          <span className="text-coral-red "> Offer </span> 
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Embark on a shopping journey that redefines your experiencewith unbeatable deals.from premier selections to incredible saving, we offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
        Navigate a relam of possibilites designed to fulfill your unique desire, surpassing the loftiest expectations.Your jiurney with us is nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
        <Button label="Shop Now" iconURL={arrowRight }/>  
        {/* <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />   */}
        <Button label="Learn More" />  
       
        </div>
        </div>
    </section>
  )
}

export default SpecialOffer