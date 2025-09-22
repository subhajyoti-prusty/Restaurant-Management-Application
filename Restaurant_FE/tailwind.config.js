/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
    "./src/**/*.component.{html,ts,scss}"
  ],
  theme: {
    extend: {
      colors: {
        // Restaurant Theme Colors
        'restaurant': {
          primary: '#FF6B35',
          accent: '#06BCC1',
          warn: '#FF4444',
          success: '#2E8B57',
          dark: '#2C3E50',
          light: '#ECF0F1'
        },
        // Additional beautiful colors for restaurant app
        'orange': {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDB574',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12'
        }
      },
      fontFamily: {
        'sans': ['Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'serif': ['Georgia', 'Times New Roman', 'serif'],
        'mono': ['Fira Code', 'Monaco', 'Cascadia Code', 'monospace']
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem'
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'restaurant': '0 10px 15px -3px rgba(255, 107, 53, 0.1), 0 4px 6px -2px rgba(255, 107, 53, 0.05)'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'slide-in-up': 'slideInUp 0.6s ease-out',
        'bounce-in': 'bounceIn 0.8s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        bounceIn: {
          '0%, 20%, 40%, 60%, 80%, 100%': {
            'transition-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'
          },
          '0%': { opacity: '0', transform: 'scale3d(.3, .3, .3)' },
          '20%': { transform: 'scale3d(1.1, 1.1, 1.1)' },
          '40%': { transform: 'scale3d(.9, .9, .9)' },
          '60%': { opacity: '1', transform: 'scale3d(1.03, 1.03, 1.03)' },
          '80%': { transform: 'scale3d(.97, .97, .97)' },
          '100%': { opacity: '1', transform: 'scale3d(1, 1, 1)' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      backgroundImage: {
        'gradient-restaurant': 'linear-gradient(135deg, #FF6B35 0%, #06BCC1 100%)',
        'gradient-success': 'linear-gradient(135deg, #2E8B57 0%, #27ae60 100%)',
        'gradient-dark': 'linear-gradient(135deg, #2C3E50 0%, #34495e 100%)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }
    }
  },
  plugins: [
    // Add custom plugins for restaurant-specific utilities
    function({ addUtilities }) {
      const newUtilities = {
        '.glass-morphism': {
          'background': 'rgba(255, 255, 255, 0.25)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.18)',
        },
        '.hover-lift': {
          'transition': 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            'transform': 'translateY(-5px)',
            'box-shadow': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }
        },
        '.hover-glow': {
          'transition': 'box-shadow 0.3s ease',
          '&:hover': {
            'box-shadow': '0 0 20px rgba(255, 107, 53, 0.6)'
          }
        }
      }
      addUtilities(newUtilities)
    }
  ]
}