"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema } from "@/schemas/profileSchema";
import FormComponent from "@/components/site-components/FormComponent";

const Page = () => {
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
  });

  return (
    <div className="flex justify-center items-center w-full mx-auto my-10">
      <div className="w-11/12 mx-auto flex justify-around items-center gap-x-5">
        <div className="border-2 border-red-200 w-1/2 h-full">
          <h1>Enter your details</h1>
          <FormComponent form={form} />
        </div>
        <div className="border-2 border-red-200 w-1/2 h-full">
          <h1>Your resume</h1>
          <div>
            Name: 
          </div>
          <div>
            LastName:
          </div>
          <div>
            Email:
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
