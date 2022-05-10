import * as React from 'react';
import './styles/App.scss'
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import Balance from './components/Balance';
import DisplayBalances from './components/DisplayBalance/DisplayBalances';
import EntryLine from './components/EntryLine';

const App = () => {
  return (
    <div>
      <MainHeader title='Budget' type='h2'></MainHeader>
      <Balance title="Your balance" amount={0}/>
      <DisplayBalances></DisplayBalances>
      <div>
        <MainHeader title='Hystory' type='h6'></MainHeader>
        <EntryLine label='Something' value='100.00'></EntryLine>
        <EntryLine label='Something 2' value='-100.00' isExpense></EntryLine>
        <EntryLine label='Something 3' value='100.00'></EntryLine>
      </div>
      <div>
        <MainHeader title='Add Transaction' type='h6'></MainHeader>
        <NewEntryForm></NewEntryForm>
      </div>
    </div>
  );
}

export default App;
