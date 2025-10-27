import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Chip,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  OpenInNew as OpenInNewIcon,
  Close as CloseIcon,
  Code as CodeIcon,
} from '@mui/icons-material';

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Applications' },
    { value: 'fullstack', label: 'Full Stack' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Phone E-Commerce Project',
      description: 'A full-stack e-commerce solution with React frontend, Redux and Stripe API (temporarily creating dummy payment gateway)',
      image: '/images/project1.jpg',
      category: 'fullstack',
      technologies: ['React', 'Redux', 'Stripe'],
      features: [
        'User authentication and authorization',
        'Shopping cart and checkout process',
        'Payment integration with Stripe',
        'Admin dashboard for product management',
        'Order tracking and history',
        'Responsive design for all devices'
      ],
      githubUrl: 'https://github.com/rahul-raj-18/React-Phone-E-Commerece-Project.git',
      liveUrl: ' https://master–phone-e-commerce-project.netlify.app/',
      longDescription: 'This comprehensive e-commerce platform was built to demonstrate modern web development practices. The application features a robust authentication system, secure payment processing, and a scalable architecture that can handle thousands of concurrent users.'
    },
    {
      id: 2,
      title: 'MERN Workout App',
      description: 'A collaborative workout application with real-time updates enabling userrs to track daily life workout progress',
      image: '/images/project2.jpg',
      category: 'web',
      technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
      features: [
        'Real-time collaboration',
        'Team member assignment',
        'Progress tracking and analytics',
        'File attachments and comments',
      ],
      githubUrl: 'https://github.com/username/task-manager',
      liveUrl: ' https://rahulraj07.netlify.app/login',
      longDescription: 'Built with modern technologies to provide seamless team collaboration. Features real-time updates.'
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
  };

  return (
    <Box id="projects" sx={{ py: 8, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 6,
            color: 'primary.main',
          }}
        >
          My Projects
        </Typography>

        {/* Category Tabs */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <Tabs
            value={selectedCategory}
            onChange={handleCategoryChange}
            variant={isMobile ? 'scrollable' : 'standard'}
            scrollButtons={isMobile ? 'auto' : false}
            sx={{
              '& .MuiTab-root': {
                fontWeight: 500,
                textTransform: 'none',
                fontSize: '1rem',
              },
            }}
          >
            {categories.map((category) => (
              <Tab key={category.value} value={category.value} label={category.label} />
            ))}
          </Tabs>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {filteredProjects.map((project) => (
            <Grid item xs={12} sm={6} lg={4} key={project.id}>
              <Card
                elevation={3}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    height: 200,
                    background: `linear-gradient(45deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <CodeIcon sx={{ fontSize: 60, color: 'white', opacity: 0.8 }} />
                </CardMedia>
                
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                    {project.technologies.map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{
                          fontSize: '0.75rem',
                          borderColor: theme.palette.primary.main,
                          color: theme.palette.primary.main,
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>

                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    size="small"
                    startIcon={<GitHubIcon />}
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    sx={{ mr: 1 }}
                  >
                    Code
                  </Button>
                  <Button
                    size="small"
                    startIcon={<OpenInNewIcon />}
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    sx={{ mr: 1 }}
                  >
                    Live
                  </Button>
                  <Button
                    size="small"
                    onClick={() => handleProjectClick(project)}
                    sx={{ ml: 'auto' }}
                  >
                    Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Project Details Dialog */}
        <Dialog
          open={!!selectedProject}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
          fullScreen={isMobile}
        >
          {selectedProject && (
            <>
              <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  {selectedProject.title}
                </Typography>
                <IconButton onClick={handleCloseDialog}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              
              <DialogContent>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
                    {selectedProject.longDescription}
                  </Typography>
                </Box>

                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                  Key Features
                </Typography>
                <Box sx={{ mb: 3 }}>
                  {selectedProject.features.map((feature, index) => (
                    <Typography key={index} variant="body2" sx={{ mb: 1, pl: 2, position: 'relative' }}>
                      <Box
                        component="span"
                        sx={{
                          position: 'absolute',
                          left: 0,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          backgroundColor: theme.palette.primary.main,
                        }}
                      />
                      {feature}
                    </Typography>
                  ))}
                </Box>

                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                  Technologies Used
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {selectedProject.technologies.map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech}
                      variant="outlined"
                      sx={{
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                      }}
                    />
                  ))}
                </Box>
              </DialogContent>

              <DialogActions sx={{ p: 3 }}>
                <Button
                  onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                  startIcon={<GitHubIcon />}
                  variant="outlined"
                >
                  View Code
                </Button>
                <Button
                  onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                  startIcon={<OpenInNewIcon />}
                  variant="contained"
                >
                  Visit Live Site
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default Projects;
