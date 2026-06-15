"use client";

import { motion } from "motion/react";

const structure = [
  {
    title: "Удирдлага",
    description: "Байгууллагын үйл ажиллагааг удирдан зохион байгуулах.",
    roles: ["Дарга"],
  },
  {
    title: "Захиргаа, санхүүгийн хэлтэс",
    description: "Захиргаа, санхүү, хүний нөөцийн өдөр тутмын үйл ажиллагаа.",
    roles: [
      "Захиргаа аж ахуй, хүний нөөцийн мэргэжилтэн",
      "Мэдээлэл лавлагааны ажилтан - 2",
      "Харилцагч хариуцсан ажилтан",
      "Ерөнхий нягтлан бодогч",
      "Нярав",
      "Үйлчлэгч",
    ],
  },
  {
    title: "Инженер, техникийн хэлтэс",
    description: "Сүлжээ, систем, техник тоног төхөөрөмжийн хэвийн ажиллагаа.",
    roles: [
      "Сүлжээний инженер",
      "Сүлжээний техникч - 2",
      "Цахилгаанчин",
      "Жолооч",
      "Системийн инженер",
      "Хөдөлмөрийн аюулгүй байдал хариуцсан мэргэжилтэн",
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const roleVariants = {
  hidden: {
    opacity: 0,
    x: -12,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

export default function StructureSection() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8" id="Бүтэц">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Бүтэц
          </h2>

          <p className="mt-4 text-muted-foreground">
            Байгууллагын бүтэц, орон тооны зохион байгуулалтын мэдээлэл.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-4 lg:grid-cols-3"
        >
          {structure.map((group) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.015,
                transition: { duration: 0.2 },
              }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md dark:border-border dark:bg-card"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-foreground">
                {group.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-muted-foreground">
                {group.description}
              </p>

              <motion.div
                variants={containerVariants}
                className="mt-6 space-y-2"
              >
                {group.roles.map((role) => (
                  <motion.div
                    key={role}
                    variants={roleVariants}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium leading-6 text-slate-700 transition hover:border-slate-300 hover:bg-white dark:border-border dark:bg-background dark:text-muted-foreground dark:hover:bg-muted/40"
                  >
                    {role}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-border dark:bg-card"
        >
          <h3 className="text-lg font-semibold text-slate-900 dark:text-foreground">
            Тайлбар
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-muted-foreground">
            Энэхүү бүтэц нь байгууллагын удирдлага, захиргаа санхүү болон
            инженер техникийн чиг үүргийг тус тусад нь зохион байгуулж,
            камерын хяналтын системийн хэвийн үйл ажиллагааг хангана.
          </p>
        </motion.div>
      </div>
    </section>
  );
}