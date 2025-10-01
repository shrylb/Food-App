import { CustomButtonProps } from '@/type'
import cn from 'clsx'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
const CustomButton = ({
    onPress,
    title = "Press Button",
    style ,
    textStyle,
    leftIcon,
    isLoading = false
}:CustomButtonProps) => {

  return (
    <TouchableOpacity className={cn('custom-btn', style)} onPress={onPress}>
      <Text>CustomButton</Text>
    </TouchableOpacity>
  )
}

export default CustomButton