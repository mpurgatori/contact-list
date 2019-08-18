import React, {Component} from 'react';
import './App.css';
import List from './components/List';
import { loadList } from "./actions/LoadList";
import ContactForm from './components/ContactForm';


class App extends Component {

  state = {

    One: [],
    Two: [],
    lastSortAscend: {
      One: {
        first_name:false,
        last_name:false,
        gender:false,
        email:false,
      },
      Two: {
        first_name:false,
        last_name:false,
        gender:false,
        email:false,
      }
    },
    loadedContact: {
        first_name:'',
        last_name:'',
        gender:'Female',
        email:'',
        id: 0
    },
    highId: 0

  }

  componentDidMount() {

    const ListData = loadList();
    const highId = ListData.sort((a,b) => b.id - a.id)[0].id;    
    this.setState({One: [...ListData], Two: [], highId});

  }

  sortColumn =(sortKey, listNumber) => {

    const {lastSortAscend} = this.state;
    const sortedList = lastSortAscend[listNumber][sortKey] ? this.state[listNumber].sort((a,b) => a[sortKey].localeCompare(b[sortKey])) :
    this.state[listNumber].sort((a,b) => b[sortKey].localeCompare(a[sortKey]))

    const newSortState = {
      ...lastSortAscend,
    }
    newSortState[listNumber][sortKey] = lastSortAscend[listNumber][sortKey] ? false: true;
    
    this.setState({
      [listNumber]:sortedList,
      lastSortAscend: newSortState
    });
  }

  deleteContact = (id, listNumber) => {

    const removeIndex = this.state[listNumber].map(contact => contact.id ).indexOf(id);
    const deletedFromList = [...this.state[listNumber]];
    deletedFromList.splice(removeIndex, 1);
    this.setState({[listNumber]:deletedFromList});


  }

  shiftContact = (id, listNumber) => {

    const removeIndex = this.state[listNumber].map(contact => contact.id ).indexOf(id);
    const deletedFromList = [...this.state[listNumber]];
    const secondListNumber = listNumber === 'One' ? 'Two': 'One';
    const secondList = [...this.state[secondListNumber]];
    const addToList = deletedFromList.splice(removeIndex, 1);
    secondList.unshift(addToList[0]);
    this.setState({[listNumber]:deletedFromList, [secondListNumber]: secondList});

  }

  loadContact = (contactInfo) => {

    this.setState({loadedContact:contactInfo});

  }

  findLastId = (listNum) => {


  }

  addEditContact = (contact) => {

    console.log('contact',contact);

  }

  render() {

    const { One, Two, lastSortAscend, loadedContact } = this.state;
    const { sortColumn, deleteContact, shiftContact, loadContact, addEditContact } = this;

    const listNum = [
      {
        num: 'One',
        contactList: One
      },
      {
        num: 'Two',
        contactList: Two
      }
    ]; 

    return (
      <div className="App">
        <div className="container">
        <ContactForm loadedContact={loadedContact} addEditContact={addEditContact} />
          <div className="row">
          {
            listNum.map((list, index) => {
  
               return <List key={index} 
                          lastSortAscend={lastSortAscend[list.num]} 
                          sortColumn={sortColumn} 
                          contactList={list.contactList} 
                          listNumber={list.num}
                          deleteContact={deleteContact} 
                          shiftContact={shiftContact}
                          loadContact={loadContact}
                        />
            })
          }
          </div>
        </div>
      </div>
    );
  }

}

export default App;
