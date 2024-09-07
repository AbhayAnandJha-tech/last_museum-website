import React from "react";

const Tickets = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="text">
            <h1>Chemistry Magic: Live Reactions and Explosions</h1>
            <p>
              "Chemistry Magic: Live Reactions and Explosions" is an
              electrifying event hosted at the Science Discovery Museum,
              designed to captivate and educate visitors through the fascinating
              world of chemistry. This event brings science to life with a
              series of thrilling live demonstrations showcasing dramatic
              chemical reactions and spectacular explosions that illustrate
              fundamental principles of chemistry.
            </p>
            <p>
              The event features a range of interactive demonstrations,
              including color-changing reactions, fizzing concoctions, and
              controlled explosions. These activities are designed to make
              complex chemical concepts accessible and engaging for audiences of
              all ages. Each demonstration is accompanied by explanations from
              experienced chemists who provide insights into the science behind
              the reactions and the safety measures involved.
            </p>
            <p>
              Visitors can also participate in hands-on experiments at various
              stations throughout the museum. These activities allow guests to
              conduct their chemical reactions under the guidance of expert
              educators, fostering a deeper understanding of chemical processes.
              Activities include creating slime, experimenting with acids and
              bases, and observing the effects of different catalysts.
            </p>
            <p>
              "Chemistry Magic" also features educational workshops where
              attendees can learn about the history of chemistry, the periodic
              table, and the role of chemistry in everyday life. These workshops
              are tailored for different age groups, ensuring that both children
              and adults can enjoy and benefit from the event.
            </p>
            <p>
              With its dynamic blend of entertainment and education, "Chemistry
              Magic: Live Reactions and Explosions" is a must-see event for
              anyone interested in the wonders of science. It offers an exciting
              opportunity to explore the marvels of chemistry through engaging
              demonstrations and interactive experiences that highlight the
              magic of science in action.
            </p>
          </div>
          <img
            src="https://www.amethystmagic.com/wp-content/themes/amethyst_magic/assets/images/explosion.jpg"
            alt="Chemistry Explosion"
          />
        </div>
        <hr />

        <div className="container">
          <div className="text">
            <h1>Jurassic Legends: A Prehistoric Safari</h1>
            <p>
              "Jurassic Legends: A Prehistoric Safari" is an exciting and
              immersive event at the Natural History Museum, designed to
              transport visitors back to the age of dinosaurs. This event offers
              a comprehensive look at the prehistoric world, featuring
              life-sized dinosaur models, interactive exhibits, and educational
              workshops.
            </p>
            <p>
              The exhibit is divided into several themed areas, each dedicated
              to different periods of the Mesozoic era. Guests can explore the
              Triassic, Jurassic, and Cretaceous periods, each featuring
              distinct dinosaurs and environmental settings.
            </p>
            <p>
              In addition to the exhibits, "Jurassic Legends" offers hands-on
              activities such as fossil digs, where children can uncover replica
              dinosaur bones, and paleontology workshops.
            </p>
            <p>
              Expert talks and panel discussions are also part of the event,
              featuring paleontologists and researchers who share their
              knowledge about the latest discoveries in the field of dinosaur
              science.
            </p>
            <p>
              "Jurassic Legends: A Prehistoric Safari" is a must-visit for
              anyone fascinated by dinosaurs and the ancient world.
            </p>
          </div>
          <img
            src="http://www.tournorfolk.co.uk/dinosauradventure/dinosaur.jpg"
            alt="DinosaurPark"
          />
        </div>
        <hr />

        <div className="container">
          <div className="text">
            <h1>A Beautiful Planet: An IMAX® 3D Experience</h1>
            <p>
              "A Beautiful Planet: An IMAX® 3D Experience" is an awe-inspiring
              event that takes viewers on a breathtaking journey to witness our
              planet from a unique perspective.
            </p>
            <p>
              Filmed by astronauts aboard the International Space Station, "A
              Beautiful Planet" offers a spectacular view of our world,
              capturing everything from vibrant city lights to serene natural
              wonders.
            </p>
            <p>
              This IMAX® 3D experience brings the wonders of space to life with
              high-definition visuals and immersive sound, creating a sense of
              floating alongside the astronauts.
            </p>
            <p>
              In addition to the film, the event includes informative exhibits
              and interactive displays that explore the science behind space
              travel and satellite technology.
            </p>
            <p>
              "A Beautiful Planet: An IMAX® 3D Experience" is an educational
              journey that highlights Earth's beauty and fragility, inspiring
              all ages.
            </p>
          </div>
          <img
            src="https://img.delicious.com.au/Dw5uqfsz/del/2023/05/imax-cinema-screen-source-supplied-188953-2.jpg"
            alt="IMAX 3D"
          />
        </div>
        <hr />

        <div className="container">
          <div className="text">
            <h1>Quantum Quests: Hands-On Physics Adventures</h1>
            <p>
              "Quantum Quests: Hands-On Physics Adventures" is a thrilling event
              at the Science Discovery Museum, immersing visitors in the wonders
              of quantum mechanics and classical physics through interactive
              exhibits and experiments.
            </p>
            <p>
              Highlights include a magnetic levitation demonstration, and a
              Quantum Mechanics Zone where guests explore superposition,
              entanglement, and quantum tunneling.
            </p>
            <p>
              "Quantum Quests" offers workshops led by physicists and educators,
              covering classical mechanics and the latest advancements in
              quantum research.
            </p>
          </div>
          <img
            src="https://149455152.v2.pressablecdn.com/wp-content/uploads/2014/06/AntimatterMatters-board.jpg"
            alt="Physics Adventure"
          />
        </div>
        <hr />

        <div className="container">
          <div className="text">
            <h1>Cosmic Horizons: An Immersive Space Adventure</h1>
            <p>
              "Cosmic Horizons: An Immersive Space Adventure" at the National
              Science Museum offers an exciting journey through the universe
              with themed sections and immersive experiences like the Solar
              System Pavilion and a dome theater simulation of the cosmos.
            </p>
            <p>
              "Cosmic Horizons" also features rocket-building workshops,
              telescope demonstrations, and virtual reality experiences for a
              hands-on exploration of space.
            </p>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Space_World_01.jpg"
            alt="Space Adventure"
          />
        </div>
      </section>

      <style jsx>{`
        .container {
          display: flex;
          align-items: flex-start;
          margin: 20px;
        }
        .text {
          flex: 1;
          padding-right: 20px;
        }
        img {
          width: 300px;
          height: 300px;
          background-color: #eaeaea;
          text-align: center;
          font-size: 18px;
          color: #666;
        }
        h1 {
          font-size: 24px;
          margin-bottom: 10px;
        }
        p {
          font-size: 16px;
          line-height: 1.6;
        }
        hr {
          margin: 30px 0;
          border: none;
          border-top: 1px solid #ccc;
        }
      `}</style>
    </div>
  );
};

export default Tickets;
