import type { Metadata } from 'next'
import { Form } from './form'
import { Box, Typography } from '@mui/material'

export const metadata: Metadata = {
  description:
    'Experience the power of AI-assisted writing. The demo shows how AI can provide real-time suggestions, enhance your writing, and save you time.',
  title: 'AI Writing Assistant',
}

export default function Home() {
  return (
    <Box>
      <Typography component="h1" variant="h3">
        AI Writing Assistant
      </Typography>
      <Form />
    </Box>
  )
}
