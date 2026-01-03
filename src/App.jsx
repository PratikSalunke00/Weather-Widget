import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';


function App() {
  let handleClick = () => {
    console.log("Button Clicked");
  };
  return (
    <>
    <h1>Material UI Demo</h1>
      <Button onClick={handleClick} variant="contained"  startIcon={<DeleteIcon />}> Delete</Button>
      <Alert severity="error">delete option is given!</Alert>
      
    </>
  )
}

export default App;
