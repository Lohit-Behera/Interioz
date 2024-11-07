"use client";

import Image from "next/image";
import { Facebook, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

import imageSixteen from "../../assets/imageSixteen.jpg";
import imageFour from "../../assets/imageFour.jpg";
import AnimateTitle from "@/components/AnimateTitle";

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(50, { message: "Name is too long" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .max(50, { message: "Email is too long" })
    .email({ message: "Invalid email" }),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .max(500, { message: "Message is too long" }),
});

function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Thank you for your message!");
    console.log(values);
  }
  return (
    <>
      <div className="grid gap-10 md:gap-16">
        <Image
          src={imageSixteen}
          alt="imageOne"
          className="max-h-96 object-cover"
        />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 w-full md:w-[90%] lg:w-[80%] mx-auto">
          <div className="flex flex-col justify-center space-y-10 my-auto">
            <div className="grid gap-4">
              <div className="flex">
                {"Let&APOS;s Talk".split("").map((letter, index) => (
                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: 30 },
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.12, 0.8, 0.17, 0.89],
                      delay: (index + 1) * 0.1,
                    }}
                    key={index}
                    className="text-2xl md:text-5xl lg:text-7xl font-bold"
                  >
                    {letter}
                  </motion.p>
                ))}
              </div>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 30 },
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.12, 0.8, 0.17, 0.89],
                  delay: 0.3,
                }}
                className="text-base md:text-lg"
              >
                Got a project on your mind? Let&APOS;s discuss about the
                details.
              </motion.p>
            </div>
            <div className="grid gap-4">
              <p className="text-lg md:text-2xl font-semibold">Call Us</p>
              <p className="text-lg md:text-2xl font-semibold">
                +12 9887 234 122
              </p>
              <div className="flex space-x-2">
                <Facebook
                  fill="#000"
                  className="w-10 h-10 hover:text-[#984f4a] hover:fill-[#984f4a] duration-300 hover:animate-bounce hover:cursor-pointer"
                />
                <Twitter
                  className="w-10 h-10 hover:text-[#984f4a] hover:fill-[#984f4a] duration-300 hover:animate-bounce hover:cursor-pointer"
                  fill="#000"
                />
              </div>
            </div>
          </div>
          <div className="grid gap-4 p-4 md:p-8 rounded-lg border-4 border-black">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          className="resize-y"
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter your message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </div>
        </div>
        <div className="w-full min-h-[700px] relative">
          <div className="flex flex-col md:flex-row justify-center gap-8 items-center w-full h-full z-10">
            <AnimateTitle text="Our Locations" className="text-white " />
            <div className="flex flex-col md:flex-row gap-0.5">
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center space-y-4 text-white bg-black/50 p-4 md:p-8 py-14 rounded-t-lg md:rounded-l-lg">
                  <p className="text-center text-lg md:text-xl font-semibold">
                    Amsterdam
                  </p>
                  <div className="flex flex-col space-y-2">
                    <p className="text-center">010-1234567</p>
                    <p className="text-center">info@interiozwars.org</p>
                  </div>
                  <p className="text-center text-sm">
                    56 Tulip Terrace, 1023 EF Amsterdam, <br /> Netherlands
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center space-y-4 text-white bg-black/50 p-4 md:p-8 py-14 rounded-b-lg md:rounded-r-lg">
                  <p className="text-center text-lg md:text-xl font-semibold">
                    Amsterdam
                  </p>
                  <div className="flex flex-col space-y-2">
                    <p className="text-center">010-1234567</p>
                    <p className="text-center">info@interiozwars.org</p>
                  </div>
                  <p className="text-center text-sm">
                    56 Tulip Terrace, 1023 EF Amsterdam, <br /> Netherlands
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black w-full h-full absolute top-0 left-0 -z-10">
            <Image
              src={imageFour}
              alt="imageOne"
              className="absolute top-0 left-0 w-full max-h-[700px] object-cover -z-10 opacity-60"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
