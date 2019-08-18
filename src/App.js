import React, {Component} from 'react';
import List from './components/List';
import { loadList } from "./actions/LoadList";
import ContactForm from './components/ContactForm';


//Parent Component that renders the two lists as well as form for adding and editing contacts.
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
        gender:'Male',
        email:'',
        id: null
    },
    highId: 0

  }

  //On component mount, app calls loadlist which is a function meant to mimic a redux action that basically just returns the contact json
  //Also finds the highest id in list in order to increment new contacts from that id. The json is pre sorted but this would not be a given for a real application
  componentDidMount() {

    const ListData = loadList();
    const highId = ListData.sort((a,b) => b.id - a.id)[0].id;    
    this.setState({One: [...ListData], Two: [], highId});

  }

  //Sorts Table columns and renders new ordered list to state
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

  //Removes a contact by id from specified list
  deleteContact = (id, listNumber) => {

    const removeIndex = this.state[listNumber].map(contact => contact.id ).indexOf(id);
    const deletedFromList = [...this.state[listNumber]];
    deletedFromList.splice(removeIndex, 1);
    this.setState({[listNumber]:deletedFromList});


  }

  //Removes a contact by id from specified list and adds to front of other list
  shiftContact = (id, listNumber) => {

    const removeIndex = this.state[listNumber].map(contact => contact.id ).indexOf(id);
    const deletedFromList = [...this.state[listNumber]];
    const secondListNumber = listNumber === 'One' ? 'Two': 'One';
    const secondList = [...this.state[secondListNumber]];
    const addToList = deletedFromList.splice(removeIndex, 1);
    secondList.unshift(addToList[0]);
    this.setState({[listNumber]:deletedFromList, [secondListNumber]: secondList});

  }

  //Passes contact that has been double clicked down to form component
  loadContact = (contactInfo, listNumber) => {

    this.setState({loadedContact:{...contactInfo,listNumber}});
    
  }
  
  addEditContact = (contact, listSelect) => {
        
    const loadedContactDefault = {
      first_name:'',
      last_name:'',
      gender:'Female',
      email:'',
      id: null
    };

    let removeList = null;
    if (contact.listNumber !== listSelect) {

      removeList = [...this.state[contact.listNumber]]

    }

    let newList = [...this.state[listSelect]]

    //If contact id is null don't bother looping, just place new contact on specified list
    if (contact.id === null) {

      let high = this.state.highId;
      contact.id = ++high;
      newList.unshift(contact);
      this.setState({[listSelect]: newList, highId: contact.id, loadedContact:loadedContactDefault});
    }
    //If edited contact came from a list that it not being sent to, remove from list A and set to list B
    else {
      if (removeList) {
        for (let i= 0; i < removeList.length; i++) {
          if (removeList[i].id === contact.id) {
            removeList.splice(i,1);
            newList.unshift(contact);
            this.setState({[listSelect]: newList,[contact.listNumber]:removeList, loadedContact:loadedContactDefault});
            return;
          }
        }
      }
      //If contact is being edited from and placed in the same list
      else {
        for (let i= 0; i < newList.length; i++) {
          if (newList[i].id === contact.id) {
            newList.splice(i,1);
            newList.unshift(contact);
            this.setState({[listSelect]: newList, loadedContact:loadedContactDefault});
            return;
          }
        }
      }

    }
    
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
        <h1 className="mt-5">Contact Manager</h1>
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
