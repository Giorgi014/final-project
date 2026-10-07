import { ABOUT_SERVICE_CARDS } from "@/data/about/about";
import { SectionTitle, ServiceCard } from "./ui";

export const Dream = () => {
  return (
    <article className="w-full max-w-330 px-5 mt-15 sm:mt-25 lg:mt-62.5 mx-auto">
      <section className="w-full flex flex-col md:flex-row justify-between items-center gap-5">
        <SectionTitle title="Our Dream to Reality" />
        <p className="font-poppins-regular text-[16px] text-secondary w-full md:w-[clamp(250px,42vw,626px)] mt-4 text-center md:text-start mx-auto md:mx-0">
          Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan ricotta
          garlic dolor sauce marinara Chicago marinara.
        </p>
      </section>
      <section className="mt-15 grid sm:grid-cols-[repeat(2,auto)] lg:grid-cols-[repeat(3,auto)] justify-center md:justify-between gap-5 gap-y-10">
        {ABOUT_SERVICE_CARDS.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </section>
    </article>
  );
};
