import React from 'react';
import './App.css';
import ContactApp from './Contacts-App/ContactApp';
import ComponentsApp from './PartOfComponents/ComponentsApp';
import LifecycleApp from './PartOfLifecycle/LifecycleApp';
import PropsApp from './PartOfProps/PropsApp';
import StatesApp from './PartOfStates/StatesApp';

// Bu fonks icine hangi part kullanılacaksa o ekleniyor.
function App() {
  // return React.createElement("div", null, "Hello");
  return (
    <>
      {/* <ComponentsApp /> */}
      {/* <PropsApp /> */}
      {/* <StatesApp /> */}
      {/* <LifecycleApp/> */}
      <ContactApp />
    </>
  );
}

export default App;
