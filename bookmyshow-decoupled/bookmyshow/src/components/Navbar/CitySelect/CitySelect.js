import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SelectList from "./SelectList/SelectList";
import './CitySelect.css'

export default function CitySelect(props) {
  const {city , onChangeValue, geolocation} = props
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 974.8,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="cityselect">
        <span className="button-cityselect">
          <Button  className="citybutton"  onClick={handleOpen}>{props.cityname}
          <ArrowDropDownIcon /></Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
       
        
          <Box sx={style} className = 'modalcity'>
          
              <SelectList city={city} onChangeValue={onChangeValue} geolocation = {geolocation} />
          </Box>
        </Modal>
        </span>
      </div>
    </>
  );
}
