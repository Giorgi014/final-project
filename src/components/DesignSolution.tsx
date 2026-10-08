import { SERVICE_CARDS } from "@/data/services";
import { SectionTitle, ServiceCard } from "./ui";

export const DesignSolution = () => {
  return (
    <article className="w-full max-w-330 px-5 mt-15 sm:mt-25 lg:mt-62.5 mx-auto">
      <section className="w-full">
        <SectionTitle title="Creative Design Solution" />
        <p className="font-poppins-regular text-[16px] text-secondary w-full max-w-156.5 mt-4 text-center md:text-start mx-auto md:mx-0">
          Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan ricotta
          garlic dolor sauce marinara Chicago marinara. Tomato dolor pesto pesto
          Bianca pesto roll onions.
        </p>
      </section>
      <section className="mt-15 grid sm:grid-cols-[repeat(2,minmax(0,335px))] lg:grid-cols-[repeat(3,minmax(0,335px))] justify-center md:justify-between gap-5 gap-y-10">
        {SERVICE_CARDS.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </section>
    </article>
  );
};
