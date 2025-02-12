'use client'

import {
  Box,
  FormControl,
  InputLabel,
  Select,
  Typography,
  SelectChangeEvent,
  MenuItem,
  Stack,
  TextField,
  Switch,
  FormControlLabel,
  Chip,
  Button,
} from '@mui/material'
import DoneIcon from '@mui/icons-material/Done'
import { useDebounce } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'
import { type ScenarioId, SCENARIOS, SCENARIO_LOOKUP } from './data'
import { Checklist } from './ai'

export function Form() {
  const [scenarioId, setScenarioId] = useState<ScenarioId>(SCENARIOS[0].id)
  const [prompt, setPrompt] = useState('')
  const debouncedPrompt = useDebounce(prompt, 1500)
  const [checklist, setChecklist] = useState<Checklist>([])
  const [isInteractive, setIsInteractive] = useState(false)
  const scenario = SCENARIO_LOOKUP.get(scenarioId)
  const canSubmit = checklist.every((item) => item.done) || !isInteractive

  const handleScenarioChange = (event: SelectChangeEvent) => {
    setPrompt('')
    setScenarioId(event.target.value as ScenarioId)
  }
  const handlePromptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value)
  }
  const handleInteractiveChange = () => {
    setIsInteractive((prevIsInteractive) => !prevIsInteractive)
  }

  useEffect(() => {
    if (!isInteractive && debouncedPrompt) {
      return
    }

    async function generateChecklist() {
      const response = await fetch('/api/writing-assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          scenarioId,
          userContent: debouncedPrompt,
        }),
      })

      const { checklist: newChecklist } = await response.json()

      console.log('API Response:', newChecklist)

      setChecklist(newChecklist)
    }

    generateChecklist()
  }, [scenarioId, debouncedPrompt, isInteractive])

  return (
    <Stack spacing={3} component="form" sx={{ mt: 4, maxWidth: 600 }}>
      <FormControl fullWidth>
        <InputLabel id="scenario-label">Scenario</InputLabel>
        <Select
          labelId="scenario-label"
          id="scenario-id"
          value={scenarioId}
          label="Scenario"
          onChange={handleScenarioChange}
        >
          {SCENARIOS.map((scenario) => (
            <MenuItem key={scenario.id} value={scenario.id}>
              {scenario.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        id="prompt"
        label={scenario?.name}
        multiline
        rows={20}
        placeholder={scenario?.prompt}
        value={prompt}
        onChange={handlePromptChange}
      />

      <Stack
        direction="row"
        spacing={1}
        useFlexGap
        sx={{ flexWrap: 'wrap', alignItems: 'center' }}
      >
        <Typography component="span">Focus on:</Typography>
        {checklist.map((item) => (
          <Chip
            key={item.content}
            label={item.content}
            variant={item.done ? 'filled' : 'outlined'}
            icon={item.done ? <DoneIcon /> : undefined}
          />
        ))}
      </Stack>

      <FormControlLabel
        control={
          <Switch checked={isInteractive} onChange={handleInteractiveChange} />
        }
        label="Real-time feedback"
      />

      <Button variant="contained" disabled={!canSubmit}>
        Submit
      </Button>
    </Stack>
  )
}
