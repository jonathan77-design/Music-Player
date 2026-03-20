function Parent() {

    const Stud = ["Aayush", "saksham", "Krishna", "Varad"];
  
    return (
      <>
        <h2>Names Starting With A</h2>
        <ol>
          {Stud
            .filter(name => name.startsWith("A"))
            .map((name, index) => (
              <li key={index}>{name}</li>
            ))
          }
        </ol>
      </>
    );
  }
  
  export default Parent;
  