import {useServices} from './services';
import {useProviders} from './providers';

export const useApi = () => ({
  useServices,
  useProviders,
});
