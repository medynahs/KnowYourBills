import {Dimensions, PixelRatio} from 'react-native';

const {width} = Dimensions.get('window');
const scale = width / 380;

const normalizeSize = (size: number) => {
  const parseString = typeof size === 'string' ? size : size.toString();
  const parsedSize = parseInt(parseString.replace('px', ''), 10);
  const newSize = parsedSize * scale;

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export default normalizeSize;
