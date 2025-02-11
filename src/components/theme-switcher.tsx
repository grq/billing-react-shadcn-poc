import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <Button variant="outline" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </Button>
  )
}