import { Icon } from "@/components/site-components/Icons";
import Image from "next/image";
import aboutone from "@/public/assets/aboutone.svg";
import { Separator } from "@/components/ui/separator";

const AboutComponent = () => {
  return (
    <div className="flex justify-center items-center gap-x-3 my-10">
      <div className="h-auto w-full">
        <Image
          src={aboutone}
          alt="about image"
          className="max-h-[30rem] max-w-[30rem] h-auto w-auto"
        />
      </div>
      <div className="flex flex-col gap-y-2 justify-center items-start">
        <h2 className="text-primary font-semibold text-4xl">About Us</h2>
        <Separator className="w-44" />
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni harum,
          incidunt quibusdam facilis, suscipit totam vitae natus quo quia
          eligendi quidem, praesentium mollitia facere quasi nemo rem minus
          animi nisi!
        </p>
      </div>
    </div>
  );
};

export default AboutComponent;
