
import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import CalendarPicker from 'react-native-calendar-picker'
const App = () => {
  const [selectedStartDate,setSelectedStartDate]=useState(null)
  const [selectedEndDate,setSelectedEndDate]=useState(null)
      const minDate = new Date(); 
    const maxDate = new Date(2035,12,3);

const onDateChange=(date,type)=>{
if(type==='END_DATE'){
    setSelectedEndDate(date)
}
else{
  setSelectedStartDate(date)
   setSelectedEndDate(null)
}
}

  return (
      <View style={styles.container}>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          todayBackgroundColor="#f2e6ff"
          selectedDayColor="#7300e6"
          selectedDayTextColor="#FFFFFF"
          onDateChange={onDateChange}
        />

        <View>
          <Text>SELECTED START DATE:{selectedStartDate?selectedStartDate.toString():'' }</Text>
          <Text>SELECTED END DATE:{selectedEndDate?selectedEndDate.toString():'' }</Text>
        </View>
      </View>
  )
}

export default App

const styles = StyleSheet.create({})