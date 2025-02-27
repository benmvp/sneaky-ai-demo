import { Box, Typography } from '@mui/material'
import type { Metadata } from 'next'
import { Forms } from './forms'

export const metadata: Metadata = {
  description:
    'Discover the efficiency of AI-powered pre-filled forms. This demo showcases how intelligent suggestions reduce data entry, save time, and improve user experience.',
  title: 'AI Pre-filled Forms',
}

export default function Home() {
  return (
    <Box>
      <Typography component="h1" variant="h3">
        Pre-filled Forms
      </Typography>
      <Forms />
    </Box>
  )
}
