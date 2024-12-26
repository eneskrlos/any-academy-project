import { styled } from "@mui/material";
import MuiAccordionDetails from '@mui/material/AccordionDetails';


const AccordionDetailsComponent = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    background: theme.palette.background.default
  }));
export default AccordionDetailsComponent;