import React from 'react'
import cars from '../../assets/cars.jpg'
import gasolina from '../../assets/gasolina.jpg'
import forest from '../../assets/forest.jpg'
import burningForest from '../../assets/burning.jpg'
const CarbonAbsorbed = () => {
  return (
    <div className=" pt-44 bg-white dark:bg-light-dark">
      <div className="md:container mx-auto">
        <div className="font-semibold flex flex-col mx-auto mb-14">
          <span className="text-4xl text-dark-grey ">
            EXPECTED <br></br>
            TONS OF{' '}
            <font className="text-black dark:text-white">
              CARBON TO BE ABSORBED
            </font>{' '}
            BY AirDAO
          </span>
          <span className="text-5xl md:text-7xl mt-4 dark:text-white text-black font-bold">
            17,308,240
          </span>
        </div>
        <div className="flex flex-col pb-32">
          <span className="mb-4 text-xl font-bold dark:text-white">
            EQUIVALENT TO
          </span>
          <div className="flex pb-4 gap-y-32 gap-x-4 justify-center mx-auto flex-wrap">
            <div className="flex w-72 h-48 flex-col ">
              <img className="w-full h-full rounded-t-lg" src={forest} alt="" />
              <div className="w-full h-full flex flex-col text-left bg-dark-white dark:bg-bg-dark rounded-b-lg py-5 px-7">
                <span className="text-base text-grey dark:text-dark-white">
                  HECTARES OF FOREST
                </span>
                <span className="text-3xl text-black dark:text-white">
                  86,541
                </span>
              </div>
            </div>
            <div className="flex w-72 h-48 flex-col ">
              <img className="w-full h-full rounded-t-lg" src={cars} alt="" />
              <div className="w-full h-full flex flex-col text-left bg-dark-white dark:bg-bg-dark rounded-b-lg py-5 px-7">
                <span className="text-base text-grey dark:text-dark-white ">
                  CARS (ANNUAL)
                </span>
                <span className="text-3xl text-black dark:text-white">
                  86,541
                </span>
              </div>
            </div>
            <div className="flex w-72 h-48  flex-col ">
              <img
                className="w-full h-full rounded-t-lg"
                src={gasolina}
                alt=""
              />
              <div className="w-full h-full flex flex-col text-left bg-dark-white dark:bg-bg-dark rounded-b-lg py-5 px-7">
                <span className="text-base text-grey dark:text-dark-white">
                  LITERS OF GASOLINE
                </span>
                <span className="text-3xl text-black dark:text-white">
                  86,541
                </span>
              </div>
            </div>
          </div>
          <a
            href="https://www.epa.gov/energy/greenhouse-gases-equivalencies-calculator-calculations-and-references"
            target="_blank"
            className="text-base leading-5 underline mt-24 font-medium text-dark-grey"
          >
            Source
          </a>
        </div>
      </div>
      <div className="relative" style={{ height: '720px' }}>
        <img className="w-full h-full" src={burningForest} alt="" />
        <span className="absolute bottom-16 text-7xl text-right font-bold right-1/4 container mx-auto text-white">
          IT'S <br /> TIME <br /> TO ACT.
        </span>
      </div>
    </div>
  )
}

export default CarbonAbsorbed
