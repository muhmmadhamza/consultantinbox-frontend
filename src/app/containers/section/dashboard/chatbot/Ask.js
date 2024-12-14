import React from 'react'
import { Grid } from '@mui/material'
import AskButton from './AskButton'

const Ask = ({ data, responseHandler }) => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{ marginBottom: '20px' }}
    >
      {data.map((item, index) => (
        <Grid item xs={10} sm={5} key={index}>
          <AskButton
            text={item.text}
            onClick={() => responseHandler(item.text)}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default Ask
