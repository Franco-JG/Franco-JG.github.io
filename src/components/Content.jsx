import { Box, Container, Typography, Paper } from '@mui/material';

const Content = () => {
  return (
    <Box sx={{ mt: '100vh' }}> {/* Changed from pt to mt since it's now positioned relative to Home */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h2" gutterBottom>Welcome to My Portfolio</Typography>
          <Typography paragraph>
            I'm a developer passionate about creating immersive web experiences using modern technologies
            like React, Three.js, and GSAP.
          </Typography>
          
          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>Skills</Typography>
          {Array(5).fill(0).map((_, index) => (
            <Typography key={index} paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
              Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus 
              rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna 
              non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut 
              dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut.
            </Typography>
          ))}
          
          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>Projects</Typography>
          {Array(5).fill(0).map((_, index) => (
            <Typography key={`p-${index}`} paragraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
              veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </Typography>
          ))}
        </Paper>
      </Container>
    </Box>
  );
};

export default Content;