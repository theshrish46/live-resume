"use client";

import { Icon } from "@/components/site-components/Icons";
import { Separator } from "@/components/ui/separator";
import { SquareUser, FileCog, HardDriveDownload } from "lucide-react";
import Image from "next/image";
const properties = [
  {
    step: "Enter your details",
    desc: "saepe dolorum non consequatur ex molestiae sint dolorem quasi?",
    logo: SquareUser,
  },
  {
    step: "Edit your template",
    desc: "saepe dolorum non consequatur ex molestiae sint dolorem quasi?",
    logo: FileCog,
  },
  {
    step: "Download your resume",
    desc: "saepe dolorum non consequatur ex molestiae sint dolorem quasi?",
    logo: HardDriveDownload,
  },
];

const HomeComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-5">
      <div>
        <Icon.logo className="" height={56} width={56} color={"#2563eb"} />
      </div>
      <div className="flex flex-col justify-center items-center gap-y-5">
        <h1 className="text-5xl text-primary font-semibold">
          Welcome to live resume
        </h1>
        <p className="text-xl text-muted-foreground">
          A place where you can build professional resume for your great career!
        </p>
      </div>
      <div className="w-full flex justify-around items-center bg-blue-50 my-4 dark:bg-inherit">
        {properties.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center p-5 gap-y-5"
          >
            {
              <item.logo className="h-16 w-16 bg-blue-100 p-4 rounded-full dark:bg-slate-100 dark:text-slate-900" />
            }
            <div className="text-base font-medium">
              {index + 1}. {item.step}
            </div>
            <div className="text-center text-muted-foreground">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeComponent;
