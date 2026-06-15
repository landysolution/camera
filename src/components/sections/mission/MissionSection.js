"use client";

import React from "react";

const Section = ({ index, title, children }) => (
  <section className="mb-10">
    <div className="flex items-baseline gap-3 border-b border-border pb-3">
      {index && (
        <span className="text-sm font-medium tabular-nums text-muted-foreground">
          {index}
        </span>
      )}
      <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">
        {title}
      </h3>
    </div>

    <div className="mt-4 text-sm leading-relaxed text-muted-foreground space-y-2">
      {children}
    </div>
  </section>
);

export default function MissionPageModern() {
  return (
    <main className="w-full bg-background py-20" id="mission">
      <div className="mx-auto max-w-5xl px-4">

        {/* HEADER */}
        <div className="mb-12 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Байгууллага
          </span>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Эрхэм зорилго
          </h1>

          <p className="mt-3 text-sm text-muted-foreground max-w-2xl mx-auto">
            Байгууллагын үндсэн эрхэм зорилго, зорилт
          </p>
        </div>

        {/* CARD WRAPPER */}
        <div className="rounded-lg border border-border bg-card p-6 sm:p-8">

          {/* MISSION */}
          <Section index="I" title="Манай эрхэм зорилго">
            <p>
              Нийтийн аюулгүй байдлыг хангах, гэмт хэрэг, зөрчлийг илрүүлэх,
              урьдчилан сэргийлэх, замын хөдөлгөөний хяналтыг сайжруулах,
              иргэдийн амь нас, эрүүл мэнд, эд хөрөнгийг хамгаалах зорилгоор
              орчин үеийн дэвшилтэт технологи бүхий теле хяналтын системийг
              үр ашигтай ажиллуулах, мэдээллийн найдвартай байдлыг хангах,
              холбогдох байгууллагуудтай хамтран ажиллах замаар нийгмийн амар
              тайван, аюулгүй орчныг бүрдүүлэхэд хувь нэмэр оруулах.
            </p>
          </Section>

          {/* DIRECTIONS */}
          <Section index="II" title="Үндсэн чиглэлүүд">

            <div className="space-y-4">

              <div>
                <p className="font-medium text-foreground">Нийтийн аюулгүй байдал</p>
                <p>Нийтийн аюулгүй байдлыг хангах</p>
              </div>

              <div>
                <p className="font-medium text-foreground">Илрүүлэлт ба урьдчилан сэргийлэлт</p>
                <p>Гэмт хэрэг, зөрчлийг илрүүлэх, урьдчилан сэргийлэх</p>
              </div>

              <div>
                <p className="font-medium text-foreground">Замын хөдөлгөөний хяналт</p>
                <p>Замын хөдөлгөөний хяналтыг сайжруулах</p>
              </div>

              <div>
                <p className="font-medium text-foreground">Иргэдийг хамгаалах</p>
                <p>Иргэдийн амь нас, эрүүл мэнд, эд хөрөнгийг хамгаалах</p>
              </div>

              <div>
                <p className="font-medium text-foreground">Технологи</p>
                <p>Дэвшилтэт технологи бүхий теле хяналтын системийг үр ашигтай ажиллуулах</p>
              </div>

              <div>
                <p className="font-medium text-foreground">Мэдээллийн найдвартай байдал</p>
                <p>Мэдээллийн найдвартай байдлыг хангах</p>
              </div>

              <div>
                <p className="font-medium text-foreground">Хамтын ажиллагаа</p>
                <p>Холбогдох байгууллагуудтай хамтран ажиллах</p>
              </div>

            </div>
          </Section>

          {/* VISION */}
          <Section index="III" title="Алсын хараа">
            <p>
              Орчин үеийн технологийн тусламжтайгаар иргэдийн амьдралыг аюулгүй,
              найдвартай болгож, нийгмийн хөгжилд чухал хувь нэмэр оруулах
              тэргүүлэх байгууллага болох.
            </p>
          </Section>

          {/* VALUES */}
          <Section index="IV" title="Үнэт зүйлс">
            <ul className="list-disc pl-5 space-y-2">
              <li>Ил тод, хариуцлагатай байдал</li>
              <li>Мэргэжлийн өндөр түвшин</li>
              <li>Иргэний нууцыг хамгаалах</li>
              <li>Байгууллага хоорондын хамтын ажиллагаа</li>
            </ul>
          </Section>

        </div>
      </div>
    </main>
  );
}