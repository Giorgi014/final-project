import { ContactForm } from "@/components/contact/ContactForm";
import { SectionTitle } from "@/components/ui";

export const ContactSection = () => {
  return (
    <article className="w-full max-w-330 px-5 mx-auto flex flex-col justify-between items-center md:flex-row md:items-start gap-5 mt-15 md:mt-35 lg:mt-50">
      <section className="w-full max-w-175">
        <SectionTitle title="Let’s Talk About Your Idea" />
        <p className="w-full max-w-163.75 font-poppins-regular text-[16px] text-secondary leading-6 text-center md:text-start mt-4 mb-7.5">
          Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan ricotta
          garlic dolor sauce marinara Chicago marinara. Tomato dolor pesto pesto
          Bianca pesto roll onions.
        </p>
        <ul className="w-full pl-5 font-poppins-medium text-[16px] text-secondary leading-6 list-disc">
          <li>Stygar@help.com</li>
          <li className="my-6">+1 (555) 123-4567</li>
          <li>5987 Mid Rivers Mall Dr., St. Charles</li>
        </ul>
      </section>
      <ContactForm />
    </article>
  );
};
