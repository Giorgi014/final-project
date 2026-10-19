import { contactSchema, type ContactValues } from "@/schema/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button, Input } from "@/components/ui";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    mode: "onSubmit",
  });
  const formRef = useRef<HTMLFormElement>(null);

  const isMobile = window.innerWidth < 768;

  gsap.registerPlugin(ScrollTrigger, useGSAP);

  const onSubmit = async (values: ContactValues) => {
    console.log(values);
  };

  useGSAP(() => {
    gsap.fromTo(
      formRef.current?.children ?? [],
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        stagger: 0.25,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: formRef.current,
          start: isMobile ? "top 75%" : "top 85%",
          once: true,
        },
      },
    );
  });

  return (
    <form
      ref={formRef}
      className="w-full max-w-141.25 flex flex-col gap-y-6 items-center justify-between"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full">
        <Input
          variant="text"
          label="full-name"
          placeholder="Full Name"
          error={errors.fullName?.message}
          {...register("fullName")}
        />
        {errors.fullName && (
          <p role="alert" className="text-primary text-sm mt-2">
            {errors.fullName.message}
          </p>
        )}
      </div>
      <div className="w-full">
        <Input
          variant="email"
          label="email"
          placeholder="Email"
          error={errors.email?.message}
          {...register("email")}
        />
        {errors.email && (
          <p role="alert" className="text-primary text-sm mt-2">
            {errors.email.message}
          </p>
        )}
      </div>
      <div
        className={`w-full flex bg-black/20 rounded-3xl py-4 px-6 border ${errors.discussion ? "border-primary" : "border-base/20"}`}
      >
        <label htmlFor="discussion" className="hidden">
          discussion
        </label>
        <textarea
          id="discussion"
          placeholder="Discussion"
          className="w-full h-34 text-base text-[16px] font-poppins-medium outline-none resize-y"
          {...register("discussion")}
        />
      </div>
      {errors.discussion && (
        <p role="alert" className="w-full text-primary text-sm -mt-4">
          {errors.discussion.message}
        </p>
      )}
      <Button variant="submit" className="w-full max-w-48.5 mt-1.5">
        Get in Touch
      </Button>
    </form>
  );
};
