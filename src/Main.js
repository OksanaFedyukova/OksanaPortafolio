

import { Route, BrowserRouter, Routes } from 'react-router-dom';
import App from './components/App';
import ContactForm from './components/ContactForm';

import Dashboard from './components/Dashboord';
import ProjectsTable from './components/ProjectsTable';

import  CreateForm  from './components/Create';
import Update from './components/Update'




function Main() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/contact' element={<ContactForm/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/projects' element={<ProjectsTable/>} />
            <Route path='/create' element={<CreateForm/>} />
            <Route path='/edit/:id' element={<Update/>}/>
          </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default Main;