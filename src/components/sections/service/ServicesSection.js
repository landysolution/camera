"use client";

import React from "react";

const services = [
  {
    title: "Үйлчилгээ 1",
    description:
      "Нийтийн эзэмшлийн гудамж, зам талбайд суурилуулсан теле камеруудыг нэгтгэх, хяналт тавих, бичлэг хадгалах, гэмт хэрэг, зөрчлөөс урьдчилан сэргийлэх, илрүүлэх, авто замын хөдөлгөөний зохицуулалт хийх, төрийн байгууллагуудад шаардлагатай дүрс бичлэгийг харуулах, нэгдсэн удирдлага зохицуулалт хийх, төрийн албадыг мэдээ, мэдээллээр хангах.",
  },
  {
    title: "Үйлчилгээ 2",
    description:
      "Дүүргийн нутаг дэвсгэрийн нийтийн эзэмшлийн гудамж, зам талбайг камержуулах, суурилуулсан теле камеруудыг нэгтгэх, камеруудын хамгаалалт, арчлалт, засвар үйлчилгээг хариуцан, хэвийн ажиллагааг хангах.",
  },
  {
    title: "Үйлчилгээ 3",
    description:
      "Теле камерын дүрст мэдээллийг ажиглах, боловсруулах.",
  },
  {
    title: "Үйлчилгээ 4",
    description:
      "Гэмт хэрэг, зөрчлөөс урьдчилан сэргийлэх, илрүүлэх төрийн тусгайлсан чиг үүрэг бүхий байгууллагуудад шаардлагатай дүрс бичлэгийг харуулах, нэгдсэн удирдлага зохицуулалт хийх, холбогдох байгууллагыг шаардлагатай мэдээллээр хангах.",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-background py-20" id="service">
      <div className="mx-auto max-w-5xl px-4">

        {/* HEADER */}
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Үйлчилгээ
          </p>

          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-foreground">
            Үйлчилгээний төрөл
          </h2>

          <p className="mt-2 text-sm text-muted-foreground max-w-2xl mx-auto">
            Байгууллагын хэрэгжүүлж буй үндсэн чиг үүрэг, үйлчилгээний мэдээлэл.
          </p>
        </div>

        {/* TABLE / REGISTRY */}
        <div className="rounded-lg border border-border bg-card overflow-hidden">

          {services.map((s, i) => (
            <div
              key={i}
              className="grid grid-cols-[90px_1fr] gap-6 border-b border-border p-5 last:border-none"
            >
              {/* index */}
              <div className="text-sm font-medium text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* content */}
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {s.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* FOOTNOTE */}
        <div className="mt-6 text-xs text-muted-foreground text-center">
          Үйлчилгээний мэдээлэл нь байгууллагын чиг үүргийн хүрээнд тогтмол шинэчлэгдэнэ.
        </div>

      </div>
    </section>
  );
}