import { useEffect, useState } from "react";
import { ColorSwatchIcon } from '@heroicons/react/solid';
import img from '../images/static-website.svg';
import multimediaImg from '../images/multimedia.svg';
import workImg from '../images/work.svg';


export default function Home() {
  const headingWords = [
    "Client Work",
    "Side Project",
    "Coding Bootcamp"
  ];
  const [headingWordIndex, setHeadingWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      let nextIndex = 0;
      let currentWordIndex = headingWords.indexOf(headingWords[headingWordIndex]);
      if(currentWordIndex < headingWords.length - 1) {
        nextIndex = currentWordIndex + 1;
      } else {
        nextIndex = 0;
      }
      setHeadingWordIndex(nextIndex)
    }, 3000);
              
    return () => clearInterval(timer);
  })

  return (
    <div>
      <div className="mt-4 md:max-w-xl lg:max-w-3xl xl:max-w-5xl md:mx-auto">
        <div className="flex mx-4 md:mx-0 text-purple-700">
          <ColorSwatchIcon className="h-6 w-6 text-left"></ColorSwatchIcon>
          <p className="ml-2 text-xl font-semibold text-gray-700">UI Elements</p>
        </div>
        <div className="flex flex-col xl:mt-10 xl:mb-32 md:flex-row items-center justify-center">
          <section className="flex mt-16 md:w-1/2">
            <div>
              <h1 className="font-bold text-3xl lg:text-4xl xl:text-5xl text-gray-900">Design inspiration <br/> for your next <br/> <span className="text-purple-600 transition delay-100">{headingWords[headingWordIndex]}</span></h1>
              <h2 className="mt-8 text-base xl:text-lg text-left text-gray-700">
                A gallery of common UI elements <br/> to help you with your next endeavour.
              </h2>
              <a href="/home" className="block text-center cursor-pointer mt-10 p-2 font-bold tracking-wider rounded-lg bg-purple-600 shadow-md hover:bg-purple-700 transition delay-100 text-white w-full">
                Browse
              </a>
            </div>
          </section>
          <img className="mt-8 w-full md:mt-0 md:w-1/2" src={img}></img>
        </div>
        <div className="flex flex-col-reverse md:mt-12 md:flex-row bg-gray-100 md:bg-white items-center justify-center">
          <img className="w-full md:w-1/2" src={multimediaImg}></img>
          <section className="mt-16 md:w-1/2 px-4">
            <h3 className="text-gray-700 text-lg text-center lg:text-xl">
              UI Elements is a collection of commonly used web elements. Get inspired and create your own unique designs.
            </h3>
          </section>
        </div>
        <div className="flex flex-col-reverse mt-12 md:flex-row items-center justify-center">
          <section className="mt-12 md:w-1/2 px-4">
            <h3 className="text-gray-700 text-base text-center lg:text-xl">
              I have just started off with this project. I will be adding more elements in the future.
            </h3>
          </section>
          <img className="w-1/2 h-full md:h-80 xl:h-80 md:w-1/2" src={workImg}></img>
        </div>
      </div>
      <div className="mt-12 px-8 py-4 bg-gray-800 text-gray-400 text-center md:text-right text-xs">
        <h4 className="text-gray-50 text-sm">Attribution</h4>
        <a className="underline" href="https://2.flexiple.com/scale/multi-color-illustrations">Illustrations by Flexiple Scale</a><br/>
        <a className="underline" href="https://storyset.com/work">Work illustration by Storyset</a>
      </div>
    </div>
  )
}
