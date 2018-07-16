import React from 'react';
import Person from './Person/Person'


const Persons = (props) => {

    return props.persons.map((value, number, array) => {
        return <Person
                    key={value.id}
                    name={value.name}
                    count={value.count}
                    myclick={()=>props.clicked(number)}
                    change={(event)=>props.changed(event,value.id)}
                />
    });


}

export default Persons;