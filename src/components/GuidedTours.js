import React from "react";
import "./GuidedTours.css";

const guidedTours = [
  {
    title: "Personalized Experience",
    description:
      "The guided tour expert will tailor the tour to your specific interests and questions, ensuring that you get the most out of your visit.",
    image:
      "https://nscd.gov.in/wp-content/uploads/2024/01/MG_0568-1-scaled.jpg",
    additionalInfo: `
      Experience a personalized journey through our exhibits. 
      Focus on your unique interests, engage with interactive displays, 
      and get answers to all your questions. Perfect for those seeking 
      a tailored experience and deeper insights into specific topics.
    `,
  },
  {
    title: "In-depth Explanations",
    description:
      "The expert will provide detailed explanations of the exhibits and activities, helping you to understand complex scientific concepts in a clear and engaging way.",
    image:
      "https://nscd.gov.in/wp-content/uploads/2024/01/DSC_0295-e1521638667805.jpg",
    additionalInfo: `
      Gain a deeper understanding of scientific principles with clear, 
      detailed explanations. This tour is perfect for both beginners and 
      enthusiasts, providing clarity on complex concepts and engaging 
      discussions on various scientific topics.
    `,
  },
  {
    title: "Hidden Gems",
    description:
      "The expert will guide you to some of the hidden gems of the centre, ensuring that you don't miss any of the highlights.",
    image:
      "https://www.holidify.com/images/cmsuploads/compressed/Indus_Valley_Diorama_-_Indian_Science_and_Technology_Heritage_Gallery_-_National_Science_Centre_-_New_Delhi_2014-05-06_0805-2_20181005185500.jpg",
    additionalInfo: `
      Discover lesser-known exhibits and intriguing aspects of the centre 
      that you might otherwise miss. This tour is a treasure hunt for science 
      lovers, offering a unique perspective on the centre's hidden gems and 
      special highlights.
    `,
  },
  {
    title: "Interactive Learning",
    description:
      "The expert will make the tour interactive and engaging, using hands-on activities and demonstrations to bring the exhibits to life.",
    image: "https://www.vismuseum.gov.in/wp-content/uploads/2019/10/01.jpg",
    additionalInfo: `
      Get hands-on experience with interactive displays and live demonstrations. 
      Perfect for those who love to learn by doing, this tour brings science 
      to life through engaging, interactive elements and practical activities.
    `,
  },
  {
    title: "Expert Insights",
    description:
      "The expert will share their knowledge and expertise on a wide range of scientific topics, providing you with valuable insights and perspectives.",
    image:
      "https://media.gettyimages.com/id/165251832/photo/new-delhi-india-astronaut-sunita-williams-interacting-with-students-and-teachers-at-the.jpg?s=612x612&w=0&k=20&c=VY7Gn-EhrWK3ZgUYJcCbFl9U1wPD25ft_pUV2lsVLfA=",
    additionalInfo: `
      Gain valuable insights from our experts on various scientific topics. 
      Ask questions and dive deep into subjects that interest you most. This 
      tour provides a comprehensive understanding of science from knowledgeable 
      and passionate guides.
    `,
  },
];

function GuidedTours() {
  return (
    <div className="guided-tours-container">
      <h1 className="guided-tours-title">Guided Tours</h1>
      <p className="guided-tours-description">
        The National Science Centre in Delhi offers a guided tour expert service
        to enhance your visit to the centre and provide a deeper understanding
        of the exhibits and activities on display. The expert guides are
        knowledgeable and passionate about science, and they are equipped to
        cater to visitors of all ages and interests.
      </p>
      <div className="guided-tours-grid">
        {guidedTours.map((tour, index) => (
          <div key={index} className="guided-tour-card">
            <div className="guided-tour-inner">
              <div className="guided-tour-front">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="guided-tour-image"
                />
                <h3 className="guided-tour-title">{tour.title}</h3>
                <p className="guided-tour-description">{tour.description}</p>
              </div>
              <div className="guided-tour-back">
                <h3 className="guided-tour-back-title">
                  More About {tour.title}
                </h3>
                <p className="guided-tour-back-description">
                  {tour.additionalInfo}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GuidedTours;
