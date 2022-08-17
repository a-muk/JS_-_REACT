// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import {UserProvider} from './components4/UserContext'
// import BindingExample from './components4/BindingExample';
// import Simpleusestate from './component5/Simpleusestate';
// import Prevstate from './component5/Prevstate';
// import Objectcmp from './components4/Objectcmp';
// import Arraycmp from './component5/Arraycmp';
import ComponentD from './component6/ComponentD';

// import FunctionalProp from './components3/FunctionalProp';
// import Functionalcompprops from './components2/Functionalcompprops';
// import Classcompsprops from './components2/Classcompsprops';
// import Classcompstate from './components2/Classcompstate';
// import Functional_comp from './components/Functional_comp.js';
// import Class_comp from './components/Class_comp.js';
// import Listcomp from './components3/Listcomp.js'
// import Usecss from './components3/Usecss';
// import Conditionalclass from './components3/Conditionalclass';
// import { Component } from 'react';
// import ContextcomponentsC from './components4/ContextcomponentsC';
// import ContextcomponentsE from './components4/ContextcomponentsE';
// import ContextcomponentsF from './components4/ContextcomponentsF';
export const UserContext= React.createContext();
export const ChannelContext= React.createContext();

function App() {
  return (

    <div>
      <UserContext.Provider value="Attreyee">
        <ChannelContext.Provider value="ABC">
          <ComponentD/>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  // function showName(name){
  //   console.log("my name is "+ name);
  // }
  // //don't put more than two components 
  // return ( 
  //   // <div>
  //   //   <Class_comp></Class_comp> 
  //   // </div>
  //   // the function name should be the html tag 
  //   // returns an html type format

  //   <div>
  //     {/*<Functionalcompprops name="Attreyee" rn="31"></Functionalcompprops>
  //     <Functionalcompprops name="ABC" rn="62"></Functionalcompprops>
  //     <Classcompsprops name="Attreyee" rn="31"></Classcompsprops>
  //     <Classcompsprops name="ABC" rn="25"></Classcompsprops>
  //     <Classcompstate></Classcompstate>*/}
  //     {/* <FunctionalProp showname={showName}></FunctionalProp> */}
  //     {/* <Listcomp></Listcomp> */}
  //     {/* <Usecss></Usecss> */}
  //     {/* <Conditionalclass></Conditionalclass> */}
  //     {/* <UserProvider value="attreyee">
  //       <ContextcomponentsE></ContextcomponentsE>
  //     </UserProvider> */}
  //     {/* <Prevstate></Prevstate> */}
  //     {/* <Objectcmp></Objectcmp> */}
  //     <Arraycmp></Arraycmp>
      
  // </div>
  
  );
}
export default App;
