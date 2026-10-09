import { Link } from "react-router-dom";
import { Button, Input, SectionTitle } from "@/components/ui";
import { GoogleLogo } from "@/assets";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type SignUpValues } from "@/schema/auth";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (values: SignUpValues) => {
    console.log(values);
  };

  return (
    <form
      className="bg-base/6 rounded-3xl p-7.5 border border-base/20 w-full max-w-183.5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <section className="w-full mb-7.5 text-center md:text-start">
        <SectionTitle title="Hi Designer" />
        <p className="mt-4 font-poppins-regular text-[16px] text-secondary leading-6">
          Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan ricotta
          garlic dolor sauce marinara Chicago marinara. Tomato dolor pesto pesto
          Bianca pesto roll onions.
        </p>
      </section>
      <section className="w-full">
        <div className="w-full flex flex-col gap-y-6">
          <div className="w-full">
            <Input
              label="email"
              placeholder="Email"
              variant="email"
              error={errors.email?.message}
              {...register("email")}
            />
            {errors.email && (
              <p
                id="email-error"
                role="alert"
                className="text-primary text-sm mt-2"
              >
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <Input
              label="password"
              placeholder="Password"
              variant="password"
              error={errors.password?.message}
              {...register("password")}
            />
            {errors.password && (
              <p
                id="password-error"
                role="alert"
                className="text-primary text-sm mt-2"
              >
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <Input
              label="repeat-password"
              placeholder="Repeat Password"
              variant="password"
              error={errors.repeatPassword?.message}
              {...register("repeatPassword")}
            />
            {errors.repeatPassword && (
              <p
                id="password-error"
                role="alert"
                className="text-primary text-sm mt-2"
              >
                {errors.repeatPassword.message}
              </p>
            )}
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-5 mt-4">
          <p className="text-secondary text-[16px] font-poppins-regular leading-6">
            By clicking agree with <span className="text-base">terms</span> of{" "}
            <span className="text-base">conditions</span>
          </p>
          <p className="text-base text-[16px] font-poppins-regular leading-6 whitespace-nowrap">
            Forgot Password
          </p>
        </div>
        <p className="text-base text-[16px] font-poppins-regular leading-6 my-6 text-center">
          Or Continue
        </p>
      </section>
      <section className="w-full flex flex-col items-center">
        <button
          type="button"
          className="w-full flex justify-center items-center text-base text-[16px] font-poppins-regular bg-base/6 border border-base/20 leading-6 rounded-3xl py-3 cursor-pointer"
        >
          <img src={GoogleLogo} alt="" />
          With Google
        </button>
        <Button className="w-full max-w-64.75 mt-10 mb-7.5" variant="submit">
          Sign Up
        </Button>
        <p className="font-poppins-regular text-[14px] text-secondary leading-5">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-base">
            Sign In
          </Link>
        </p>
      </section>
    </form>
  );
};
