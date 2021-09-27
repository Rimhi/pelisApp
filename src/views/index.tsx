import {useScreen} from './screens';
import {useComponents} from './components';
import {useLayouts} from './layouts';
export const useViews = () => ({
  useScreen,
  useComponents,
  useLayouts,
});
