import Header from "./Header";
import Menu from "./Menu";
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function App() {
  return (
   <>
    <Header />
    <Menu />
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
    <DeleteForeverIcon />
   </>
  );
}

export default App;
