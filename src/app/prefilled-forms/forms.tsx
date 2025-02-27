'use client'

import { Box } from '@mui/material'
import { useState } from 'react'
import { ProfileForm } from './profile-form'
import { RegistrationForm } from './registration-form'
import type { Profile } from './types'

export function Forms() {
  const [expandedPanel, setExpandedPanel] = useState<
    'profile' | 'registration' | false
  >('profile')
  const [profile, setProfile] = useState<Profile | null>(null)

  function handleProfilePanelChange(isExpanded: boolean) {
    setExpandedPanel(isExpanded ? 'profile' : false)

    if (isExpanded) {
      setProfile(null)
    }
  }
  function handleRegistrationPanelChange(isExpanded: boolean) {
    setExpandedPanel(isExpanded ? 'registration' : false)
  }

  function handleStartRegistration(newProfile: Profile) {
    setProfile(newProfile)
    setExpandedPanel('registration')
  }

  return (
    <Box sx={{ maxWidth: 900, mt: 4 }}>
      <ProfileForm
        expanded={expandedPanel === 'profile'}
        onToggleExpand={handleProfilePanelChange}
        onStartRegistration={handleStartRegistration}
      />

      {profile ? (
        <RegistrationForm
          expanded={expandedPanel === 'registration'}
          onToggleExpand={handleRegistrationPanelChange}
          profile={profile}
        />
      ) : null}
    </Box>
  )
}
