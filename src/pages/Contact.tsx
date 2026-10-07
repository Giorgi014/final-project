import { ContactIllustration } from "@/assets";
import {
  ContactSection,
  Hero,
  RadialBackground,
  StatsSection,
} from "@/components";

const Contact = () => {
  return (
    <main className="pt-3.75 overflow-x-hidden">
      <RadialBackground position="0% 50%">
        <RadialBackground position="100% 130%">
          <Hero
            image={ContactIllustration}
            prefix="Reach Out Let’s"
            highlight="Collaborate"
          />
          <ContactSection />
          <StatsSection className="my-15 md:my-25 lg:my-37.5" />
        </RadialBackground>
      </RadialBackground>
    </main>
  );
};

export default Contact;
