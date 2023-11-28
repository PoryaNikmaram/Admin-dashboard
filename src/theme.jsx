/* eslint-disable react/prop-types */
import { createTheme } from '@mui/material'
import { createContext, useState } from 'react'

// 1- ابتدا تمامی رنگ هایی که میخواهیم در برنامه داشته باشیم رو مشخص میکنیم , اون رو به یک فانکشن میسپریم و با استفاده از مدی که به اون پاس میدهیم رنگ های خواسته شده را بر میگردانیم
export const appColors = (mode) => {
  if (mode === 'dark') {
    return {
      grey: {
        100: '#e0e0e0',
        200: '#c2c2c2',
        300: '#a3a3a3',
        400: '#858585',
        500: '#666666',
        600: '#525252',
        700: '#3d3d3d',
        800: '#292929',
        900: '#141414',
      },
      black: {
        100: '#d0d1d5',
        200: '#a1a4ab',
        300: '#727681',
        400: '#1F2A40',
        500: '#141b2d',
        600: '#101624',
        700: '#0c101b',
        800: '#080b12',
        900: '#040509',
      },
      green: {
        100: '#dbf5ee',
        200: '#b7ebde',
        300: '#94e2cd',
        400: '#70d8bd',
        500: '#4cceac',
        600: '#3da58a',
        700: '#2e7c67',
        800: '#1e5245',
        900: '#0f2922',
      },
      red: {
        100: '#f8dcdb',
        200: '#f1b9b7',
        300: '#e99592',
        400: '#e2726e',
        500: '#db4f4a',
        600: '#af3f3b',
        700: '#832f2c',
        800: '#58201e',
        900: '#2c100f',
      },
      indigo: {
        100: '#e1e2fe',
        200: '#c3c6fd',
        300: '#a4a9fc',
        400: '#868dfb',
        500: '#6870fa',
        600: '#535ac8',
        700: '#3e4396',
        800: '#2a2d64',
        900: '#151632',
      },
    }
  } else {
    return {
      grey: {
        100: '#141414',
        200: '#292929',
        300: '#3d3d3d',
        400: '#525252',
        500: '#666666',
        600: '#858585',
        700: '#a3a3a3',
        800: '#c2c2c2',
        900: '#e0e0e0',
      },
      black: {
        100: '#040509',
        200: '#080b12',
        300: '#0c101b',
        400: '#f2f0f0',
        500: '#141b2d',
        600: '#1F2A40',
        700: '#727681',
        800: '#a1a4ab',
        900: '#d0d1d5',
      },
      green: {
        100: '#0f2922',
        200: '#1e5245',
        300: '#2e7c67',
        400: '#3da58a',
        500: '#4cceac',
        600: '#70d8bd',
        700: '#94e2cd',
        800: '#b7ebde',
        900: '#dbf5ee',
      },
      red: {
        100: '#2c100f',
        200: '#58201e',
        300: '#832f2c',
        400: '#af3f3b',
        500: '#db4f4a',
        600: '#e2726e',
        700: '#e99592',
        800: '#f1b9b7',
        900: '#f8dcdb',
      },
      indigo: {
        100: '#151632',
        200: '#2a2d64',
        300: '#3e4396',
        400: '#535ac8',
        500: '#6870fa',
        600: '#868dfb',
        700: '#a4a9fc',
        800: '#c3c6fd',
        900: '#e1e2fe',
      },
    }
  }
}

//2-پلت مد نظ رو هم با استفاده از مودی که کاربر قراره انتخاب کنه کاستومایز میکنیم
const palletTheme = (mode) => {
  const colors = appColors(mode)
  if (mode === 'dark') {
    return {
      primary: {
        main: colors.black[500],
      },
      secondary: {
        main: colors.green[500],
      },
      neutral: {
        dark: colors.grey[700],
        main: colors.grey[500],
        light: colors.grey[100],
      },
      background: {
        default: colors.black[500],
      },
    }
  } else {
    return {
      primary: {
        main: colors.black[100],
      },
      secondary: {
        main: colors.green[500],
      },
      neutral: {
        dark: colors.grey[700],
        main: colors.grey[500],
        light: colors.grey[100],
      },
      background: {
        default: '#fcfcfc',
      },
    }
  }
}

// 3- پلت و تایپوگرافی های کاستومایز شده رو با توجه به مود در یک ابجکت قرار میدهیم
const themColors = (mode) => {
  return {
    palette: {
      mode: mode,
      ...palletTheme(mode),
    },
    typography: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 14,
      },
    },
  }
}

export const AppThemeContext = createContext()

export function AppThemeProvider({ children }) {
  const [mode, setMode] = useState('light')
  const theme = createTheme(themColors(mode))

  function toggleDarkMode() {
    setMode((mode) => (mode === 'dark' ? 'light' : 'dark'))
  }

  return (
    <AppThemeContext.Provider value={{ mode, theme, toggleDarkMode }}>
      {children}
    </AppThemeContext.Provider>
  )
}
