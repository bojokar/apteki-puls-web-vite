import { useState } from 'react';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useColorMode } from '../theme.jsx';

const navItems = [
  { label: 'Начало', path: '/' },
  { label: 'За нас', path: '/za-nas' },
  { label: 'Продукти', path: '/produkti' },
  { label: 'Промоции', path: '/promocii' },
  { label: 'Контакти', path: '/kontakti' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { mode, toggleColorMode } = useColorMode();
  const assetBase = import.meta.env.BASE_URL;

  const nav = (
    <>
      {navItems.map((item) => (
        <Button
          key={item.path}
          component={NavLink}
          to={item.path}
          color="inherit"
          sx={{
            minHeight: 40,
            '&.active': {
              bgcolor: 'action.selected',
              color: 'primary.main',
            },
          }}
        >
          {item.label}
        </Button>
      ))}
    </>
  );

  return (
    <AppBar position="sticky" color="default" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 76, gap: 2 }}>
          <Stack
            component={RouterLink}
            to="/"
            direction="row"
            spacing={1.2}
            alignItems="center"
            sx={{ color: 'text.primary', textDecoration: 'none', mr: 'auto' }}
          >
            <Box
              component="img"
              src={`${assetBase}logo-heart.png`}
              alt="Аптеки Пулс"
              sx={{
                width: 48,
                height: 48,
                objectFit: 'contain',
                borderRadius: 2,
                bgcolor: 'secondary.main',
                p: 0.5,
                display: { xs: 'block', sm: 'none' },
              }}
            />
            <Box
              component="img"
              src={`${assetBase}logo-puls-full.png`}
              alt="Денонощни аптеки Пулс"
              sx={{
                width: { sm: 210, md: 250 },
                maxHeight: 58,
                objectFit: 'contain',
                display: { xs: 'none', sm: 'block' },
                bgcolor: 'secondary.main',
                borderRadius: 1,
                p: 0.75,
              }}
            />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1.1, display: { sm: 'none' } }}>
                Аптеки Пулс
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ display: { sm: 'none' } }}>
                Бургас
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {nav}
          </Stack>

          <Tooltip title={mode === 'light' ? 'Тъмен режим' : 'Светъл режим'}>
            <IconButton color="inherit" onClick={toggleColorMode} aria-label="Смяна на цветови режим">
              {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Tooltip>

          <IconButton
            color="inherit"
            onClick={() => setOpen(true)}
            aria-label="Отвори меню"
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, pt: 2 }} role="presentation">
          <List>
            {navItems.map((item) => (
              <ListItemButton key={item.path} component={NavLink} to={item.path} onClick={() => setOpen(false)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
