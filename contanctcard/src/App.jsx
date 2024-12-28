import React from 'react';
import Card from '../components/card';


function App() {
    return (
        <div className="contacts">

            <Card  image="cat1.jfif"
             name="Mr.Whisperson"
            phone="(212) 555-1234" 
             email="Whisperson@gmail.com"/>

            <Card   image="cat2.jfif" 
            name="Mr.Murr"
            phone="(202) 555-1234"  
            email="Murr@gmail.com"/>

            <Card  image="cat3.jfif" 
            name="Mr.Aestroid Destroyer"
            phone="(222) 555-1234"
              email="Destroyer@gmail.com"/>

            <Card  image="cat4.jfif" 
            name="Mr.Sleepy"
           phone="(242) 555-1234" 
            email="Sleepy@gmail.com"/>

        </div>
    );
}

export default App;