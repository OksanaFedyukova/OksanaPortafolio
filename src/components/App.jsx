import { useState } from 'react';
import ProjectsList from './ProjectsList';
import Search from './Search';

import { projects } from '../data/projects';

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
            products.filter((good) =>
                good.name.toLowerCase().includes(e.target.value.toLowerCase())
            ))
    };


    return (
        <div className='App'>
            <div className='container'>
                
                <ProjectsList
                    projects={products} />

                <Search
                    value={search}
                    onChange={handleChange} />
            </div>
        </div>
    );
}

export default App;
