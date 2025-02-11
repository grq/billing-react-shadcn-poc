module.exports = {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  preflight: false,
  plugins: [],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        'border-primary': 'hsl(var(--primary))',
        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--sidebar-foreground))',
        success: 'hsl(var(--success))',
        'success-foreground': 'hsl(var(--success-foreground))',
        error: 'hsl(var(--error))',
        'error-foreground': 'hsl(var(--error-foreground))',
        border: 'hsl(var(--sidebar-border))',
        'popover': 'hsl(var(--background))',
        'popover-foreground': 'hsl(var(--foreground))',
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      }
    }
  }
}