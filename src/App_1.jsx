import './App.css';
// import Main from './Main';
// import  Slider  from './Slider';
// import  Subscribe  from './Subscribe';
// import  Aside  from './Aside';

import { Main } from './Main';
import { Slider } from './Slider';
import { Subscribe } from './Subscribe';
import { Aside } from './Aside';
import { About } from './About';

const App_1=()=> {
  return (

    <div className='App_1'>

      <Main/>
      <Aside message='Сейчас на сайте:'/>
      <Slider/>
      <About/>
    </div>
   
  );
}

export default App_1;
