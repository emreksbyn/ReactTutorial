import React from 'react';
import './App.css';
import ContactApp from './Contacts-App/ContactApp';
import ComponentsApp from './PartOfComponents/ComponentsApp';
import FetchApp from './PartOfFetching/FetchApp';
import LifecycleApp from './PartOfLifecycle/LifecycleApp';
import PropsApp from './PartOfProps/PropsApp';
import StatesApp from './PartOfStates/StatesApp';
import StyleDefinitonsApp from './PartOfStyleDefinitons/StyleDefinitionsApp';

// Bu fonks icine hangi part kullanılacaksa o ekleniyor.
function App() {
  // return React.createElement("div", null, "Hello");
  return (
    <>
      {/* <ComponentsApp /> */}
      {/* <PropsApp /> */}
      {/* <StatesApp /> */}
      {/* <LifecycleApp/> */}
      {/* <ContactApp /> */}
      {/* <StyleDefinitonsApp /> */}
      <FetchApp />
    </>
  );
}

export default App;
