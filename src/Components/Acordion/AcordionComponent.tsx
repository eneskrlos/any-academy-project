import React from 'react'
import MuiAccordion from '@mui/material/Accordion';
import AccordionSummaryComponent from './MuiAccordionSummaryComponent';
import { Theme } from '@mui/material';
import Title from '../Titles/Title';
import AccordionDetailsComponent from './MuiAccordionDetailComponent';

interface ListData {
    id: number,
    title: string,
    description: string,
    step: string
}

interface AccordionComponentProps {
    theme: Theme
    listData: ListData[]
}

export default function AcordionComponent( { theme, listData }:AccordionComponentProps ) {
    const [expanded, setExpanded] = React.useState<string | false>('panel0');
    console.log(theme.palette.primary.main)
    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
      };
  
    return (
      <>
        {
            listData.map((item, index) => {
                return (
                        <MuiAccordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                            <AccordionSummaryComponent aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
                                <Title
                                    text={`${item.step} - ${item.title}`} 
                                    variant='h3'
                                    component={'h3'}
                                    style={{
                                        fontFamily: '"Quicksand", sans-serif',
                                        fontSize: '22px',
                                        color: theme.palette.text.secondary,
                                        fontWeight: '600',
                                        textAlign: 'left',
                                        lineHeight: '30px',
                                        width: '100%',
                                        textWrap: 'wrap'
                                    }}
                                />
                            </AccordionSummaryComponent>
                            <AccordionDetailsComponent>
                            <Title
                                text={item.description} 
                                variant='body1'
                                component={'p'}
                                style={{
                                    fontFamily: '"Quicksand", sans-serif',
                                    fontSize: '15px',
                                    color: theme.palette.text.secondary,
                                    fontWeight: '400',
                                    textAlign: 'left',
                                    width: '100%',
                                    textWrap: 'wrap',
                                  }}
                            />
                            </AccordionDetailsComponent>
                        </MuiAccordion>
                )
            })
        }
      </>
    );
}
