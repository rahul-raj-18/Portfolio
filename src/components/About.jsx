import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  Avatar,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Code as CodeIcon,
  School as SchoolIcon,
  Work as WorkIcon,
  Timeline as TimelineIcon,
} from '@mui/icons-material';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const skills = [
    { name: 'React', level: 85 },
    { name: 'JavaScript', level: 95 },
    { name: 'Node.js', level: 90 },
    { name: 'Express.js', level: 90 },
    { name: 'Redux', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'MongoDB', level: 80 },
    { name: 'HTML', level: 80 },
    { name: 'CSS', level: 70 },
    { name: 'Material UI', level: 75 },
    { name: 'Tailwind CSS', level: 75 },
  ];

  const technologies = [
    'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL',
    'TypeScript', 'Python', 'Django', 'AWS', 'Docker', 'Git',
    'Material-UI', 'Tailwind CSS', 'Jest', 'Cypress'
  ];

  const experiences = [
    {
      title: 'Software Developer',
      company: 'Techbridge Consultancy Services',
      period: 'Dec 2023 - Sept 2025',
      description: 'Leading development of scalable web applications using React and Node.js. Mentoring junior developers and implementing best practices.',
    },
    {
      title: 'Full-Stack Developer',
      company: 'DigiXL Inc.',
      period: 'Sept 2022 - Dec 2023',
      description: 'Developed and maintained multiple web applications, improved system performance by 40%, and collaborated with cross-functional teams.',
    },
    {
      title: 'Full-Stack Developer',
      company: 'Fargowiz Ltd.',
      period: 'Feb 2022 - Aug 2022',
      description: 'Built responsive user interfaces and integrated with REST APIs. Gained experience in agile development methodologies.',
    },
  ];

  const education = [
    {
      degree: 'B.Tech',
      school: 'Future Institute of Engineering And Management, Kolkata',
    },
  ];

  return (
    <Box id="about" sx={{ py: 8, backgroundColor: 'background.default' }}>
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
          About Me
        </Typography>

        <Grid container spacing={6}>
          {/* About Text */}
          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  My Journey
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                  I'm a passionate software developer with over 4 years of experience in building 
                  modern web applications. My journey began with a curiosity about how websites 
                  work, which led me to pursue Computer Science and eventually specialize in 
                  full-stack development.
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                  I love creating user-friendly applications that solve real-world problems. 
                  My expertise spans across the entire development stack, from designing 
                  intuitive user interfaces to building robust backend systems and deploying 
                  applications to the cloud.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  When I'm not coding, you can find me contributing to open-source projects, 
                  learning new technologies, or sharing knowledge with the developer community.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Skills */}
          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Technical Skills
                </Typography>
                <Grid container spacing={3}>
                  {skills.map((skill, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Box 
                        sx={{ 
                          mb: 3,
                          p: 2,
                          borderRadius: 2,
                          backgroundColor: 'rgba(25, 118, 210, 0.02)',
                          border: '1px solid rgba(25, 118, 210, 0.1)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(25, 118, 210, 0.05)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 4px 12px rgba(25, 118, 210, 0.15)',
                          }
                        }}
                      >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, px: 1 }}>
                          <Typography variant="body1" sx={{ fontWeight: 600, fontSize: '0.95rem', color: 'text.primary', flex: 1 }}>
                            {skill.name}
                          </Typography>
                          <Box sx={{ mx: 2, flexShrink: 0 }}>
                            <Box
                              sx={{
                                backgroundColor: theme.palette.primary.main,
                                color: 'white',
                                borderRadius: '50%',
                                width: 36,
                                height: 36,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                boxShadow: '0 2px 8px rgba(25, 118, 210, 0.3)',
                              }}
                            >
                              {skill.level}%
                            </Box>
                          </Box>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: 'rgba(0, 0, 0, 0.08)',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 4,
                              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                              boxShadow: '0 2px 4px rgba(25, 118, 210, 0.3)',
                            },
                          }}
                        />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Experience */}
          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  <WorkIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                  Experience
                </Typography>
                {experiences.map((exp, index) => (
                  <Box key={index} sx={{ mb: 3, pb: 3, borderBottom: index < experiences.length - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                      {exp.title}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 500, color: 'text.secondary' }}>
                      {exp.company}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                      {exp.period}
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                      {exp.description}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>

          {/* Education */}
          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  <SchoolIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                  Education
                </Typography>
                {education.map((edu, index) => (
                  <Box key={index} sx={{ mb: 3, pb: 3, borderBottom: index < education.length - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                      {edu.degree}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 500, color: 'text.secondary' }}>
                      {edu.school}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                      {edu.year}
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                      {edu.description}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
