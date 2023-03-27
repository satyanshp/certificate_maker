import React, { useState,useRef } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { PDFExport } from '@progress/kendo-react-pdf';
import { Formik,Form, Field } from 'formik';
import { object, string, array } from 'yup';
import TextField from '@mui/material/TextField';
import CertificateDwn from '../elements/CertificateDwn';
import '../styles/certificate.scss'

const Certificate = () => {

  const pdfExportComponent = useRef<PDFExport>(null);
  
  const  handleExportWithComponent  = () => {
    pdfExportComponent.current?.save();
  }

  const [CertiData, setCertiData] = useState(
    {
      name:'',
      course:'',
    },
  )
    const [data, setData] = useState(
      {
        name:'',
        course:'',
      },
    );
    
      return (
        <Formik 
            initialValues={data}
            validationSchema={object({   
              description:array()
              .of(
                object({
                  name: string()
                      .required('Please enter Description'),
                  course: string()
                      .required('Please enter Description'),
                }) 
              ) 
              
            })}
            onSubmit={(values, formikHelpers) => {
                setData({ ...values});
                setCertiData({...values});
                formikHelpers.resetForm();
            }}
        >
          {({ errors, isValid,values, touched, dirty, handleSubmit }) => (    
            <Form 
            onSubmit={handleSubmit}
            >
              <Box height='100vh' display='flex' flexDirection='column' justifyContent='center'>
                <Box display='flex' justifyContent='center' gap={1} margin='10px 0'>
                  <Field 
                      as={TextField} 
                      style={{width:"25%"}}
                      variant="outlined" 
                      label='Name'
                      name='name'
                      />
              
                  <Field 
                      as={TextField} 
                      style={{width:"25%"}}
                      variant="outlined" 
                      label='Course'
                      name='course'
                      />
                </Box>
                <Button type='submit' sx={{width:'200px',marginInline:'auto'}} onClick={handleExportWithComponent}>Download</Button>
              </Box>
              <PDFExport ref={pdfExportComponent}  paperSize="auto" landscape>
                <CertificateDwn CertiData={CertiData}/>
              </PDFExport>
              {/* <Box>
                  <CertificateDwn CertiData={CertiData}/>
              </Box> */}
            </Form>
          )}
  </Formik>          
  )
}

export default Certificate