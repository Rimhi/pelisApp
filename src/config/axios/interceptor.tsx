import {axiosConfig} from './index';

export const getOhtersViedo = (more: boolean) => {

  if (more) {
    axiosConfig.interceptors.request.use(request => {
      console.log(request.params);
      request.params = {
        api_key: '6fe592a1511f4afafa9e9e24fd0f2daa',
        language: 'es-MX,es-ES',
        //include_video_language: 'en-US',
      };
      console.log(request.params);
      return request;
    });
  } else {
    axiosConfig.interceptors.request.use(request => {
      request.params = {
        api_key: '6fe592a1511f4afafa9e9e24fd0f2daa',
        language: 'es-MX',
      };
      return request;
    });
  }
};

