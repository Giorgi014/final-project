import { ContactIllustration } from "@/assets";
import { Hero, StatsSection } from "@/components";

const Contact = () => {
  return (
    <main className="pt-3.75 overflow-x-hidden">
      <Hero
        image={ContactIllustration}
        prefix="Reach Out Let’s"
        highlight="Collaborate"
      />
      <StatsSection />
    </main>
  );
};

export default Contact;
