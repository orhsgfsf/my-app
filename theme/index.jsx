import {
  Dimensions,
  PixelRatio,
  Platform,
} from 'react-native'
import * as Variables from './variables'

export const ScreenHeight = Dimensions.get('window').height
export const ScreenWidth = Dimensions.get('window').width
export const ThemeConst = Variables

// take IPhone X as a reference (can take any IPhone ratio base on designer's preference)
const scale = ScreenWidth / 375

// config of closing modal
export const DefaultModalConfig = {
  closingModalSpeed: { timing: { duration: 400 } },
  modalHeightGeneral: Scale(280),
  modalHeightPicker: Scale(350),
}

export function FontScale(size) {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

export function Scale(size) {
  const newSize = size * scale
  return Math.round(PixelRatio.roundToNearestPixel(newSize))
}

export const DefaultStyles = {
  absoluteLayout: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowLayoutWithSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowLayoutWithAllCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLayoutWithAlignItemsStart: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  rowLayoutWithAlignItemsEnd: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  columnLayoutWithAlignItemsCenter: {
    alignItems: 'center',
  },
  columnLayoutWithJustifyContentCenter: {
    justifyContent: 'center',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  fontBigBold: {
    fontWeight: 'bold',
    fontSize: Scale(20),
    lineHeight: Scale(23),
    color: ThemeConst.Color.black1,
  },
  fontMedium: {
    fontWeight: 'normal',
    fontSize: Scale(14),
    lineHeight: Scale(17),
    color: ThemeConst.Color.black1,
  },
  fontMediumSemiBold: {
    fontWeight: '500',
    fontSize: Scale(14),
    lineHeight: Scale(17),
    color: ThemeConst.Color.black1,
  },
  fontMediumBold: {
    fontWeight: 'bold',
    fontSize: Scale(14),
    lineHeight: Scale(17),
    color: ThemeConst.Color.black1,
  },
  fontMediumHalfSmallSemiBoldWithoutColor: {
    fontWeight: '500',
    fontSize: Scale(13),
    lineHeight: Scale(16),
  },
  fontMediumSmall: {
    fontWeight: 'normal',
    fontSize: Scale(12),
    lineHeight: Scale(15),
    color: ThemeConst.Color.black1,
  },
  fontMediumSmallSemiBold: {
    fontWeight: '500',
    fontSize: Scale(12),
    lineHeight: Scale(15),
    color: ThemeConst.Color.black1,
  },
  fontSmall: {
    fontWeight: 'normal',
    fontSize: Scale(10),
    lineHeight: Scale(13),
    color: ThemeConst.Color.black1,
  },
}
