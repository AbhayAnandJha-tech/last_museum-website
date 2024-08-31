import React from "react";
import "./EducationalWorkshops.css";

const educationalWorkshops = [
  {
    title: "Hands-on Learning",
    description:
      "The workshops provide students with hands-on experiences, allowing them to actively engage with scientific concepts and apply them to real-world scenarios. This approach makes learning more engaging and effective.",
    flipDescription:
      "Hands-on learning immerses students in practical activities, encouraging experimentation and direct application of theories. This method fosters deeper comprehension and retention, making complex scientific ideas accessible and engaging. By actively participating, students build confidence in their problem-solving skills and enjoy a sense of accomplishment as they explore new concepts in a supportive environment.",
    image:
      "https://apnayatra.com/wp-content/uploads/2023/08/National-Science-Centre-Delhi7.jpg",
  },
  {
    title: "Curriculum Enhancement",
    description:
      "The workshops complement school curricula, providing students with a deeper understanding of scientific topics and reinforcing their classroom learning.",
    flipDescription:
      "These workshops are designed to align with school curricula, enhancing understanding by diving deeper into topics covered in classrooms. By connecting theoretical knowledge with practical experiences, students are better equipped to grasp complex concepts. This complementary approach ensures that learning is both thorough and enjoyable, bridging the gap between textbook knowledge and real-world applications.",
    image: "https://sarkaripariksha.com/daily-news-images/1679913112-news.jpeg",
  },
  {
    title: "Skill Development",
    description:
      "Participants can develop essential skills such as critical thinking, problem-solving, observation, and experimentation. These skills are valuable not only in science but also in other areas of life.",
    flipDescription:
      "Beyond academic knowledge, these workshops emphasize skill development, nurturing critical thinking, creativity, and analytical abilities. Participants learn to observe meticulously, hypothesize thoughtfully, and test ideas with a scientific approach. Such skills are not only pivotal in scientific fields but also in everyday decision-making and professional scenarios.",
    image:
      "https://images.jdmagicbox.com/comp/noida/26/011p61426/catalogue/national-science-centre-pragati-maidan-delhi-museums-00spnx21m7.jpg",
  },
  {
    title: "Inspiration and Motivation",
    description:
      "The workshops can ignite students' passion for science and inspire them to pursue scientific careers. They can also motivate students to explore scientific topics beyond the classroom.",
    flipDescription:
      "Through interactive and stimulating activities, students find inspiration to pursue further studies in science. These workshops spark curiosity and passion, encouraging students to explore scientific careers. Exposure to innovative experiments and thought-provoking challenges helps students discover their interests and potential in various scientific domains.",
    image: "https://nscd.gov.in/wp-content/uploads/2024/01/DSC_0081.jpg",
  },
  {
    title: "Exposure to Diverse Fields",
    description:
      "The workshops cover a wide range of scientific disciplines, exposing students to different fields of study and helping them discover their interests.",
    flipDescription:
      "Participants are introduced to a variety of scientific fields, from physics and chemistry to biology and earth sciences. This broad exposure helps students identify their interests and passions, providing a well-rounded perspective on the vast opportunities available in the world of science. The experience helps in guiding future educational and career choices.",
    image: "https://nscd.gov.in/wp-content/uploads/2024/01/MG_0469-scaled.jpg",
  },
];

function EducationalWorkshops() {
  return (
    <div className="educational-workshops-container">
      <h1 className="educational-workshops-title">Educational Workshops</h1>
      <p className="educational-workshops-description">
        The educational workshops offered at the National Science Centre, Delhi
        (NSCD) play a crucial role in promoting scientific literacy, fostering
        curiosity, and inspiring young minds. Here are some key points about
        these workshops:
      </p>
      <div className="educational-workshops-grid">
        {educationalWorkshops.map((workshop, index) => (
          <div key={index} className="educational-workshop-card">
            <div className="educational-workshop-inner">
              <div className="educational-workshop-front">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="educational-workshop-image"
                />
                <h3 className="educational-workshop-title">{workshop.title}</h3>
                <p className="educational-workshop-description">
                  {workshop.description}
                </p>
              </div>
              <div className="educational-workshop-back">
                <h3 className="educational-workshop-title">
                  More About {workshop.title}
                </h3>
                <p className="educational-workshop-flip-description">
                  {workshop.flipDescription}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationalWorkshops;
