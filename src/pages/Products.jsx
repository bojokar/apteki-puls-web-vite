import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import HealingIcon from '@mui/icons-material/Healing';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import SpaIcon from '@mui/icons-material/Spa';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import { productCategories } from '../data.js';

const icons = [
  <HealingIcon />,
  <VaccinesIcon />,
  <ChildCareIcon />,
  <FaceRetouchingNaturalIcon />,
  <MedicalInformationIcon />,
  <SpaIcon />,
];

export default function Products() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
      <Stack spacing={2} sx={{ mb: 4, maxWidth: 760 }}>
        <Typography variant="overline" color="primary" sx={{ fontWeight: 800 }}>
          Продукти
        </Typography>
        <Typography component="h1" variant="h2" sx={{ fontSize: { xs: 36, md: 52 } }}>
          Всичко необходимо за ежедневна здравна грижа
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Наличностите могат да варират по обект. Обадете се предварително за конкретен продукт или марка.
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        {productCategories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={category}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Stack spacing={2}>
                  <AddCircleIcon color="secondary" />
                  <Typography sx={{ color: 'primary.main' }}>{icons[index]}</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 800 }}>
                    {category}
                  </Typography>
                  <Typography color="text.secondary">
                    Подбрани решения и консултация според вашите нужди.
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
