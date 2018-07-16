import React, {Component} from "react";
// import Person from "../components/Persons/Person/Person";
import Persons from "../components/Persons/Persons";
import MyHeader from "../components/Header/header";
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Button } from 'antd';
class App extends Component {

    constructor(props){
        super(props);
        console.log('constructor...');

        this.state ={
            persons: [
                {id: 1, name: "尼斯特玛", count: "11"},
                {id: 2, name: "尼斯特", count: "100"},
                {id: 3, name: "尼斯特ha", count: "54"}
            ],
            otherState: 10,
            showPersons: false
        }

    }

    componentWillMount(){
        console.log('componentWillMount...');
    }


    componentDidMount(){
        console.log('componentDidMount...');
    }

    render() {

        console.log('render...');
        let persons = null;
        if (this.state.showPersons) {
            // persons = (
            //     <div>
            //         {
            //             this.state.persons.map((value,number,persons)=>{
            //                 // console.log(value);
            //                 // console.log(number);
            //                 // console.log(persons);
            //                 return <Person
            //                     change={(event)=>this.updateTitle(event,value.id)}
            //                     myclick={()=>this.deleteItem(number)}
            //                     key={value.id}
            //                     name={value.name}
            //                     count={value.count}/>
            //             })
            //         }
            //         {/*<Person*/}
            //             {/*change={this.updateTitle}*/}
            //             {/*name={this.state.persons[0].name}*/}
            //             {/*count={this.state.persons[0].count}/>*/}
            //         {/*<Person*/}
            //             {/*myclick={this.updateData.bind(this, "wo de ma ya")}*/}
            //             {/*name={this.state.persons[1].name}*/}
            //             {/*count={this.state.persons[1].count}/>*/}
            //         {/*<Person*/}
            //             {/*name={this.state.persons[2].name}*/}
            //             {/*count={this.state.persons[2].count}>*/}
            //             {/*我是子标签*/}
            //         {/*</Person>*/}
            //     </div>
            // )
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deleteItem.bind(this)}
                changed={this.updateTitle}
            />
        }

        return (
            <div>
                <MyHeader
                    persons={this.state.persons}
                    clicked={this.togglePersons}/>
                {persons}

                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
            </div>
        );
    }

    togglePersons=()=> {
        const showPersons = this.state.showPersons;
        this.setState({showPersons: !showPersons});
    }

    deleteItem (number){
        //const persons = this.state.persons;
        const persons = [...this.state.persons];
        console.log(persons);
        persons.splice(number, 1);
        this.setState({
            persons: persons
        });
    }

    updateData = (props) => {
        this.setState({
            persons: [
                {name: props, count: "11111"},
                {name: "尼斯特", count: "100"},
                {name: "尼斯特haha", count: "54"}
            ]
        })
    }

    updateTitle = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        //const person = this.state.persons[personIndex];
        //console.log(person);
        person.name = event.target.value;

        // this.state.persons[personIndex].name = event.target.value;

        const persons = [...this.state.persons];
        //console.log(persons);

        persons[personIndex] = person;
        //
        // //this.setState(this.state.persons[personIndex].name = event.target.value);
        //
        //
        this.setState({
            // persons: [
            //     {name: event.target.value, count: "11111"},//target 目标对象
            //     {name: "尼斯特", count: "100"},
            //     {name: "尼斯特haha", count: "54"}
            // ]
            persons: persons
        })
    }
}

export default App;