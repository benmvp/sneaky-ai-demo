export const SCENARIOS = [
  {
    id: 'peer-review',
    name: 'Peer Review',
    prompt: 'Please give feedback for your peer',
  },
  {
    id: 'bug-report',
    name: 'Bug Report',
    prompt: 'Describe the bug you encountered',
  },
  {
    id: 'conference-summary',
    name: 'Conference Summary',
    prompt: 'Summarize your recent conference experience',
  },
  {
    id: 'patient-notes',
    name: 'Patient Visit Notes',
    prompt: "Document the patient's visit",
  },
] as const
export const SCENARIO_LOOKUP = new Map(
  SCENARIOS.map((scenario) => [scenario.id, scenario]),
)
export type ScenarioId = (typeof SCENARIOS)[number]['id']
