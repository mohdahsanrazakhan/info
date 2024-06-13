import './App.css'
import LinkMap from './pages/LinkMap'
import { useTheme } from './components/ThemeProvider/ThemeProvider'


function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className='bg-primaryDark-background dark:bg-primaryLight-background text-primaryDark-text dark:text-primaryLight-text '>
      <header>
        {/* <button onClick={toggleTheme} className='bg-primaryDark-accent dark:bg-primaryLight-accent p-2 rounded'>
          Toggle Theme
        </button> */}
      </header>
      <LinkMap />
    </div>
  )
}

export default App
