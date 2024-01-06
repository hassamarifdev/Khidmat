import { StyleSheet, Text, View, useSta } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../utils/GlobalApi'

export default function Slider() {
    const [slider, setSlider] = useState();
    useEffect(()=>{
        getSlider();
    },[])


    const getSlider=()=>{
        GlobalApi.getSlider().then(res=>{
            console.log("response: ",res.sliders)
            setSlider(res?.sliders)
        })
    }
  return (
    <View>
      <Text>Slider</Text>
    </View>
  )
}

const styles = StyleSheet.create({})