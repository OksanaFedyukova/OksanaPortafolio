import { Grid } from '@mui/material';
import React from 'react';

import ProjectsItem from './ProjectsItem';

const ProjectsList = (props) => {
    const { projects, setOrder } = props;

    return (
       <Grid container spacing={2}  
        >
                {projects.map((item) => (
                    <ProjectsItem key={item.id} setOrder={setOrder} {...item} />
                ))}
         
        </Grid>
       
    );
};

export default ProjectsList;