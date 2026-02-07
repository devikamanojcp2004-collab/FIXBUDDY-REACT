import { FooterCard } from "./FooterCard";
export function Footer() {
  return (
    <>
    <footer className="bg-orange-800 pt-10">
            <h1 className="text-black text-4xl font-bold ml-5">FIX<span className="text-orange-500">BUDDY</span></h1>

      <div className="flex gap-35 mx-15 h-50">
        <FooterCard
          heading="Company"
          name={["About Us", "Privacy Policy", "Terms & Conditions", "Careers"]}
        />

        <FooterCard
          heading="Social"
          name={["Instagram", "Facebook", "Twitter", "Linkedln"]}
        />

        <FooterCard
          heading="Community & Support"
          name={["Contact Us", "Support"]}
        />
      </div>
      </footer>
    </>
  );
}
