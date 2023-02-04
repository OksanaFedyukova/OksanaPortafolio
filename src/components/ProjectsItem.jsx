
import React from 'react';
import {Card, CardMedia, Grid, CardContent, Typography, Button, CardActions, Link} from '@mui/material';




const ProjectsItem = (props) => {
     const { name, description, poster, linkDemo} = props;

    return (
      <Grid mb={4} xs={12} md={4} sm={6} spacing={4} >
          <Card sx={{
             minHeight: '200px',
           
          }}>

          <CardMedia
                    image={poster}
                    alt={name}
                    title={name}
                    sx={{height: 140 }}
                    />
            <CardContent >
                <Typography  variant="h6" component="h3" >{name}</Typography>
                <Typography variant="body1">{description}</Typography>
            </CardContent>
            <CardActions>
                        <Link to={linkDemo}><Button color="pomegranate" > View DEMO
                       </Button> 
                    </Link>
                  
                    </CardActions>
             </Card>
        </Grid>
       
    );
    
};

export default ProjectsItem;