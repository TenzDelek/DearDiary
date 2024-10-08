"use client"
import { useTheme } from '@/context/ThemeProvider'
import { Moon, Sun } from 'lucide-react'

const ThemeToggle = () => {
    const {darkMode, toggleTheme} = useTheme()

  return (
    <button className="h-10 w-10 border-2 rounded-md  border-gray-300 justify-center items-center flex" onClick={()=>toggleTheme()}>
        {
            darkMode ? 
            <Moon /> : 
            <Sun /> 
        }
    </button>
  )
}

export default ThemeToggle