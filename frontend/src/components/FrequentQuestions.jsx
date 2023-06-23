
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const FrequentQuestions = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    
  
  return (
    <div>
         <Container style={{marginBottom:"5vh"}}>
           <Box>
                <div style={{marginTop:"6vh", marginBottom:"5vh"}}>
                   <Typography> Frequent Questions </Typography>
                 </div>
              
        <div style={{marginLeft:"15vh"}}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}  style={{width:"100vh"}}>
                       
                         <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header" style={{ justifyContent: 'center' }}>
                        <Typography sx={{ width: '33%', flexShrink: 0 }} style={{fontSize:"1.4vh"}}>  How can I make a hotel reservation on this page? </Typography>
                        </AccordionSummary>
                      
                
                    <AccordionDetails>
                          <Typography style={{fontSize:"1.4vh"}}>  Through our platform you will not make payments for the hotel reservation. Once you have confirmed your reservation, you will see a message indicating that you received an email in your email. In that email, it is where you will coordinate the payment with the hotel directly. </Typography>
                     </AccordionDetails>
             </Accordion>

             <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}  style={{width:"100vh"}}> 
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header" >
                        <Typography sx={{ width: '33%', flexShrink: 0 }} style={{fontSize:"1.4vh"}}> What information do I need to provide when making a reservation? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                          <Typography style={{fontSize:"1.4vh"}}>  Through our platform you will not make payments for the hotel reservation. Once you have confirmed your reservation, you will see a message indicating that you received an email in your email. In that email, it is where you will coordinate the payment with the hotel directly. </Typography>
                     </AccordionDetails>
             </Accordion>


             <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}  style={{width:"100vh"}}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header" >
                        <Typography sx={{ width: '33%', flexShrink: 0 }} style={{fontSize:"1.4vh"}}> Can I make changes to my reservation once I have confirmed it? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                          <Typography style={{fontSize:"1.4vh"}}>  Through our platform you will not make payments for the hotel reservation. Once you have confirmed your reservation, you will see a message indicating that you received an email in your email. In that email, it is where you will coordinate the payment with the hotel directly. </Typography>
                     </AccordionDetails>
             </Accordion>


             <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}  style={{width:"100vh"}}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header" >
                        <Typography sx={{ width: '33%', flexShrink: 0 }} style={{fontSize:"1.4vh"}}> What services and facilities are included in the price of the reservation? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                          <Typography style={{fontSize:"1.4vh"}}>  Through our platform you will not make payments for the hotel reservation. Once you have confirmed your reservation, you will see a message indicating that you received an email in your email. In that email, it is where you will coordinate the payment with the hotel directly.</Typography>
                     </AccordionDetails>
             </Accordion>


             <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}  style={{width:"100vh"}}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header" >
                        <Typography sx={{ width: '33%', flexShrink: 0 }} style={{fontSize:"1.4vh"}}> Can You pay with Bitcoin? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                          <Typography style={{fontSize:"1.4vh"}}> Through our platform you will not make payments for the hotel reservation. Once you have confirmed your reservation, you will see a message indicating that you received an email in your email. In that email, it is where you will coordinate the payment with the hotel directly. </Typography>
                     </AccordionDetails>
             </Accordion>
              
        </div>
              
      
       
           </Box>

        </Container>
      
    </div>
  )
}

export default FrequentQuestions
