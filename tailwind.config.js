/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        war: {
          dark: 'var(--war-dark)',
          panel: 'var(--war-panel)',
          border: 'var(--war-border)',
          accent: 'var(--war-accent)',
          accentLight: 'var(--war-accentLight)',
          accentDim: 'var(--war-accentDim)',
          success: 'var(--war-success)',
          successDim: 'var(--war-successDim)',
          danger: 'var(--war-danger)',
          dangerDim: 'var(--war-dangerDim)',
          info: 'var(--war-info)',
          muted: 'var(--war-muted)',
          surface: 'var(--war-surface)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up-visible': {
          '0%': { transform: 'translateY(12px)' },
          '100%': { transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down-visible': {
          '0%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-8px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-left-visible': {
          '0%': { transform: 'translateX(-8px)' },
          '100%': { transform: 'translateX(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(167, 139, 250, 0.3)' },
          '50%': { boxShadow: '0 0 14px 3px rgba(167, 139, 250, 0.25)' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.98)' },
          '100%': { transform: 'scale(1)' },
        },
        'scale-in-bounce': {
          '0%': { transform: 'scale(0.92)', opacity: '0.9' },
          '70%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'pulse-slow': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.45s ease-out both',
        'fade-in-up-visible': 'fade-in-up-visible 0.4s ease-out forwards',
        'fade-in-down': 'fade-in-down 0.35s ease-out both',
        'fade-in-down-visible': 'fade-in-down-visible 0.35s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.35s ease-out both',
        'slide-in-left-visible': 'slide-in-left-visible 0.3s ease-out forwards',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'scale-in': 'scale-in 0.35s ease-out forwards',
        'scale-in-bounce': 'scale-in-bounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-in': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
