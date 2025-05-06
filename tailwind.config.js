/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			colorBrandPink50light: '#feeef1',
  			colorBrandPink300medium: '#f88ba2',
  			colorBrandPink500dark: '#f55274',
  			colorBrandPurple500light: '#3521ab',
  			colorBrandPurple900dark: '#160e48',
  			colorBrandWhiteYellow100light: '#fefdf5',
  			colorBrandWhiteYellow100lightOpacity: 'rgba(254, 253, 245, 0.04)',
  			colorBrandWhiteYellow200medium: '#fefbf0',
  			colorBrandGray800dark: '#202020',
  			colorBrandGreen200light: '#e0eec1',
  			colorBrandGreen500medium: '#bcd979',
  			colorBrandGreen700dark: '#859a56',
  			colorBrandCyan200light: '#c9e4eb',
  			colorBrandCyan500medium: '#8ac4d4',
  			colorBrandCyan600dark: '#7eb2c1',
  			colorBrandRed400light: '#d93333',
  			colorBrandRed500medium: '#d00000',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Rubik',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			textsizebrandh1: 'clamp(3rem, 5vw, 4rem)',
  			textsizebrandh2: 'clamp(2.5rem, 4vw, 3rem)',
  			textsizebrandh3: 'clamp(2rem, 3.5vw, 2.5rem)',
  			textsizebrandh4: 'clamp(1.75rem, 3vw, 2rem)',
  			textsizebrandh5: 'clamp(1.5rem, 2.5vw, 1.5rem)',
  			textsizebrandh6: 'clamp(1.125rem, 2vw, 1.25rem)',
  			textsizebrandp: 'clamp(1rem, 1.5vw, 1rem)',
  			textsizebrandpsmall: 'clamp(0.75rem,1.2vw,0.75rem)',
  			textsizebrandpxsmall: 'clamp(0.625rem,1vw,0.625rem)',
  			textsizebrandpxxsmall: 'clamp(0.5rem,0.8vw,0.5rem)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
