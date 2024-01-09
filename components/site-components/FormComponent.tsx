"use client";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Field } from "react-hook-form";
import { Input } from "../ui/input";

interface FormType {
  form: any;
}

const FormComponent = ({ form }: FormType) => {
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
                  <Input {...field} />
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
