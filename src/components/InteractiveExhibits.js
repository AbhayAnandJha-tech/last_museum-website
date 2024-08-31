import React from "react";
import "./InteractiveExhibits.css";

const interactiveExhibits = [
  {
    title: "Virtual Reality Space Exploration",
    description: "Experience the wonders of space in our immersive VR exhibit.",
    image: "https://nscd.gov.in/wp-content/uploads/2024/01/MG_0583-scaled.jpg",
    additionalData: `
      Engage with cutting-edge technology to explore the cosmos.
      Discover planets, stars, and galaxies like never before.
      Ideal for space enthusiasts of all ages.
    `,
  },
  {
    title: "DNA Sequencing Lab",
    description: "Unravel the mysteries of genetics in our hands-on DNA lab.",
    image:
      "https://nscd.gov.in/wp-content/uploads/2024/01/djb5-min-scaled-1-1024x1024.jpg",
    additionalData: `
      Dive into the world of genetics with interactive DNA models.
      Learn about gene manipulation and genetic research.
      Ideal for students and science enthusiasts.
    `,
  },
  {
    title: "Robotics Workshop",
    description:
      "Build and program your own robot in our state-of-the-art robotics workshop.",
    image: "https://nscd.gov.in/wp-content/uploads/2024/01/IMG_0020.jpg",
    additionalData: `
      Hands-on experience with robotics and programming.
      Create, test, and showcase your robots.
      Perfect for tech-savvy visitors.
    `,
  },
  {
    title: "Climate Change Simulator",
    description:
      "Explore the impacts of climate change with our interactive global simulator.",
    image:
      "https://thumbs.dreamstime.com/b/%E7%A7%91%E6%8A%80%E5%B1%95%E5%8E%85%E5%B1%95%E9%A1%B9-exhibition-items-science-technology-exhibition-hall-model-construction-china-fuyang-science-252416548.jpg",
    additionalData: `
      Visualize the effects of climate change on a global scale.
      Understand climate models and predictions.
      Engage with interactive climate scenarios.
    `,
  },
];

function InteractiveExhibits() {
  return (
    <div className="interactive-exhibits-container">
      <h1 className="interactive-exhibits-title">Interactive Exhibits</h1>
      <p className="interactive-exhibits-description">
        Engage with cutting-edge science through our hands-on, interactive
        exhibits. Each exhibit is designed to inspire curiosity and foster a
        deeper understanding of the world around us.
      </p>
      <div className="interactive-exhibits-grid">
        {interactiveExhibits.map((exhibit, index) => (
          <div key={index} className="interactive-exhibit-card">
            <div className="interactive-exhibit-card-inner">
              <div className="interactive-exhibit-front">
                <img
                  src={exhibit.image}
                  alt={exhibit.title}
                  className="interactive-exhibit-image"
                />
                <h3 className="interactive-exhibit-title">{exhibit.title}</h3>
                <p className="interactive-exhibit-description">
                  {exhibit.description}
                </p>
              </div>
              <div className="interactive-exhibit-back">
                <h3 className="interactive-exhibit-back-title">
                  {exhibit.title}
                </h3>
                <p className="interactive-exhibit-back-description">
                  {exhibit.additionalData}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InteractiveExhibits;
