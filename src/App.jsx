import './App.css';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import { About } from './About';

// import Main from './Main';
// import  Slider  from './Slider';
// import  Subscribe  from './Subscribe';
// import  Aside  from './Aside';


import { Route, Routes } from 'react-router-dom';



import { Questionnaire } from './Questionnaire';
import App_1 from './App_1';

const App=()=> {
  return (

    <div className='App'>
      <Header/>
      <Nav/>
      <Routes>
            <Route path='/questionnaire' element={<Questionnaire/>}/>
            <Route path='/home' element={<App_1/>}/>
            <Route path='/about' element={<About/>}/>
            {/* <Route path='/home' element={<Aside/>}/>
            <Route path='/home' element={<Slider/>}/>
            <Route path='/home' element={<Subscribe/>}/> */}
       
        </Routes>
        
         {/* <Main/>
        <Aside/>
        <Slider message="Нашедшие пару" message1="Отзывы наших посетителей, нашедших свои половинки."/>
        <Subscribe/> */}


      <Footer/>
    </div>
   
  );
}

export default App;
