import React from 'react';

import ProjectsItem from './ProjectsItem';

const ProjectsList = (props) => {
    const { projects, setOrder } = props;

    return (
        <div className='projects-list col-md-8'>
            <div className='row'>
                {projects.map((item) => (
                    <ProjectsItem key={item.id} setOrder={setOrder} {...item} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsList;