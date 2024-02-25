"use client";
import React from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";

import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/redux/selector-dispatch-hook";

import { changeProfile } from "@/redux/resume/resumeSlice";
import { ResumeProfile } from "@/redux/resume/types";

interface FormType {
  form: any;
}

const FormComponent = ({ form }: FormType) => {
  const profile = useAppSelector((state) => state.resume.profile);
  const dispatch = useAppDispatch();

  const { name, email, phone, location, summary, url } = profile;

  const handleChange = (field: keyof ResumeProfile, value: string) => {
    dispatch(changeProfile({ field, value }));
  };

  return (
    <div>
      <Form {...form}>
        <form>
          <FormField
            name="firstname"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>FirstName</FormLabel>
                <FormControl>
                  <Input {...field} value={name} onChange={handleChange} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="lastname"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>LastName</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default FormComponent;
