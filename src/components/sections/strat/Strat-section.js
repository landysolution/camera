"use client";

import React from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */

const directions = [
  "Орчин үеийн дэвшилтэт технологид суурилсан хяналтын системийг хөгжүүлэх, шинэчлэх",
  "Мэдээллийн аюулгүй байдал, нууцлалыг хангах",
  "Хяналтын төвийн хүний нөөцийг чадавхжуулах, мэргэшүүлэх",
  "Хамтын ажиллагааг өргөжүүлэх (цагдаа, онцгой байдал, хот тохижилт, замын хөдөлгөөний удирдлагын төв зэрэг байгууллагуудтай)",
  "Иргэдийн итгэл, оролцоог нэмэгдүүлэх",
];

const goals = [
  {
    icon: require("lucide-react").ShieldCheck,
    text: "Нийслэл болон орон нутгийн нутаг дэвсгэрт аюулгүй байдлыг хангах",
  },
  {
    icon: require("lucide-react").ShieldAlert,
    text: "Гэмт хэрэг, зөрчлийг илрүүлэх, урьдчилан сэргийлэх",
  },
  {
    icon: require("lucide-react").TrafficCone,
    text: "Замын хөдөлгөөний зохицуулалт, хяналтыг сайжруулах",
  },
  {
    icon: require("lucide-react").Siren,
    text: "Онцгой байдал, гамшгийн үед шуурхай мэдээлэл дамжуулах, хариу арга хэмжээ авахад дэмжлэг үзүүлэх",
  },
];

const priorities = [
  {
    title: "Нийтийн аюулгүй байдлыг хангах",
    points: [
      "Гэмт хэрэг, зөрчлийг илрүүлэх, урьдчилан сэргийлэх",
      "Олон нийтийн газар, гудамж талбайн хяналтыг сайжруулах",
    ],
  },
  {
    title: "Замын хөдөлгөөний зохицуулалт ба хяналт",
    points: [
      "Замын хөдөлгөөний ачааллыг бууруулах",
      "Зам тээврийн ослоос урьдчилан сэргийлэх",
      "Зөрчил илрүүлэх, торгууль ногдуулах",
    ],
  },
  {
    title: "Онцгой байдал, гамшгийн үеийн хариу арга хэмжээ",
    points: [
      "Гамшгийн үед хяналт, мэдээлэл дамжуулалт",
      "Шуурхай удирдлага, зохион байгуулалтыг дэмжих",
    ],
  },
  {
    title: "Мэдээллийн технологийн дэвшлийг нэвтрүүлэх",
    points: [
      "Ухаалаг хяналтын систем нэвтрүүлэх",
      "Хиймэл оюун ухаан, дүрс таних технологийг ашиглах",
    ],
  },
  {
    title: "Хүний нөөцийн чадавхыг сайжруулах",
    points: [
      "Ажилтнуудын сургалт, мэргэшүүлэлтийг тогтмол зохион байгуулах",
      "Ёс зүй, хариуцлагыг дээшлүүлэх",
    ],
  },
  {
    title: "Олон нийттэй хамтран ажиллах, ил тод байдлыг хангах",
    points: [
      "Иргэдийн оролцоог нэмэгдүүлэх",
      "Мэдээллийн ил тод байдал, хүртээмжийг сайжруулах",
    ],
  },
  {
    title: "Мэдээллийн аюулгүй байдал, нууцлалыг хамгаалах",
    points: [
      "Хяналтын бичлэг, мэдээллийг хамгаалах",
      "Хувь хүний мэдээллийг хуулийн дагуу хамгаалах",
    ],
  },
];

const objectives = [
  "Камерын хяналтын сүлжээг өргөтгөх, шинэчлэх",
  "Видео хяналтын төвийн техник, программ хангамжийг шинэчлэх",
  "Ажилтнуудын мэргэшлийг дээшлүүлэх, давтан сургалт зохион байгуулах",
  "Хяналтын мэдээллийг холбогдох байгууллагуудтай шуурхай солилцох системийг боловсронгуй болгох",
  "Иргэдэд мэдээлэл түгээх, олон нийтийн оролцоог нэмэгдүүлэх",
  "Мэдээллийн нууцлал, аюулгүй байдлыг хангах журам, стандартыг мөрдөх",
  "Үйл ажиллагааны ил тод байдал, тайлагнал, хяналтыг сайжруулах",
];

const closing =
  "Дээрх стратегийн зорилго, зорилтууд нь байгууллагын урт хугацааны хөгжлийн үндэс суурь болох бөгөөд жил бүрийн үйл ажиллагааны төлөвлөгөөнд тусган хэрэгжүүлэгдэж байна. Үр дүнг тогтмол хянаж, үнэлж, шаардлагатай тохиолдолд засч боловсронгуй болгож байна.";

/* ------------------------------------------------------------------ */

function BlockHeader({ index, title }) {
  return (
    <div className="flex items-baseline gap-3 border-b pb-4">
      {index && (
        <span className="text-sm font-medium tabular-nums text-muted-foreground">
          {index}
        </span>
      )}
      <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">
        {title}
      </h3>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function StrategySection() {
  return (
    <section id="strategy" className="relative w-full overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Стратеги
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Үйл ажиллагааны стратегийн зорилго, зорилт
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Байгууллагын урт хугацааны стратегийн чиглэл, үндсэн зорилго,
            тэргүүлэх чиглэл, зорилтууд.
          </p>
        </div>

        <div className="mt-16 space-y-16 lg:mt-24 lg:space-y-24">

          {/* I */}
          <div>
            <BlockHeader index="I" title="Стратегийн чиглэл" />
            <ul className="mt-6 grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2">
              {directions.map((d, i) => (
                <li
                  key={i}
                  className={cn(
                    "bg-card p-5 text-sm leading-relaxed sm:text-base",
                    i === directions.length - 1 && "sm:col-span-2"
                  )}
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* II */}
          <div>
            <BlockHeader index="II" title="Үндсэн зорилго" />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {goals.map((g, i) => {
                const Icon = g.icon;
                return (
                  <div
                    key={i}
                    className="rounded-lg border bg-card p-6 hover:border-foreground/20"
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-md border bg-background">
                      <Icon className="h-5 w-5" />
                    </div>

                    <p className="mt-4 text-sm text-muted-foreground sm:text-base">
                      {g.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* III */}
          <div>
            <BlockHeader index="III" title="Зорилтууд" />
            <ol className="mt-6 grid gap-x-10 sm:grid-cols-2">
              {objectives.map((o, i) => (
                <li key={i} className="flex items-start gap-4 border-t py-4">
                  <span className="text-sm tabular-nums text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm sm:text-base">{o}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Footer */}
          <div className="rounded-lg border bg-card p-8 sm:p-10 text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Хэрэгжилт
            </span>
            <p className="mt-5 text-muted-foreground">{closing}</p>
          </div>

        </div>
      </div>
    </section>
  );
}