import "./styles.css";
import FlipCard from "./Components/FlipCard"; // Import your FlipCard component

export default function App() {
  // Create cardData array to be used for FlipCard components mapping
  const cardData = [
    {
      frontTitle: "Ferrari",
      frontContent: [
        "Top Speed: 350km/h",
        "Horsepower: 963hp",
        "Maximum torque: 900Nm",
        "Weight: 1.37t",
        "Engine Size: 6.3L",
      ],
      frontImage:
        "https://images.unsplash.com/photo-1606220838305-76728194b793?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      backTitle: "Details",
      backContent:
        "The Ferrari 458 Italia is a mid-engine sports car produced by Ferrari. The 458 is the successor of the F430, and was first officially unveiled at the 2009 Frankfurt Motor Show.",
      backImage:
        "https://images.unsplash.com/photo-1606220838315-a943a3487c23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      frontTitle: "Mustang GT",
      frontContent: [
        "Top Speed: 250km/h",
        "Horsepower: 963hp",
        "Maximum torque: 900Nm",
        "Weight: 1.37t",
        "Engine Size: 3.3L",
      ],
      frontImage:
        "https://images.unsplash.com/photo-1606222742862-2087d75e8334?ixlib=rb-4.0.3&ixid=M3xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      backTitle: "Details",
      backContent:
        "The sixth-generation Ford Mustang (S550) is a pony car that was manufactured by Ford from 2014 until 2023. The Mustang was introduced as a 2015 model year vehicle.",
      backImage:
        "https://images.unsplash.com/photo-1606222742864-7c09da77e0ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      frontTitle: "Renault",
      frontContent: [
        "Top Speed: 160km/h",
        "Horsepower: 963hp",
        "Maximum torque: 900Nm",
        "Weight: 1.37t",
        "Engine Size: 2.5L",
      ],
      frontImage:
        "https://images.unsplash.com/photo-1612721678871-415f9cebc144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      backContent:
        "The Renault Megane, also spelled without the acute accent as Megane, especially in languages other than French, and also known as the Renault Megavan for an LCV in Ireland.",
      backTitle: "Details",
      backImage:
        "https://images.unsplash.com/photo-1612721678873-28498ae6c991?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <>
      <h1 className="title">2-sided Flip Animation Card</h1>
      <div className="App">
        {/* Map over the cardData array to create FlipCard components */}
        {cardData.map((card, index) => (
          <FlipCard
            key={index}
            frontTitle={card.frontTitle}
            frontContent={card.frontContent}
            frontImage={card.frontImage}
            backTitle={card.backTitle}
            backContent={card.backContent}
            backImage={card.backImage}
          />
        ))}
      </div>
    </>
  );
}
