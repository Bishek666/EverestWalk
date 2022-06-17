import { useEffect, useState } from "react";

// const getLocalStorage = (key, initialValue) => {
//     let storedValue = JSON.parse(localStorage.getItem(key));
    
//     if (storedValue) return storedValue;
//     if (initialValue instanceof Function) return initialValue();

//     return storedValue;

//     // if (initialValue instanceof Function) return initialValue();
//     // if (storedValue && storedValue === JSON.stringify(initialValue)) {
//     //     return storedValue;
//     // }else {
//     //     localStorage.removeItem(key);
//     //     storedValue =  JSON.stringify(initialValue);
//     // }
 
//     // return storedValue;
// }

// export default function useLocalStorage(key, initialValue) {
//     const [value, setValue] = useState(() => {
//         return getLocalStorage(key, initialValue)
//     })

//     useEffect(() => {
//         localStorage.removeItem(key);
//         localStorage.setItem(key, JSON.stringify(value));
//     }, [value])


//     return [value, setValue];
// }



export default function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
      if (typeof window === "undefined") {
        return initialValue;
      }
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        return initialValue;
      }
    });
    const setValue = (value) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.log(error);
      }
    };
    return [storedValue, setValue];
  }