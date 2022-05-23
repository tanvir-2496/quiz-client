import React, { useState } from 'react'
import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import { Box, textAlign } from '@mui/system'
import center from './center'

export default function Login() {
const [value,setValue] = useState({
    
})
    
  return (
      <center>
      <Card sx={{width:'400px'}}>
          <CardContent sx={{textAlign:'Center'}}>
              <Typography variant='h3' sx={{my:3}}>
                  Quiz App
              </Typography>
          <Box sx={{
          '& .MuiTextField-root': {
              m:1,
              width:'90%'
          }
      }}>

      
    <form noValidate>
        <TextField
          id="email"
          label="Email"
          variant='outlined'
        />
        <TextField
          id="name"
          label="Name"
          variant='outlined'
        />
        <Button
        type='submit'
        variant='contained'
        size='large' sx={{width:'90%'}}>Start</Button>
    </form>
    </Box>
          </CardContent>
      </Card>

      </center>

  )
}
