import _ from 'lodash'
import React from 'react'
// rn
import { Platform } from 'react-native'
// lib
import { Modalize } from 'react-native-modalize'
// theme
import { DefaultModalConfig } from '../theme'
// styles
import { BottomSheetStyles } from '../styles'

export const BottomSheet = (props) => {

    const {
        bottomSheetRef,
        bottomSheetHeight = DefaultModalConfig.modalHeightGeneral,
        bottomSheetCloseAnimationConfig = DefaultModalConfig.closingModalSpeed,
        handleStyles = {},
        modalStyles = {},
        renderComponent = <></>,
        onClosed = () => null,
    } = props

    return (
        <Modalize
            ref={bottomSheetRef}
            // Danny: withReactModal prop is currently not work for Android
            withReactModal={Platform.OS === 'ios'}
            scrollViewProps={{ scrollEnabled: true, showsVerticalScrollIndicator: false }}
            closeAnimationConfig={bottomSheetCloseAnimationConfig}
            handlePosition="inside"
            modalHeight={bottomSheetHeight}
            handleStyle={[BottomSheetStyles.handleContainer, handleStyles]}
            modalStyle={[BottomSheetStyles.modalContainer, modalStyles]}
            onClosed={onClosed}
        >
            {renderComponent}
        </Modalize>
    )
}
