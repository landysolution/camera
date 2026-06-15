"use client";
import Link from "next/link";
import { Logo } from "../ui/logo";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import React from "react";
import { ModeToggle } from "../ui/modeToggle";
import { MenuItems } from "@/lib/navigation";

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const scroll = (child) => {
    console.log(child);

    document.getElementById(child)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })

  }



  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="bg-background/50 fixed z-20 w-full border-b backdrop-blur-3xl"
      >
        <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>

              <div className="hidden lg:block">
                {/* <ul className="flex gap-8 text-sm">
                  {MenuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul> */}
                <ul className="flex gap-8 text-sm">
                  {MenuItems.map((item) => (
                    <li key={item.name} className="group relative">
                      <button className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                        {item.name}
                      </button>

                      {item.children?.length > 0 && (
                        <div className="overflow-hidden invisible absolute top-full left-0 mt-2 min-w-[260px] rounded-xl border bg-background opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                          {item.children.map((child) => (
                            <div
                              key={child.name}
                              onClick={() => scroll(child.link)}
                              className="block px-4 py-3 hover:bg-muted"
                            >
                              {child.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {/* {MenuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))} */}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">

                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
