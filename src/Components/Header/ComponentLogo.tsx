
import { Box } from '@mui/material'
import React from 'react'
import Image from 'next/image'


export default function ComponentLogo() {
  return (
    <Box display={"flex"} alignItems={'center'} >
      <Image
        src='resources/images/Logo1.1.svg'
        width={400}
        height={45}
        alt="Picture of the author"
      />
    </Box>
  )
}

