import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import favIcon from "../img/favourite.png"


const FavsBar = ({ saveFavInDb }) => {
    const [state, setState] = React.useState({
      open: false,
      vertical: 'top',
      horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;
  
    const handleClick = (newState) => () => {
      setState((prevState) => ({
        ...prevState,
        open: true,
        ...newState,
      }));
    };
  
    const handleClose = () => {
      setState((prevState) => ({
        ...prevState,
        open: false,
      }));
    };
  
    const functionToShowAndSave = () => {
      handleClick({ vertical: 'top', horizontal: 'center' })();
      saveFavInDb();
    };
  
    const image = (
      <div onClick={functionToShowAndSave}>
        <img src={favIcon} style={{cursor:"pointer"}} title="save in favs" alt="Favourite" />
      </div>
    );
  
    return (
      <div>
        {image}
        <Snackbar style={{color:"green"}} anchorOrigin={{ vertical, horizontal }} autoHideDuration={2000}  open={open} onClose={handleClose} message="Hotel saved in Favourites ✔" key={vertical + horizontal}
        />
      </div>
    );
  };
  
  export default FavsBar;