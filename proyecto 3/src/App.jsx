import { useState, useEffect } from 'react'
import './App.css'

const FollowMouse = () => {  // Nombre del componente FollowMouse (mayúscula)
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
  
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }
  
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // Cleanup: remover el event listener cuando ya no esté habilitado
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])  // Reacciona a cambios en 'enabled'
  
  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }} />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}

function App() {
  return (
    <main>
      <FollowMouse />  {/* FollowMouse como un componente JSX */}
    </main>
  )
}

export default App
