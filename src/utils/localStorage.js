
// Obtener datos del localStorage
export const getStateLocalStorage = () => {
    const tweetsStorage = localStorage.getItem("tweets");
    if( tweetsStorage === null) return undefined;
    return JSON.parse(tweetsStorage);
};

// Añadir tweets al localStorage
export const setStateLocalStorage = state => {
    localStorage.setItem("tweets", JSON.stringify(state))
};