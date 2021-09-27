import ImageColors from 'react-native-image-colors';

export const getImageColor = async (uri: string) => {
  let primary: string = '';
  let secondary: string = '';
  let tertiary: string = '';
  try {
    const result = await ImageColors.getColors(uri);
    switch (result.platform) {
      case 'android':
        // android result properties
        primary = result.dominant!;
        secondary = result.average!;
        tertiary = result.vibrant!;
        break;
      case 'ios':
        // iOS result properties
        primary = result.primary;
        secondary = result.secondary;
        tertiary = result.detail;
        break;
      default:
        throw new Error('Unexpected platform key');
    }
  } catch (e) {
    console.log(e);
  }

  return {
    primary,
    secondary,
    tertiary,
  };
};
