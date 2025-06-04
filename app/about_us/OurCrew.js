import styles from "./OurCrew.css";

const crewMembers = [
  {
    name: "Captain Sarah Vega",
    title: "Mission Commander",
    image: "/crew/image-anousheh-ansari.png",
    description:
      "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.",
  },
  {
    name: "Dr. Leo Redding",
    image: "/crew/image-douglas-hurley.png",
    title: "Chief Astrophysicist",
    description:
      "Dr. Redding is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
  },
  {
    name: "Chief Engineer Hana Lee",
    image: "/crew/image-anousheh-ansari.webp",
    title: "Chief Engineer",
    description:
      "With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft.",
  },
  {
    name: "Alex Santos",
    image: "/crew/image-mark-shuttleworth.webp",
    title: "Mission Specialist",
    description:
      "Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in science and adventure tourism, he’s the perfect guide.",
  },
  {
    name: "Maya Patel",
    image: "/crew/image-anousheh-ansari.png",
    title: "Crew Member",
    description:
      "Maya brings a unique blend of technical skills and customer service experience. She ensures every traveler has an unforgettable experience.",
  },
];

const OurCrew = () => {
  return (
    <div className="crew-container">
      <div className="crew-header">
        <p>
          Our crew is the heart and soul of Galactica. We are a diverse team of
          seasoned space explorers, engineers, and visionaries who are united by
          a common goal: to make space travel accessible and exciting for all.
        </p>
      </div>
      <div className="crew-grid">
        {crewMembers.map((member, idx) => (
          <div className="crew-card" key={idx}>
            <img src={member.image} alt={member.name} className="crew-image" />
            <h3>{member.name}</h3>
            <p className="crew-title">{member.title}</p>
            <p className="crew-description">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCrew;
