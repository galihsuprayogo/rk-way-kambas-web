import { useState } from 'react'

const Section = () => {
  const [sectionTextOne, setSectionTextOne] = useState<Array<{ text: string }>>([
    {
      text: 'SMOKE billowed up at the southeast end of the Rawa Kadut reforestation camp at Way Kambas National Park in Lampung, August 9. It was 9am. Fajar Sandhika, reforestation coordinator at the Silvagama Foundation, and his colleague Arum Mutasim moved quickly to check out the source of the blaze. Hopping on a motorbike, they sped down a trail through dense foliage.',
    },
    {
      text: 'At the location, they assessed that the fire was heading west and would probably pass a spot across the Kadut river behind the camp. Since the wind was not blowing hard, they estimated the fire would reach it after 12pm. Fajar and Arum raced back to the camp.',
    },
    {
      text: '“When we reached camp, we were quickly assigned tasks,” Fajar told Tempoat Rawa Kadut two weeks ago. Three colleagues tried to break the fire’s path at the logistics road. Fajar and Arum had to go to Bungur, the closest neighborhood, to get more help and to coordinate with the Bungur Park management.',
    },
    {
      text: 'Later, Fajar and Arum again sped off on the motorbike down a 12-kilometer, wind- ing path through tall grass and another kilometer through dense forest. Before reaching Bungur, they had to cross the Sukadana river on a wooden raft and travel along a levee. In Bungur, they managed to recruit three people willing to help',
    },
  ])

  const [sectionTextTwo, setSectionTextTwo] = useState<Array<{ text: string }>>([
    {
      text: 'ON the way back, they saw that the fire was some four kilometers from the Mataram camp belonging to AleRT, the Integrated Forest Conservation Alliance. This meant that in less than three hours, the fire had spread seven kilometers from the spot they had first seen.',
    },
    {
      text: 'The team fought the fire with water pumps and branches cut from trees. The fire was finally out by 5:15pm. They also succeeded in putting out a fire on 2.5 hectares of reforestation area. Exhausted, when they got back at around 8:45pm, another fire was spotted east of the camp. The team went right back to work, extinguishing the fire some 45 minutes later.',
    },
  ])

  return (
    <div className='my-10 flex w-full flex-col items-center justify-center bg-white px-10 md:px-0'>
      {/* section one */}
      <div className='flex w-full flex-col space-y-3 border-b-[0.12rem] border-b-black pb-4 md:w-[80%] lg:w-[60%]'>
        <span className='text-lg font-semibold text-black'>Disalin sepenuhnya dari:</span>
        <span className='text-lg font-normal tracking-normal text-black'>
          Diterbitkan Majalah Tempo edisi 3 Januari 2016. Ditulis ulang sebagaimana aslinya.
        </span>
      </div>
      <div className='my-10 flex w-full flex-col space-y-5 md:w-[60%] lg:w-[38%]'>
        {sectionTextOne.map((item, index) => (
          <span key={index} className='text-lg font-normal leading-8 tracking-wide text-black'>
            {item.text}
          </span>
        ))}
      </div>
      {/* section two */}
      <div className='my-10 flex w-full flex-col space-y-6 md:w-[80%] lg:w-[45%]'>
        <span className='text-2xl font-bold leading-10 text-black'>
          {`“Fajar and his team were a great help. When a fire broke out somewhere, we got our first information from them. The replanting they did and their sharp monitoring of the area where they worked was a big boon for reforestation at Way Kambas.”`}
        </span>
        <div className='flex flex-col space-y-1'>
          <span className='text-lg font-bold text-black'>Suharno</span>
          <span className='text-base font-semibold tracking-normal text-black'>
            Junior Superintendent of the Forest Police, Firefighting Coordinator for Way Kambas
            National Park
          </span>
        </div>
      </div>
      <div className='my-10 flex w-full flex-col space-y-10 md:w-[60%] lg:w-[38%]'>
        {sectionTextTwo.map((item, index) => (
          <span key={index} className='text-lg font-medium leading-8 text-black'>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Section
