import React, {Component} from 'react';
import './App.css';
import List from './components/List'
import { loadList } from "./actions/LoadList"

class App extends Component {

  state = {

    contacts1: [],
    contacts2: []

  }

  componentDidMount() {

    const ListData = loadList();
    this.setState({contacts1: ListData});

  }

  render() {

    const { contacts1, contacts2 } = this.state;

    const listNum = [
      {
        num: 'One',
        contactList: contacts1
      },
      {
        num: 'Two',
        contactList: contacts2
      }
    ]; 

    return (
      <div className="App">
        <div className="container">
          <div className="row">
          {
            listNum.map(list => {
  
               return <List conactList={list.contactList} listNumber={list.num} />
  
            })
          }
          </div>
        </div>
      </div>
    );
  }

}

export default App;
