import {useState,useCallback} from 'react'
import { View, Text,TouchableOpacity,FlatList,ActivityIndicator,RefreshControl } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import {COLORS,SIZES} from '../../../constants'
import Popularjobcard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hook/useFetch'
const Popularjobs = () => {
  const router =useRouter()
  const {data,isLoading,error,refetch} = useFetch('search',{query:'React developer',num_pages:1})
  const [selectedJob,setSelectedJobs] = useState()
  const [refreshing, setRefereshing] = useState(false)

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`)
    setSelectedJobs(item.job_id)
  }

  const onRefresh=useCallback(()=>{
    setRefereshing(true)
    refetch()
    setRefereshing(false)
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}> Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}> 
      {isLoading ? (
      <ActivityIndicator size='large' colors={COLORS.primary}/>
      ):error ? (
        <Text>Something went wrong</Text>
      ): (
        <FlatList
        data={data}
        renderItem={({item})=>(
          <Popularjobcard 
          item={item}
          selectedJob={selectedJob}
          handleCardPress={handleCardPress}
          />
        )}
        keyExtractor={item =>item ?.job_id}
        contentContainerStyle={{columnGap:SIZES.medium}}
        horizontal
        />
      )}
      </View>
    </View>
  )
}

export default Popularjobs