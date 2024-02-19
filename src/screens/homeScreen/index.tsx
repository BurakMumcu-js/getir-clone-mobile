import React from 'react'
import {View,Text,Image, ScrollView} from "react-native"
import HeaderMain from "../../components/HeaderMain"
import BannerCarousel from "../../components/BannerCarousel";


function index() {
  return (
   <ScrollView>
        <HeaderMain/>
        <BannerCarousel/>
   </ScrollView>
  )
}

export default index