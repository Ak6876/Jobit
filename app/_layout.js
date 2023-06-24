import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashSCreen from 'expo-splash-screen'

SplashSCreen.preventAutoHideAsync
const Layout = () =>{
    const [fontsloaded] = useFonts({
        DMBold:require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium:require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular:require('../assets/fonts/DMSans-Regular.ttf'),
    })
    const onLayoutRootView = useCallback(async ()=>{
        if(fontsloaded){
            await SplashSCreen.hideAsync();
        }
    },[fontsloaded])
    if(!fontsloaded) return null
    return <Stack onLayout={onLayoutRootView}/>
}

export default Layout