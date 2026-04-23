import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DestinationHero from "@/components/destination/DestinationHero";
import DestinationBreadcrumb from "@/components/destination/DestinationBreadcrumb";
import CompactIntro from "@/components/destination/CompactIntro";
import ContactMethodsGrid from "@/components/contact/ContactMethodsGrid";
import ContactForm from "@/components/contact/ContactForm";
import OfficeInfo from "@/components/contact/OfficeInfo";
import { contactData } from "@/data/contactData";

const Contact = () => {
  const data = contactData;

  return (
    <main>
      <Header />
      <DestinationHero
        image={data.hero.image}
        eyebrow={data.hero.eyebrow}
        name={data.hero.name}
        tagline={data.hero.tagline}
        caption={data.hero.caption}
      />
      <DestinationBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <CompactIntro text={data.compactIntro} />
      <ContactMethodsGrid methods={data.methods} />
      <ContactForm />
      <OfficeInfo />
      <Footer />
    </main>
  );
};

export default Contact;
