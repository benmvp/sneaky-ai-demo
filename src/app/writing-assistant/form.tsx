'use client'

import DoneIcon from '@mui/icons-material/Done'
import {
  FormControl,
  InputLabel,
  Select,
  Typography,
  MenuItem,
  Stack,
  TextField,
  Switch,
  FormControlLabel,
  Chip,
  Button,
} from '@mui/material'
import type { SelectChangeEvent } from '@mui/material'
import { useDebounce } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'
import type { Checklist } from './ai'
import { SCENARIOS, SCENARIO_LOOKUP } from './data'
import type { ScenarioId } from './data'

export function Form() {
  const [scenarioId, setScenarioId] = useState<ScenarioId>(SCENARIOS[0].id)
  const [prompt, setPrompt] = useState('')
  const debouncedPrompt = useDebounce(prompt, 750)
  const [checklist, setChecklist] = useState<Checklist>([])
  const [isInteractive, setIsInteractive] = useState(false)
  const scenario = SCENARIO_LOOKUP.get(scenarioId)
  const canSubmit = checklist.every((item) => item.done) || !isInteractive

  const handleScenarioChange = (event: SelectChangeEvent) => {
    setPrompt('')
    setScenarioId(event.target.value as ScenarioId)
    setChecklist([])
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
        body: JSON.stringify({
          checklist: isInteractive ? checklist : [],
          scenarioId,
          userContent: debouncedPrompt,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      const { checklist: newChecklist } = (await response.json()) as {
        checklist: Checklist
      }

      setChecklist(
        newChecklist.sort((a, b) => {
          // sort by done status, then by content alphabetically
          if (a.done === b.done) {
            return a.content.localeCompare(b.content)
          }

          return a.done ? 1 : -1
        }),
      )
    }

    void generateChecklist()
  }, [scenarioId, debouncedPrompt, isInteractive])

  return (
    <Stack spacing={3} component="form" sx={{ maxWidth: 600, mt: 4 }}>
      <FormControl fullWidth>
        <InputLabel id="scenario-label">Scenario</InputLabel>
        <Select
          labelId="scenario-label"
          id="scenario-id"
          value={scenarioId}
          label="Scenario"
          onChange={handleScenarioChange}
        >
          {SCENARIOS.map((s) => (
            <MenuItem key={s.id} value={s.id}>
              {s.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        id="prompt"
        label={scenario?.name}
        multiline
        rows={10}
        placeholder={scenario?.prompt}
        value={prompt}
        onChange={handlePromptChange}
      />

      <Stack
        direction="row"
        spacing={1}
        useFlexGap
        sx={{ alignItems: 'center', flexWrap: 'wrap' }}
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
