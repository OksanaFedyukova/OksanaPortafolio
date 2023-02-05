import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const url = 'http://localhost:8000/api'

const ProjectsTable = () => {

    const [proyectos, setProyectos] = useState([]);

    useEffect( () => {
        getAllProyectos();
    }, [])

    const getAllProyectos = async () => {
        const response = await axios.get(`${url}/proyectos`);
        setProyectos(response.data);
    }

    const deleteProyecto = async (id) => {
        await axios.delete(`${url}/proyectos/${id}`);
        getAllProyectos();
    }

  return (
    <div>
        <Link to="/create"> Create </Link>

        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Repository</th>
                    <th>Demo</th>
                    <th>Poster</th>
                    <th>Technologies</th>
                </tr>
            </thead>
            <tbody>
                {
                    proyectos.map( (proyecto) => (
                        <tr key={proyecto.id}>
                            <td>{proyecto.name}</td>
                            <td>{proyecto.description}</td>
                            <td>{proyecto.github_link}</td>
                            <td>{proyecto.linkDemo}</td>
                            <td>{proyecto.poster}</td>
                            <td>{proyecto.technologies}</td>
                            <td>
                                <Link to={`/update/${proyecto.id}`} >Update</Link>
                                <button onClick={() => deleteProyecto(proyecto.id)} >Delete</button>
                            </td>

                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default ProjectsTable;