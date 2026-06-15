"use client";

import {
  ShieldCheck,
  Search,
  Car,
  Siren,
  Building2,
  BarChart3,
  Megaphone,
} from "lucide-react";
import { motion } from "motion/react";
import SpotlightCard from "@/components/SpotlightCard";

const features = [
  {
    title: "Нийтийн аюулгүй байдлыг хангах",
    icon: ShieldCheck,
    description:
      "Гудамж, зам талбай, олон нийтийн газруудад гэмт хэрэг, зөрчлийг хянах, иргэдийн аюулгүй байдлыг хамгаалах.",
  },
  {
    title: "Гэмт хэрэг, зөрчлөөс урьдчилан сэргийлэх",
    icon: Search,
    description:
      "Камерын тусламжтайгаар гэмт хэрэг, зөрчлийг илрүүлэх, баримтжуулах, таслан зогсооход дэмжлэг үзүүлэх.",
  },
  {
    title: "Замын хөдөлгөөний хяналт",
    icon: Car,
    description:
      "Замын хөдөлгөөний зөрчил, түгжрэл, хөдөлгөөний урсгалыг хянах, ослоос урьдчилан сэргийлэх.",
  },
  {
    title: "Онцгой байдлын хяналт",
    icon: Siren,
    description:
      "Гал түймэр, үер, газар хөдлөлт зэрэг нөхцөл байдлын үед шуурхай хяналт, зохицуулалтад дэмжлэг үзүүлэх.",
  },
  {
    title: "Объектуудын хамгаалалт",
    icon: Building2,
    description:
      "Стратегийн болон онц чухал объектуудын аюулгүй байдлыг хангах, дотоод болон гадаад хяналтыг хэрэгжүүлэх.",
  },
  {
    title: "Мэдээлэл, дүн шинжилгээ",
    icon: BarChart3,
    description:
      "Камерын бичлэгээс мэдээлэл цуглуулах, хандлага, давтамжийг тодорхойлох.",
  },
  {
    title: "Иргэдэд мэдээлэл хүргэх",
    icon: Megaphone,
    description:
      "Аюулгүй байдлын мэдээлэл түгээх, камерын хяналтын системийн ач холбогдлыг ойлгуулах.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
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

export default function FunctionsSection() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8" id="function">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Чиг үүрэг
          </h2>

          <p className="mt-4 text-muted-foreground">
            Камерын хяналтын системийн үндсэн зорилго, чиг үүргийн танилцуулга.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  scale: 1.015,
                  transition: { duration: 0.2 },
                }}
              >
                <SpotlightCard
                  className="custom-spotlight-card h-full rounded-[1.75rem] p-8"
                  spotlightColor="rgba(255, 255, 255, 0.25)"
                >
                  <motion.div
                    whileHover={{ rotate: -4, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10"
                  >
                    <Icon className="h-6 w-6 text-primary" />
                  </motion.div>

                  <h3 className="text-lg font-semibold text-slate-900 dark:text-foreground">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-muted-foreground">
                    {feature.description}
                  </p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          className="mt-6 rounded-2xl border bg-muted/40 p-6"
        >
          <h3 className="text-lg font-semibold text-foreground">Тайлбар</h3>

          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Камерын хяналтын систем нь нийтийн аюулгүй байдал, гэмт хэрэг,
            зөрчлөөс урьдчилан сэргийлэх, замын хөдөлгөөний зохицуулалт,
            онцгой нөхцөл байдлын үед шуурхай хяналт, мэдээллийн дэмжлэг
            үзүүлэх үндсэн чиг үүргийг хэрэгжүүлнэ.
          </p>
        </motion.div>
      </div>
    </section>
  );
}