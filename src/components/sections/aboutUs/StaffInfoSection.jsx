"use client";

import { Mail, Phone, Users, Building2, Clock } from "lucide-react";

const stats = [
  {
    label: "Нийт ажилтан",
    value: "12",
    icon: Users,
  },
  {
    label: "Албан хэлтэс",
    value: "5",
    icon: Building2,
  },
  {
    label: "Холбоо барих",
    value: "24/7",
    icon: Clock,
  },
];

const staffGroups = [
  {
    group: "Удирдлага",
    people: [
      {
        id: 1,
        name: "Сосорбарамын Энхтайван",
        position: "Дарга",
        phone: "96441416",
        email: "enkhtaivanenkhtaivan07@gmail.com",
      },
    ],
  },
  {
    group: "Захиргаа, санхүү",
    people: [
      {
        id: 2,
        name: "Батнэрэнгийн Болор",
        position: "Захиргаа, хүний нөөцийн ахлах мэргэжилтэн",
        phone: "80089213",
        email: "bnbolor@gmail.com",
      },
      {
        id: 3,
        name: "Шарбаатарын Дуламсүрэн",
        position: "Ерөнхий нягтлан бодогч",
        phone: "91914914",
        email: "sh.duka4915@yahoo.com",
      },
      {
        id: 6,
        name: "Тулгажавын Дуламжав",
        position: "Архив, бичиг хэргийн ажилтан",
        phone: "99187197",
        email: "duuya.tulgajaw1005@gmail.com",
      },
      {
        id: 7,
        name: "Буджаргалын Баттуяа",
        position: "Үйлчлэгч",
        phone: "89284433",
        email: "battuya1111@gmail.com",
      },
    ],
  },
  {
    group: "Мэдээлэл, лавлагаа",
    people: [
      {
        id: 4,
        name: "Баянжавын Одгэрэл",
        position: "Мэдээлэл, лавлагааны ажилтан / Нууцын ажилтан",
        phone: "89139048",
        email: "bayanjawodgerel@gmail.com",
      },
      {
        id: 5,
        name: "Ганболдын Идэрсайхан",
        position: "Мэдээлэл, лавлагааны ажилтан",
        phone: "91000925",
        email: "ideree1330@gmail.com",
      },
    ],
  },
  {
    group: "Техникийн алба",
    people: [
      {
        id: 8,
        name: "Өнөрсайханы Ууганбаяр",
        position: "Сүлжээний инженер",
        phone: "80116374",
        email: "uugaa158@gmail.com",
      },
      {
        id: 9,
        name: "Түвшинжаргалын Давид",
        position: "Системийн инженер / Программ хангамжийн инженер",
        phone: "80453001",
        email: "tdavid0522@gmail.com",
      },
      {
        id: 10,
        name: "Цогтбаярын Мөнгөнцоож",
        position: "Сүлжээний техникч",
        phone: "88082269",
        email: "tsogtbayrmongontsooj@gmail.com",
      },
      {
        id: 11,
        name: "Мөнххуяггийн Баттөр",
        position: "Сүлжээний техникч",
        phone: "80781027",
        email: "monhhuygbattur@gmail.com",
      },
    ],
  },
  {
    group: "Бусад",
    people: [
      {
        id: 12,
        name: "Батжаргалын Эрдэнэбат",
        position: "Жолооч",
        phone: "89057000",
        email: "erdenebate280@gmail.com",
      },
    ],
  },
];

function StaffCard({ person }) {
  const initials = person.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.07]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
        

          <div>
            <h3 className="text-base font-semibold leading-6 text-slate-950 dark:text-slate-50">
              {person.name}
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {person.position}
            </p>
          </div>
        </div>

        {/* <span className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-500 dark:border-white/10 dark:text-slate-400">
          #{person.id}
        </span> */}
      </div>

      <div className="mt-5 space-y-2">
        <a
          href={`tel:${person.phone}`}
          className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:bg-white/[0.08]"
        >
          <Phone className="h-4 w-4 shrink-0 text-slate-400" />
          <span>{person.phone}</span>
        </a>

        <a
          href={`mailto:${person.email}`}
          className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:bg-white/[0.08]"
        >
          <Mail className="h-4 w-4 shrink-0 text-slate-400" />
          <span className="truncate">{person.email}</span>
        </a>
      </div>
    </article>
  );
}

export default function StaffInfoSection() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8" id="staff">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Албан хаагчдын мэдээлэл
          </h2>

          <p className="mt-4 text-muted-foreground">
            Байгууллагын албан хаагчдын овог нэр, албан тушаал, холбоо барих
            мэдээлэл.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-3xl font-bold text-slate-950 dark:text-slate-50">
                      {stat.value}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 dark:bg-white/10">
                    <Icon className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 space-y-12">
          {staffGroups.map((group) => (
            <div key={group.group}>
              <div className="mb-5 flex items-center gap-4">
                <h3 className="whitespace-nowrap text-xl font-bold text-foreground">
                  {group.group}
                </h3>
                <div className="h-px flex-1 bg-border" />
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  {group.people.length} хүн
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {group.people.map((person) => (
                  <StaffCard key={person.id} person={person} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}