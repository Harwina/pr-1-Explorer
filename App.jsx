import Person from "./Person";

function App() {
  const us = [
    {
      grid: 1,
      name: 'Kishan',
      email: 'kishan@gmail.com',
      password: 'kishan@123',
      course: ["html", "css", "bootstrap", "js"],
      city: "Surat"
    },
    {
      grid: 2,
      name: 'Jay',
      email: 'jay@gmail.com',
      password: 'kishan@123',
      course: ["photoshop", "figma", "illustrator", "adobe xd"],
      city: "Rajkot"
    },
    {
      grid: 3,
      name: 'Ajay',
      email: 'ajay@gmail.com',
      password: 'ajay@123',
      course: ["html", "css", "bootstrap", "nodejs"],
      city: "Amreli"
    },
    {
      grid: 4,
      name: 'Nisha',
      email: 'nisha@gmail.com',
      password: 'nisha@123',
      course: ["html", "css", "bootstrap", "python"],
      city: "Vadodara"
    }
  ];

  

  return (
    <>
      <Person
        persons={us}
      />
    </>
  );
}

export default App;
