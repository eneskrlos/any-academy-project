import * as React from 'react';
import { styled, Theme, useTheme } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import LinkButton from '../Buttons/LinkButton';


const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // border: `1px solid ${theme.palette.divider}`,
  background: theme.palette.background.default,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '#5086C1', marginLeft: '5px' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row',
  paddingLeft: '7px',
  paddingRight: '0px',
  fontFamily: 'Quicksand, sans-serif',
  fontSize: '20px',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ }) => ({
  padding: '0px 3px 3px 30px',
  background: 'rgb(246, 246, 246)',
  fontFamily: 'Quicksand, sans-serif',
  
  // borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Ul =styled('ul')({
  listStyle: "none",
  '&' : {
    li: {
      padding: '3px 0',
    }
  }
});

const STYLE_LIST = (theme: Theme) => ({
  fontSize: '15px',
  color: theme.palette.primary.main
})

export default function AcordionMenu() {
  const theme = useTheme()
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ fontFamily: 'Quicksand, sans-serif', fontSize: '20px', color: theme.palette.primary.main }}>
            Servicios
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Ul>
            <li>
              Cursos
            </li>
            <li>
              <LinkButton 
                href="#" 
                variant="inherit"
                underline="none"
                style={STYLE_LIST(theme)}
                text="Traducción"
              / >
              
            </li>
            <li>
              <LinkButton 
                href="#" 
                variant="inherit"
                underline="none"
                style={STYLE_LIST(theme)}
                text="Interpretación"
              / >
            </li>
          </Ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
