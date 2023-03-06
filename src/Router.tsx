
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FormStep1 } from './pages/FormStap1';
import { FormStap2 } from './pages/FormStap2';
import { FormStap3 } from './pages/FormStap3';

export const Router = () => {

  return(


    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <FormStep1/>} />
        <Route path='/page2' element={<FormStap2/>} />
        <Route path='/page3' element={ <FormStap3/>} />
      </Routes>
    </BrowserRouter>

  )
}