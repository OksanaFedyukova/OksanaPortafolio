
import React from 'react';
import {Card, CardMedia, Grid, CardContent, Typography, Button, CardActions, Link} from '@mui/material';




const ProjectsItem = (props) => {
     const { name, description, poster, linkDemo} = props;
     const handleClick = () => {
        window.open(linkDemo, "_blank");
      };
    
    return (
        

      <Grid mb={4} xs={12} md={4} sm={6} spacing={4} >

          <Card sx={{
             maxHeight: '600px',
            ml:'20px'
          }}>

          <CardMedia
                    image={poster}
                    alt={name}
                    title={name}
                    sx={{height: 140 }}
                    />
            <CardContent >
                <Typography  variant="h6" component="h3" >{name}</Typography>
                <Typography variant="body2">{description}</Typography>
            </CardContent>
            <CardActions>
            <Button color="primary" onClick={handleClick}>View Demo</Button>
                  
                    </CardActions>
             </Card>
        </Grid>
    
    );
    
};

export default ProjectsItem;