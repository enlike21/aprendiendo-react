import  {useState} from "react"

// Custom hook para obtener el fact del gato
export function useCatFact() {
    const [fact, setFact] = useState(null);
    const [error, setError] = useState(null); // Manejo de errores
    const [firstWord, setFirstWord] = useState(null);
  
    const CAT_ENDPOINT_FACT = `https://catfact.ninja/fact`;
  
    const handleClick = () => { // FUNCIÓN PARA OBTENER UN NUEVO FACT AL HACER CLICK
      setError(null);
  
      // Primera petición para obtener el fact del gato
      fetch(CAT_ENDPOINT_FACT)
        .then(res => {
          if (!res.ok) {
            throw new Error('Error al obtener el fact del gato');
          }
          return res.json();
        })
        .then(data => {
          const { fact } = data; // Desestructuramos el JSON
          setFact(fact);
  
          // Primera palabra del fact
          const firstWord = fact.split(' ')[0];
          setFirstWord(firstWord); // Actualizamos la palabra clave para el custom hook
          console.log(firstWord);
        })
        .catch(error => {
          console.error("Error al obtener el fact del gato:", error);
          setError('Hubo un problema al obtener el fact del gato. Por favor, inténtalo más tarde.');
        });
    };
  
    return { fact, error, firstWord, handleClick };
  }