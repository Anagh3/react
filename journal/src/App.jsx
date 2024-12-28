import Header from "../components/header"
import Entry from "../components/Entry"
import data from "../components/data.js"
export default function App() {


    const entryelements=data.map((entry)=>{
        return(
            <Entry
            key={entry.id}
          entry={entry}         
                  />
        )
    })





    return (
        <>
            <Header />
            <main className="container">
                {entryelements}
            </main>
        </>
    )
}