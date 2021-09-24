import {useState} from 'react';

/**
 * Custom hook for handling the token
 * 
 * @returns token, saveToken
 */
const useToken = () => {
    //Get token from localStorage and converts it to JSON
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
      };

      //Declare a new state variable called token
      //And assign to it the token retrieved from localStorage
      const [token, setToken] = useState(getToken());

      //Set token to localStorage
      const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
      };

      return {
        setToken: saveToken,
        token
      }
}

export default useToken
