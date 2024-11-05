import "./App.css";
import "@fontsource/roboto/300.css";
import { TextField, Button, Box, Typography } from "@mui/material";

function App() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={4}
        boxShadow={3}
        borderRadius={2}
      >
        <Typography
          variant="h3"
          fontFamily="Roboto"
          fontWeight="200"
          align="center"
        >
          Inicio de Sesión
        </Typography>

        <form>
          <Box mb={2}>
            <TextField
              id="first-name"
              label="Nombre"
              variant="standard"
              fullWidth
            />
          </Box>

          <Box mb={2}>
            <TextField
              id="last-name"
              label="Apellido"
              variant="standard"
              fullWidth
            />
          </Box>

          <Box mb={2}>
            <TextField id="email" label="Correo" variant="standard" fullWidth />
          </Box>

          <Button variant="contained" fullWidth>
            Registrar
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default App;
