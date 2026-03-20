function Practical20(){
    const Stud=["varad","saksham","Krishna","aayush"];
    return(
        <>
        <h2>List with key</h2>
        <ol>
            {Stud.map((name, index) => (
            <li key={index}> {name}</li>
))}
        </ol>
        </>
    );
}
export default Practical20;
