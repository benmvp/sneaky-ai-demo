import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Box,
  Button,
  Chip,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import type { PrefilledFields } from './ai'
import { SESSIONS, SPEAKERS } from './constants'
import type { Profile } from './types'

interface RegistrationFormProps {
  expanded: boolean
  onToggleExpand: (isExpanded: boolean) => void
  profile: Profile
}

export function RegistrationForm({
  expanded,
  onToggleExpand,
  profile,
}: RegistrationFormProps) {
  // const [prefilledFields, setPrefilled] = useState<PrefilledFields | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  // Seeded from profile
  const [name, setName] = useState<string>(profile.name)
  const [email, setEmail] = useState<string>(profile.email)
  const [jobTitle, setJobTitle] = useState<string>(profile.jobTitle)
  const [company, setCompany] = useState<string>(profile.company)

  const [selectedSessions, setSelectedSessions] = useState<
    PrefilledFields['sessions']
  >([])
  const [goals, setGoals] = useState<PrefilledFields['goals']>('')
  const [selectedSpeakers, setSelectedSpeakers] = useState<
    PrefilledFields['speakers']
  >([])

  useEffect(() => {
    async function fetchPrefilledFields() {
      setLoading(true)

      try {
        const response = await fetch('/api/prefilled-forms', {
          body: JSON.stringify({ profile }),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        })

        const { prefilledFields } = (await response.json()) as {
          prefilledFields: PrefilledFields
        }

        console.log('prefilledFields:', prefilledFields)

        setSelectedSessions(prefilledFields.sessions)
        setGoals(prefilledFields.goals)
        setSelectedSpeakers(prefilledFields.speakers)
      } catch (error) {
        console.error('Error fetching prefilled fields:', error)
      } finally {
        setLoading(false)
      }
    }

    void fetchPrefilledFields()
  }, [profile])

  function handlePanelChange(_: React.SyntheticEvent, isExpanded: boolean) {
    onToggleExpand(isExpanded)
  }

  return (
    <Accordion
      expanded={expanded}
      onChange={handlePanelChange}
      component="form"
    >
      <AccordionSummary
        expandIcon={
          loading ? <CircularProgress size={24} /> : <ExpandMoreIcon />
        }
        aria-controls="registration-content"
        id="registration-header"
      >
        <Typography component="h2">Registration Form</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={2} sx={{ maxWidth: 600 }}>
          <Typography variant="body2">
            Welcome! Please provide the following information to register for
            the conference. We look forward to seeing you there!
          </Typography>

          <TextField
            label="Name"
            value={name}
            variant="outlined"
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <TextField
            label="Email"
            value={email}
            variant="outlined"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <TextField
            label="Job Title"
            value={jobTitle}
            variant="outlined"
            onChange={(e) => {
              setJobTitle(e.target.value)
            }}
          />
          <TextField
            label="Company"
            value={company}
            variant="outlined"
            onChange={(e) => {
              setCompany(e.target.value)
            }}
          />

          <FormControl sx={{ m: 1, width: '78ch' }}>
            <Autocomplete
              multiple
              id="selected-sessions"
              options={SESSIONS.map((session) => session.title)}
              value={selectedSessions}
              onChange={(_event, newValue) => {
                setSelectedSessions(newValue)
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
                  label="Session Preferences"
                  placeholder="Select sessions"
                />
              )}
            />
          </FormControl>

          <TextField
            label="Goals for this Conference"
            multiline
            rows={5}
            value={goals}
            onChange={(e) => {
              setGoals(e.target.value)
            }}
            variant="outlined"
            fullWidth
          />

          <FormControl sx={{ m: 1, width: '78ch' }}>
            <Autocomplete
              multiple
              id="selected-speakers"
              options={SPEAKERS.map((speaker) => speaker.name)}
              value={selectedSpeakers}
              onChange={(_event, newValue) => {
                setSelectedSpeakers(newValue)
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
                  label="Meet & Greet Preferences"
                  placeholder="Select speakers"
                />
              )}
            />
          </FormControl>
        </Stack>
      </AccordionDetails>
      <AccordionActions>
        <Button variant="contained" color="primary">
          Continue
        </Button>
      </AccordionActions>
    </Accordion>
  )
}
