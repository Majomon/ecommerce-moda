import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const pages = ['Productos', 'Contacto'];

const Footer = () => {
  return (
    <footer className="footer cajaNevagacionMd">
      <div className="separacion"></div>
      <div className="conteinerCajaNevagacionXs ">
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            flexDirection: 'column',
            fontFamily: 'monospace',
            justifyContent: 'space-around',
            fontWeight: 700,
            letterSpacing: '.3rem',
            textDecoration: 'none',
          }}
        >
          <div className="cajaNevagacion">
            <h3>Navegacion</h3>
            <div className="baraNavegacionMd">
              {pages.map((page) => (
                <Button
                  component={RouterLink}
                  to={`/${page}`}
                  key={page}
                  sx={{ my: 2, color: 'black', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </div>
          </div>

          <div className="redesSociales">
            <h3>Redes</h3>
            <ul>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <i className="bi bi-facebook"></i>
                </li>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <i className="bi bi-instagram"></i>
                </li>
              </a>
            </ul>
          </div>
        </Box>
      </div>
      <div className="conteinerCajaNevagacionMd ">
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            justifyContent: 'space-evenly',
            width: '100%',
            fontWeight: 700,
            letterSpacing: '.3rem',
            textDecoration: 'none',
          }}
        >
          <div className="cajaNevagacionMd">
            <h3>Navegacion</h3>
            <div className="baraNavegacionMd">
              {pages.map((page) => (
                <Button
                  component={RouterLink}
                  to={`/${page}`}
                  key={page}
                  sx={{ my: 2, color: 'black', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </div>
          </div>

          <div className="redesSocialesMd">
            <h3>Redes</h3>
            <ul>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <i className="bi bi-facebook"></i>
                </li>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <i className="bi bi-instagram"></i>
                </li>
              </a>
            </ul>
          </div>
        </Box>
      </div>
    </footer>
  );
};
export default Footer;
