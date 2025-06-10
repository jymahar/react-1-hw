import styles from "./OurPartners.css";

const partners = [
  { name: "Amazon", logo: "/business_partners/amazon_logo.png" },
  { name: "Microsoft", logo: "/business_partners/Microsoft-Logo-white.png" },
  { name: "Samsung", logo: "/business_partners/samsung-logo.png" },
  { name: "CBC", logo: "/business_partners/CBC_Logo_White.png" },
  { name: "Alphabet", logo: "/business_partners/alphabet-logo.png" },
  { name: "Nyu", logo: "/business_partners/nyu-logo.png" },
  { name: "Queens", logo: "/business_partners/QueensLogo_white.png" },
  { name: "Sodexo", logo: "/business_partners/Sodexo-logo.png" },
];

const OurPartners = () => {
  return (
    <section className="partners-section">
      <div className="partners-header">
        <p>
          We collaborate with some of the most respected names in the space and
          technology industries to make every journey extraordinary.
        </p>
      </div>
      <div className="partner-logos">
        {partners.map((partner) => (
          <div key={partner.name} className="partner-logo">
            <img src={partner.logo} alt={partner.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPartners;
