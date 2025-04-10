import { Container, Typography, Paper, Stack, Divider } from '@mui/material';
import PropTypes from 'prop-types';

function Lorem({ lorems = 1 }) {
  // Generate an array with the specified number of elements
  const articles = Array.from({ length: lorems }, (_, index) => index);

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Stack spacing={6}>
        {articles.map((_, index) => (
          <Paper key={index} elevation={0} sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Article {index + 1}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget urna ultrices maximus. 
              Sed vitae justo at eros tempus sollicitudin. Praesent ut mi lectus. Mauris eget ipsum eget orci 
              tincidunt eleifend. Nulla facilisi. Donec ac leo neque.
            </Typography>
            <Typography variant="body1" paragraph>
              Cras vel nisl gravida, lobortis sem vitae, sagittis mi. Phasellus congue, orci nec efficitur 
              finibus, nulla lorem finibus lorem, non dignissim eros dui eget purus. Etiam at ultrices erat. 
              Vestibulum sed nunc magna. Integer tempus convallis magna, at efficitur arcu vehicula ac.
            </Typography>
            <Typography variant="body1">
              Suspendisse potenti. Nullam vitae dapibus purus. Donec auctor, ex sit amet fringilla feugiat, 
              ipsum leo vulputate neque, id finibus quam ligula nec eros. Suspendisse mattis lorem nisi, in 
              hendrerit arcu ultricies at.
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Container>
  );
}
Lorem.propTypes = {
  lorems: PropTypes.number,
};

export default Lorem;