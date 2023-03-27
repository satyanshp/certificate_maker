import React, { useEffect } from 'react'
import Box from '@mui/material/Box';

interface CerProps{
    CertiData:{
        name:string,
        course:string,
      },
}
const CertificateDwn = ({CertiData}:CerProps) => {
    useEffect(() => {
        console.log(CertiData)
    }, [CertiData])

    
  return (
    <Box 
        minHeight='88vh' 
        maxWidth='65vw'
        margin='auto'
        // sx={{aspectRatio:'16/9'}}
        display='grid'
        position='relative'
        overflow='hidden'
    >
       <Box width='700px' height='450px' bgcolor={'#ff4e00'} position='absolute' sx={{transform:"translate(-50%,-80%) rotate(-10deg)",left:'100%',top:'0'}}/> 
       <Box 
            width='100%' 
            height='100%'
            display='grid'
            sx={{placeItems:'center'}}
        >
            <Box width='80%' height='78%'>
                <Box height='80%' display='flex' flexDirection='column' justifyContent='space-between'>
                    <Box position='relative' top={3} display='flex' gap={3} alignItems='center'>
                        <Box maxWidth='200px'>
                            <img src="/assets/images/cograd.png" alt="" style={{width:'100%',objectFit:'contain'}} />
                        </Box>
                        <Box width='1px' height={0.7} bgcolor={'#545454'}/>
                        <Box maxWidth='200px'>
                            <img src="/assets/images/nasscom.png" alt="" style={{width:'100%',objectFit:'contain'}} />
                        </Box>
                    </Box>
                    <Box flexGrow='1' minHeight='80%' sx={{margin:'2.2em 0'}} position='relative' bottom='20px'>
                        <Box className='course__completion'>Course Completion<br/>Certificate </Box>
                        <Box height={20} bgcolor='transparent'/>
                        <Box className='content'>This is to certify that</Box>
                        <Box className='course_name'>{CertiData.name?CertiData.name:'Beneficiary Name'}</Box>
                        <Box height={15} bgcolor='transparent'/>
                        <Box className='content'>has completed the course on</Box>
                        <Box className='course_name'>{CertiData.course?CertiData.course:'Course Name'}</Box>
                    </Box>
                </Box>
                <Box display='flex' justifyContent='flex-end'>
                    <Box width='245px' display='flex' flexDirection='column' gap={4} position='relative' bottom='40px'>
                        <Box width='100%' display='flex' flexDirection='column' alignItems='center'>
                            <Box width='50%' ><img src="/assets/images/Syeds_Signature.png" style={{width:'100%',objectFit:'contain'}} alt="" /></Box>
                            <Box height={3} width='100%' bgcolor='#545454' mb={1.4}/>
                            <Box className='position_sign' textAlign='center'>Saurabh Yadav,<br/>Program Manager</Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
       </Box>
       <Box width='1850px' height='380px' bgcolor={'#6b59cb'} position='absolute' sx={{transform:"translate(-50%,-35%) rotate(10deg)",left:'0',top:'100%'}}/> 
    </Box>
  )
}

export default CertificateDwn