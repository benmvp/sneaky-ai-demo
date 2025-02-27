'use client'

import MenuIcon from '@mui/icons-material/Menu'
import EditIcon from '@mui/icons-material/Edit'
import FactCheckIcon from '@mui/icons-material/FactCheck'
import NextLink from 'next/link'
import {
  Box,
  CssBaseline,
  useMediaQuery,
  Link as ExternalLink,
  Container,
  AppBar,
  Toolbar,
  styled,
  IconButton,
  Typography,
  Paper,
  Stack,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import type { SvgIconTypeMap } from '@mui/material'
import type { OverridableComponent } from '@mui/material/OverridableComponent'
import { green, purple } from '@mui/material/colors'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { Roboto } from 'next/font/google'
import { useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'

type MuiIcon = OverridableComponent<SvgIconTypeMap<object>>

const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = useMemo(() => getTheme(prefersDarkMode), [prefersDarkMode])
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleNavToggle = () => {
    setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen)
  }

  return (
    <html lang="en">
      <body className={roboto.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <ExternalLink
              height="1px"
              href="#skip-nav"
              left="-10000px"
              overflow="hidden"
              position="absolute"
              top="auto"
              width="1px"
            >
              Skip Main Navigation
            </ExternalLink>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'row',
                  position: 'relative',
                }}
              >
                <Container id="skip-nav" maxWidth="lg" sx={{ flex: 1 }}>
                  <Box component="main" sx={{ py: 2 }}>
                    {children}
                  </Box>
                  <Footer />
                </Container>
                <Nav isNavOpen={isNavOpen} />
              </Box>

              <Header onNavToggle={handleNavToggle} />
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

export function getTheme(prefersDarkMode: boolean) {
  return createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
      mode: prefersDarkMode ? 'dark' : 'light',
    },
    typography: {
      fontFamily: `var(--font-roboto)`,
    },
  })
}

const MenuIconButton = styled(IconButton)(({ theme }) => ({
  display: 'block',
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}))

interface HeaderProps {
  onNavToggle: () => void
}

function Header({ onNavToggle }: HeaderProps) {
  return (
    <AppBar
      color="primary"
      enableColorOnDark
      position="static"
      sx={{ order: -1, zIndex: 2 }}
    >
      <Toolbar>
        <MenuIconButton
          aria-label="Toggle side menu"
          color="inherit"
          edge="start"
          onClick={onNavToggle}
          size="large"
        >
          <MenuIcon />
        </MenuIconButton>
        <Typography component="span" noWrap variant="h6">
          &quot;Sneaky&quot; AI Demos
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

interface NavigationItem {
  Icon?: MuiIcon
  href: string
  label: string
}

const NAV_ITEMS: NavigationItem[] = [
  {
    Icon: EditIcon,
    href: '/writing-assistant',
    label: 'Writing Assistant',
  },
  {
    Icon: FactCheckIcon,
    href: '/prefilled-forms',
    label: 'Pre-filled Forms',
  },
]

interface NavProps {
  isNavOpen: boolean
}

const StyledNav = styled(Paper)(({ theme }) => ({
  background: theme.palette.background.paper,
  height: '100%',
  left: 0,
  minWidth: 250,
  order: -1,
  padding: theme.spacing(2),
  position: 'absolute',
  top: 0,
  zIndex: 1,
  [theme.breakpoints.up('md')]: {
    display: 'block',
    height: 'auto',
    position: 'relative',
  },
}))

function Nav({ isNavOpen }: NavProps) {
  const pathname = usePathname()

  return (
    <StyledNav
      square
      sx={isNavOpen ? undefined : { display: 'none' }}
      variant={isNavOpen ? 'elevation' : 'outlined'}
    >
      <Stack
        divider={<Divider orientation="horizontal" variant="inset" />}
        spacing={2}
      >
        <List>
          {NAV_ITEMS.map(
            ({ Icon: ItemIcon, href: itemHref, label: itemLabel }) => (
              <ListItemButton
                component={NextLink}
                href={itemHref}
                key={itemHref}
                selected={pathname === itemHref}
                sx={{ px: 1, py: 0 }}
              >
                {ItemIcon ? (
                  <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                    <ItemIcon />
                  </ListItemIcon>
                ) : null}
                <ListItemText primary={itemLabel} />
              </ListItemButton>
            ),
          )}
        </List>
      </Stack>
    </StyledNav>
  )
}

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        py: 2,
      }}
      textAlign="center"
    >
      Built with ♥️ by{' '}
      <ExternalLink href="https://benmvp.com">Ben Ilegbodu</ExternalLink> using{' '}
      <ExternalLink
        color="inherit"
        href="https://nextjs.org/"
        rel="noopener noreferrer"
        target="_blank"
        underline="always"
      >
        Next.js
      </ExternalLink>{' '}
      &amp;{' '}
      <ExternalLink
        color="inherit"
        href="https://mui.com/"
        rel="noopener noreferrer"
        target="_blank"
        underline="always"
      >
        MUI
      </ExternalLink>
      , deployed to{' '}
      <ExternalLink
        color="inherit"
        href="https://vercel.com/"
        rel="noopener noreferrer"
        target="_blank"
        underline="always"
      >
        Vercel
      </ExternalLink>
      .
    </Box>
  )
}
