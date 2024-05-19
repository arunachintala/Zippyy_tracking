

import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector from '@mui/material/StepConnector';
import Typography from '@mui/material/Typography';
import Check from '@mui/icons-material/Check';
import { styled } from '@mui/system';

const steps = [
    {
        title: 'Out for Delivery',
        description: 'Charleston, SC 29407',
    },
    {
        title: 'Sorting Complete',
        description: 'Charleston, SC 29407',
    },
    {
        title: 'Arrived at Post Office',
        description: 'Charleston, SC 29407',
    },
    {
        title: 'Arrived at USPS Facility',
        description: 'Charleston, SC 29407',
    }
];

const DottedStepConnector = styled(StepConnector)(({ theme }) => ({
    '&.MuiStepConnector-vertical': {
        marginLeft: 8, // Align connector with circle center
        '& .MuiStepConnector-line': {
            borderColor: 'red',
            borderLeftStyle: 'dotted',
            minHeight: 20, // Reduce the height to make the line shorter
        },
    },
}));

const CustomStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: 'red',
    display: 'flex',
    height: 11,
    alignItems: 'center',
    '& .CustomStepIcon-circle': {
        width: 16,
        height: 16,
        borderRadius: '50%',
        border: '2px solid currentColor',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    '& .CustomStepIcon-completedIcon': {
        color: 'red',
        zIndex: 1,
        fontSize: 12,
    },
    '& .CustomStepIcon-tickMark': {
        position: 'absolute',
        top: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'red',
    },
}));

function CustomStepIcon(props) {
    const { active, completed, className, index } = props;

    return (
        <CustomStepIconRoot ownerState={{ completed, active }} className={className}>
            <div className="CustomStepIcon-circle">
                {completed && <Check className="CustomStepIcon-completedIcon" />}
            </div>
            {index >= 1 && index <= 3 && <div className="CustomStepIcon-tickMark" />}
        </CustomStepIconRoot>
    );
}

const VerticalStepper = () => (
    <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'start', gap: 2, width: 615, height: 250 }}>
        <Box sx={{ maxWidth: 100, textAlign: 'right' }}>
            {steps.map((step, index) => (
                <Box key={index} sx={{ mt: 2, mb: 8 }}>
                    <Typography variant="body2" color="textSecondary">
                        10:52 PM
                    </Typography>
                </Box>
            ))}
        </Box>
        <Box sx={{ maxWidth: 400 }} className="vertical-stepper">
            <Stepper orientation="vertical" activeStep={3} connector={<DottedStepConnector />}>
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepLabel StepIconComponent={CustomStepIcon} index={index}>
                            <Typography variant="subtitle1">{step.title}</Typography>
                            <Typography variant="body2" color="textSecondary">
                                {step.description}
                            </Typography>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    </Box>
);

export default VerticalStepper;
