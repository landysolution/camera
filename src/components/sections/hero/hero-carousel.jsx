
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useState } from "react";

const slides = [
  {
    title: "Hero 1",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg",
  },
  {
    title: "Hero 2",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random1.jpeg",
  },
  {
    title: "Hero 3",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random2.jpeg",
  },
  {
    title: "Hero 4",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random12.jpeg",
  },
  {
    title: "Hero 5",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random3.jpeg",
  },
  {
    title: "Hero 6",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random5.jpeg",
  },
];

export default function HeroCoverflow() {
  const [loadedImages, setLoadedImages] = useState({});
  return (
    <section className="w-full overflow-hidden py-16">
      <Swiper
        modules={[EffectCoverflow, Pagination, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 295,
          modifier: 1,
          slideShadows: true,
          scale: 1,
        }}
        className="mySwiperHero231"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="!w-[278px]">
            <div className="relative h-[500px] w-full overflow-hidden rounded-3xl shadow-lg">

              {!loadedImages[index] && (
                <div className="absolute inset-0 animate-pulse bg-muted" />
              )}

              <Image
                src={slide.src}
                alt={slide.title}
                fill
                sizes="278px"
                className={`object-cover transition-opacity duration-500 ${loadedImages[index] ? "opacity-100" : "opacity-0"
                  }`}
                onLoad={() =>
                  setLoadedImages((prev) => ({
                    ...prev,
                    [index]: true,
                  }))
                }
              />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
