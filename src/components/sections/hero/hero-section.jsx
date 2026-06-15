"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "@/components/layout/Header";
import Herocarousel from "./hero-carousel";
import HeroCoverflow from "./hero-carousel";
import TrueFocus from "@/components/TrueFocus";
export default function HeroSection() {
  const [visible, setVisible] = useState(true);

  // useEffect(() => {
  //   let lastScrollY = window.scrollY;

  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     if (currentScrollY < 50) {
  //       setVisible(true);
  //     } else {
  //       setVisible(currentScrollY < lastScrollY);
  //     }

  //     lastScrollY = currentScrollY;
  //   };

  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);


  return (
    <>
   
        <HeroHeader />
  
      <main className="min-h-screen overflow-x-hidden">
        <section className="relative">
          <div className="px-4 pb-16 pt-10 sm:px-6 md:pb-24 lg:pb-32 lg:pt-32">
            <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
              {/* Text */}
              <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
                {/* <h1 className="text-balance text-4xl font-medium leading-tight sm:text-5xl md:text-6xl xl:text-7xl"> */}
                {/* Камерын хяналт */}
                <div className="w-fit">
                  <TrueFocus
                    sentence="Камерын хяналт"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="#ff2727"
                    animationDuration={0.5}
                    pauseBetweenAnimations={1}
                  />
                </div>
                {/* </h1> */}


                <p className="mx-auto mt-6 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg lg:mx-0">
                  {/* Орчин үеийн дэвшилтэт технологид суурилсан хяналтын системийг хөгжүүлэх, шинэчлэх */}
                  ЧИНГЭЛТЭЙ ДҮҮРГИЙН ТЕЛЕ КАМЕРЫН ХЯНАЛТЫН ДЭД ТӨВ
                </p>

                <div className="mt-16 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="w-full px-5 text-base sm:w-auto"
                    onClick={() => {
                      document.getElementById("district-graph")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}>

                    <span className="text-nowrap">Камерын гаралт</span>

                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="ghost"
                    className="w-full px-5 text-base sm:w-auto"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Request a demo</span>
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Carousel */}
              <div className="relative flex min-h-[320px] w-full items-center justify-center overflow-hidden sm:min-h-[420px] lg:min-h-[520px]">
                <HeroCoverflow />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
