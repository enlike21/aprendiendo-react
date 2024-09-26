import { useEffect, useState } from 'react';
import { useCatFact } from './useCatFact';
import './App.css';

// Custom hook para obtener la URL de la imagen
function useCatImage(word) {
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    if (!word) return; // Si no hay palabra, no hago la petición

    // Genero la URL de la imagen con la palabra
    const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${word}`;
    setImageURL(CAT_ENDPOINT_IMAGE_URL);
  }, [word]); // Ejecuta cuando la palabra cambia

  return { imageURL };
}

function App() {
  const { fact, error, firstWord, handleClick } = useCatFact();
  const { imageURL } = useCatImage(firstWord);

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      placeItems: 'center',
      textAlign: 'center'
    }}>
      <h1>App de gatitos</h1>

      {error ? ( // Mostrar mensaje de error si ocurre
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <>
          <button onClick={handleClick}>Get new fact</button>
          {fact && <p>{fact}</p>}
          {imageURL && <img style={{
            maxWidth: '300px',
            height: 'auto'
          }} src={imageURL} alt="Image of a cat saying the first word of the fact" />}
        </>
      )}
    </main>
  );
}

export default App;
