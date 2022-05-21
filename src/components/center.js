import { Grid } from '@mui/material'
import React from 'react'

export default function center(props) {
  return (
    <Grid  container
        direction="column"
        alignItems="center"
        justifyContent="Center"
        sx={{ minHeight:'100vh' }}>
        <Grid  item xs={1}>
        {props.children}
        </Grid>
    </Grid>
  )
}
