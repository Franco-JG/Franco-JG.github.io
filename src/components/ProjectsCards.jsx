import { Typography, Grid2, Card, CardContent, CardMedia, CardActions, Button, Box, Stack, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import projects from '../data/projects';
import ComingSoonCard from './ComingSoonCard';

const ProjectsCards = () => {
  return (
    <Grid2 container spacing={4}>
      {projects.map((project) =>
      (
        <Grid2 key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgba(30, 30, 60, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '15px',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
              }
            }}
          >
            {project.featured && (
              <Box
                sx={{
                  position: 'absolute',
                  top: 15,
                  right: 15,
                  bgcolor: '#ff5cb8',
                  color: 'white',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 5,
                  fontSize: '0.7rem',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  zIndex: 1,
                }}
              >
                Destacado
              </Box>
            )}

            {project.image && (
              <CardMedia
                component="img"
                height="180"
                image={project.image}
                alt={project.title}
                sx={{
                  objectFit: 'cover',
                  borderTopLeftRadius: '15px',
                  borderTopRightRadius: '15px',
                }}
              />
            )}

            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#0ef' }}>
                {project.title}
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2, color: '#f5f5f5' }}>
                {project.description}
              </Typography>

              <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ my: 2, gap: 1 }}>
                {project.technologies.map((tech, idx) => (
                  <Chip
                    key={idx}
                    label={tech}
                    size="small"
                    sx={{
                      bgcolor: 'rgba(14, 255, 255, 0.1)',
                      color: '#0ef',
                      mb: 1,
                    }}
                  />
                ))}
              </Stack>
            </CardContent>

            <CardActions sx={{ p: 2, pt: 0 }}>
              <Button
                size="small"
                startIcon={<GitHubIcon />}
                onClick={() => window.open(project.githubUrl, '_blank')}
                sx={{
                  color: '#f5f5f5',
                  '&:hover': { color: '#ff5cb8' }
                }}
              >
                Código
              </Button>

              {project.liveUrl && (
                <Button
                  size="small"
                  startIcon={<LaunchIcon />}
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  sx={{
                    color: '#f5f5f5',
                    '&:hover': { color: '#0ef' }
                  }}
                >
                  Demo
                </Button>
              )}
            </CardActions>
          </Card>
        </Grid2>
      ))}

      <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
        <ComingSoonCard />
      </Grid2>

    </Grid2>
  )
}

export default ProjectsCards;