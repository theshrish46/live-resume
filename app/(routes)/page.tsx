import Image from "next/image";
import { Button } from "@/components/ui/button";

import HomeComponent from "./_components/HomeComponent";
import MaxWidthWrapper from "@/components/site-components/MaxWidthWrapper";
import { Separator } from "@/components/ui/separator";
import AboutComponent from "./_components/AboutComponent";

export default function Home() {
  return (
    <main>
      <MaxWidthWrapper className="py-10">
        <HomeComponent />
        <Separator className="my-4" />
        <AboutComponent />
        <Separator className="my-4" />
      </MaxWidthWrapper>
    </main>
  );
}
