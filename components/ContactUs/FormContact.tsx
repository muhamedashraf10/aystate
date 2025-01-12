"use client";

import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { useTranslation } from "react-i18next";
import { Checkbox } from "../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// const formSchema = z.object({
//   email: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
//   phoneNumber: z.number().,
// });

const FormContact = () => {
  const { t } = useTranslation();

  const form = useForm();
  function onSubmit(values: any) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-12 bg-white shadow-lg rounded-2xl w-[946px] p-12 mt-20 "
      >
        <div className="grid grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-[700]" security="rquire">
                  {t("name")}
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-borderSmoke border-transparent h-12"
                    placeholder={t("enterName")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-[700]" security="rquire">
                  {t("email")}
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-borderSmoke border-transparent h-12"
                    placeholder={t("enterEmail")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-[700]">{t("phoneNumber")}</FormLabel>
                <FormControl>
                  <Input
                    className="bg-borderSmoke border-transparent h-12"
                    type="number"
                    placeholder={t("enterNumber")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="help"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-[700]" security="rquire">
                  {t("teamHelp")}
                </FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger className="bg-borderSmoke border-transparent h-12">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="anythingToKnow"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-[700]">
                {t("anythingToKnow?")}
              </FormLabel>
              <FormControl>
                <Textarea
                  className="bg-borderSmoke border-transparent h-44"
                  placeholder={t("typeAnything")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between items-center mt-32">
          <FormField
            control={form.control}
            name="check"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" {...field} />
                    <label
                      htmlFor="terms"
                      className=" font-[700] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {t("policy")}
                    </label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button size={"lg"} type="submit">
            {t("contactSales")}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormContact;
