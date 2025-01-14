'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactElement, useContext, useEffect, useRef } from 'react';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import { ScrollContext } from './Providers/ScrollProvider';
import { renderCanvas } from './renderCanvas';

export default function Hero(): ReactElement {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <div className="main-bg">
      <h1 className="sr-only">
        Hello I'm Aram Next, I'm a software developer, and I love building things for the web.
      </h1>
      <div className="relative z-10 flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-116px)]">
        <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
          <div className="-mt-36">
            <div ref={ref} className="flex cursor-default flex-col space-y-2">
              <h1 className="text-6xl font-semibold sm:text-9xl md:text-5xl xl:text-8xl">
              ТЕЛЕГРАММ КОРМИТ<br />
              </h1>
              <h1 className="text-3xl font-semibold sm:text-4xl md:text-2xl xl:text-4xl">
              ТВОЙ ОНЛАЙН БИЗНЕС ПРЯМО У ТКБЯ В КАРМАНЕ
              </h1>
              <h2 className="text-xl font-medium opacity-80 sm:text-3xl md:text-3xl xl:text-3.5xl">
                АВТОРСКАЯ ОБУЧАЮЩАЯ ПРОГРАММА<br />
                АРАММА КАЗАРЯНА
              </h2>
              <Link
                href="/about"
                className="underline-magical text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-2xl"
              >
                a &rarr;
              </Link>
            </div>
            <motion.div
              animate={{
                transform: `translateY(${progress * 10}vh)`,
              }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 transform md:bottom-8"
            >
              <div
                role="presentation"
                className="flex cursor-pointer flex-col items-center justify-center"
                onClick={() => {
                  const intro = document.querySelector('#intro');

                  intro?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <HiOutlineArrowNarrowDown size={20} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>
    </div>
  );
}
