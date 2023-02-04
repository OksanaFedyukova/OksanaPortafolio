import { useState } from 'react';
import ProjectsList from './ProjectsList';
import Search from './Search';
import Header from './Header';
import { projects } from '../data/projects';
import { Container } from '@mui/system';
import ContactForm from './Form';

const App = () => {

    const [search, setSearch] = useState('');
    const [products, setProducts] = useState(projects);

    const handleChange = (e) => {
        if (!e.target.value) {
            setProducts(projects);
            setSearch('');
            return;
        }
        setSearch(e.target.value);
        setProducts(
            products.filter((projects) =>
                projects.description.toLowerCase().includes(e.target.value.toLowerCase())
            ))
    };


 return (
        <>
       <Header/>
       <Container sx={{ mt: '1rem'  }}>
                <Search value={search} onChange={handleChange} />
                <ProjectsList projects={products} />
       </Container>
        <ContactForm/>
        {/* FOOTER */}
        </>
    );
}

export default App;
