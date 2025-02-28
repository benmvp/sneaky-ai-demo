'use client'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Button,
  Chip,
  FormControl,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { INTEREST_OPTIONS, PAST_TALKS } from './constants'
import type { Interest, PastTalk, Profile } from './types'

interface ProfileFormProps {
  expanded: boolean
  onStartRegistration: (profile: Profile) => void
  onToggleExpand: (isExpanded: boolean) => void
}

export function ProfileForm({
  expanded,
  onStartRegistration,
  onToggleExpand,
}: ProfileFormProps) {
  const [userId, setUserId] = useState('User123')
  const [name, setName] = useState('Jane Doe')
  const [email, setEmail] = useState('jane.doe@example.com')
  const [jobTitle, setJobTitle] = useState('Senior Software Engineer')
  const [company, setCompany] = useState('Acme Corp')
  const [pastAttendance, setPastAttendance] = useState<PastTalk[]>([
    'Kubernetes: From Zero to Production Hero with .NET (2023)',
    'The Art of Front-End Performance Optimization (2022)',
    'UI/UX Design for Accessible Web Applications (2023)',
  ])
  const [interests, setInterests] = useState<Interest[]>([
    'Artificial Intelligence',
    'Cloud Computing',
    'DevOps',
    'JavaScript',
    'HTML & CSS',
  ])

  function handlePanelChange(_: React.SyntheticEvent, isExpanded: boolean) {
    onToggleExpand(isExpanded)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onStartRegistration({
      company,
      email,
      interests,
      jobTitle,
      name,
      pastAttendance,
      userId,
    })
  }

  return (
    <Accordion
      expanded={expanded}
      onChange={handlePanelChange}
      component="form"
      onSubmit={handleSubmit}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="profile-content"
        id="profile-header"
      >
        <Typography component="h2">Account Profile</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={2} sx={{ maxWidth: 600 }}>
          <Typography variant="body2">
            This section represents the attendee's pre-existing profile
            information, which would normally be loaded automatically from their
            account. This data is used to simulate the context for our 'Sneaky
            AI,' allowing it to pre-fill the registration form with personalized
            suggestions.
          </Typography>
          <TextField
            label="User ID"
            value={userId}
            onChange={(e) => {
              setUserId(e.target.value)
            }}
            variant="outlined"
          />
          <TextField
            label="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
            variant="outlined"
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            variant="outlined"
            type="email"
          />
          <TextField
            label="Job Title"
            value={jobTitle}
            onChange={(e) => {
              setJobTitle(e.target.value)
            }}
            variant="outlined"
          />
          <TextField
            label="Company"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value)
            }}
            variant="outlined"
          />
          <FormControl>
            <Autocomplete
              multiple
              id="interests"
              options={INTEREST_OPTIONS}
              value={interests}
              onChange={(_, newValue) => {
                setInterests(newValue as Interest[])
              }}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => {
                  const { key, ...tagProps } = getTagProps({ index })
                  return (
                    <Chip
                      key={key}
                      variant="outlined"
                      label={option}
                      {...tagProps}
                    />
                  )
                })
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Stated Interests"
                  placeholder="Select interests"
                />
              )}
            />
          </FormControl>
          <FormControl>
            <Autocomplete
              multiple
              id="past-attendance"
              options={PAST_TALKS}
              value={pastAttendance}
              onChange={(_, newValue) => {
                setPastAttendance(newValue as PastTalk[])
              }}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => {
                  const { key, ...tagProps } = getTagProps({ index })
                  return (
                    <Chip
                      key={key}
                      variant="outlined"
                      label={option}
                      {...tagProps}
                    />
                  )
                })
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Past Conference Attendance"
                  placeholder="Select past attendance"
                />
              )}
            />
          </FormControl>
        </Stack>
      </AccordionDetails>
      <AccordionActions>
        <Button variant="contained" color="primary" type="submit">
          Start {new Date().getFullYear()} Registration
        </Button>
      </AccordionActions>
    </Accordion>
  )
}
