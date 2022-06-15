module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,}'],
  theme: {
    colors: {
      white: '#ffffff',
      'bubble-gum': '#ff77e9',
      Blue: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a'
      },
      Teal: {
        50: '#f0fdfa',
        100: '#ccfbf1',
        200: '#99f6e4',
        300: '#5eead4',
        400: '#2dd4bf',
        500: '#14b8a6',
        600: '#0d9488',
        700: '#0f766e',
        800: '#115e59',
        900: '#134e4a'
      },
      Rose: {
        50: '#fff1f2',
        100: '#ffe4e6',
        200: '#fbcfe8',
        300: '#f9a8d4',
        400: '#f472b6',
        500: '#ec4899',
        600: '#db2777',
        700: '#be185d',
        800: '#9d174d',
        900: '#831843'
      },
      Gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827'
      },
      Indigo: {
        600: '#4f46e5'
      },
      Zinc: {
        200: '#e4e4e7',
        900: '#18181b'
      },
      Red: {
        400: '#f87171',
        600: '#dc2626'
      },
      Orange: {
        500: '#ef4444',
        600: '#ea580c'
      },
      Violet: {
        500: '#8b5cf6'
      },
      Cyan: {
        500: '#06b6d4'
      },
      Sky: {
        700: '#0369a1'
      },
      Slate: {
        400: '#94a3b8'
      }
    },
    extend: {
      backgroundImage: {
        search: "url('indir.jpeg')"
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        '50%': '50%',
        4: '2rem'
      }
    }
  },
  plugins: []
};
