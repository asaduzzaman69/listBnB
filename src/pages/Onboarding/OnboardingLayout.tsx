import React, { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react'
import  { MdKeyboardArrowLeft } from 'react-icons/md';
import  { AiOutlineClose } from 'react-icons/ai';
import { ProgressBar } from '../../components/ProgressBar';
import { useOnboardingContext } from '../../context/onboardingContext';
import { Page } from '../../components/Page';

export const CONFIG_VAR = ['locations', 'descriptor', 'property', 'activities', 'amenities']

export const OnboardingLayout:FC<any> = ({children , currentStep, onStepChange}) => {
    // @ts-ignore
  const { allProgress } = useOnboardingContext()
    let  styleTopIcon  = {
        border: '1px solid #E3E6EE',
        padding:  '5px',
        borderRadius: '8px'
    };


  let currentStepNumber = CONFIG_VAR.indexOf(currentStep) + 1;

  return (
    <Page>
        <Flex  alignItems={'center'} justifyContent={'space-between'} >
            <Box sx={styleTopIcon}> <MdKeyboardArrowLeft fontSize={'25px'} />  </Box>
            <Text textAlign={'center'} fontWeight={700} fontSize={'20px'}  lineHeight={'24px'} >Information About <br /> Your Listing</Text>
            <Box sx={{...styleTopIcon, padding: '10px'}}><AiOutlineClose fontSize={'18px'}  /></Box>
        </Flex>

        <Text mt={'12px'} mx={'auto'} textAlign={'center'} color={'#848C9E'} fontWeight={500}  fontSize={'14px'} w={'250px'} >Choose few option to help us for finding  the best option for you</Text>
        <Box>
        <Text textAlign={'center'}  mt={'14px'} mb={'10px'} color={'#FE7146'}fontWeight={500} >STEP {currentStepNumber}/{CONFIG_VAR.length}</Text>
        <Flex justifyContent={'center'}>
            <ProgressBar config={CONFIG_VAR} currentStep={currentStep} arrayOfProgress={allProgress}  />
        </Flex>
      </Box>
        {children}
    </Page>
  )
};