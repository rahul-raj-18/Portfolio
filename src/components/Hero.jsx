import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Avatar,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Email as EmailIcon,
  Download as DownloadIcon,
} from '@mui/icons-material';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDownloadResume = () => {
    // In a real application, you would link to your actual resume PDF
    const link = document.createElement('a');
    link.href = '/Rahul Raj Resume.pdf'; // Replace with actual resume path
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSocialClick = (platform) => {
    const urls = {
      linkedin: 'https://www.linkedin.com/in/rahul-raj-techenthu/',
      github: 'https://github.com/rahul-raj-18',
      email: 'mailto:me.rahulraj07@gmail.com',
    };
    window.open(urls[platform], '_blank');
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3,
        }}
      />
      
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: isMobile ? 'center' : 'left' }}>
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Hi, I'm Rahul Raj
              </Typography>
              
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 400,
                  mb: 3,
                }}
              >
                Full-Stack Software Developer
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  mb: 4,
                  maxWidth: 500,
                }}
              >
                Passionate about creating innovative web applications with modern technologies. 
                I specialize in React, Node.js, and cloud solutions with 4+ years of experience 
                building scalable software solutions.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                <Chip
                  label="React"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontWeight: 500,
                  }}
                />
                <Chip
                  label="Redux"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontWeight: 500,
                  }}
                />
                <Chip
                  label="Node.js"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontWeight: 500,
                  }}
                />
                <Chip
                  label="TypeScript"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontWeight: 500,
                  }}
                />
                <Chip
                  label="JavaScript"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontWeight: 500,
                  }}
                />
                <Chip
                  label="PostgreSQL"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontWeight: 500,
                  }}
                />
                <Chip
                  label="MongoDB"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontWeight: 500,
                  }}
                />
              </Box>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<DownloadIcon />}
                  onClick={handleDownloadResume}
                  sx={{
                    backgroundColor: 'white',
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    },
                  }}
                >
                  Download Resume
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<EmailIcon />}
                  onClick={() => handleSocialClick('email')}
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: 'rgba(255, 255, 255, 0.8)',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  Get In Touch
                </Button>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Avatar
                src="/profile-image.jpg"
                alt="Profile"
                sx={{
                  width: 300,
                  height: 300,
                  border: '8px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Social Links */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Button
          onClick={() => handleSocialClick('github')}
          sx={{
            minWidth: 'auto',
            width: 50,
            height: 50,
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
          }}
        >
          <GitHubIcon />
        </Button>
        <Button
          onClick={() => handleSocialClick('linkedin')}
          sx={{
            minWidth: 'auto',
            width: 50,
            height: 50,
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
          }}
        >
          <LinkedInIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
