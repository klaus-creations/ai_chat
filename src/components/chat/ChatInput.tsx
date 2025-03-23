"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function ChatInput() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  const onSubmit = async function () {
    console.log("hello");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 size-full relative  rounded-md p-2 flex flex-col items-end gap-2"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="w-full h-[95%]">
              <FormControl>
                <textarea
                  className="w-full resize-none border-[1px] border-purple-700/[.6] outline-none focus:border-purple-700/[.5] h-full text-base tracking-[1px] p-2"
                  placeholder="Chat with klaus AI "
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="flex items-center gap-2 bg-purple-700/[.3] rounded-lg"
        >
          <span>Send</span>
          <Send className="size-4 text-white" />
        </Button>
      </form>
    </Form>
  );
}
