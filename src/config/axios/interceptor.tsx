import {useEffect} from 'react';
import {axiosConfig} from './index';

const useInterceptor = (store: any) => {
  const handleRequestSuccess = (request: any) => {
    // const state = store.getState();
    // const { token } = state.user;
    // request.headers["token"] = token; // Example 1
    // request.headers.authorization = `Bearer ${token}`; // Example 2
    //request.params.language = store.language || 'es-ES'; // Remove
    request.headers['Content-Type'] = 'application/json';
    request.headers.accept = 'application/json';
    return request;
  };
  const handleRequestError = (error: any) => {
    console.log(`REQUEST ERROR! => ${error}`);
  };

  const handleResponseSuccess = (response: any) => {
    return response;
  };

  const handleResponseError = (error: any) => {
    console.log(`RESPONSE ERROR! => ${error}`);
  };

  useEffect(() => {
    axiosConfig.interceptors.request.use(
      handleRequestSuccess,
      handleRequestError,
    );
    axiosConfig.interceptors.response.use(
      handleResponseSuccess,
      handleResponseError,
    );
  }, []);
};

export default useInterceptor;
