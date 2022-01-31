import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, } from 'react-native';
import DatePicker from 'react-native-datepicker'
import styles from './styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CheckBox, Icon } from 'react-native-elements';

const Second = () => {
    const [name, setName] = useState("")
    const [date, setData] = useState("2016-05-15")
    const [male, setMale] = useState(false);
    const [female, setFemale] = useState(false);
    const saveData = () => {
        if (name == "") {
            alert('All Field is mandatory')
        } else if (date == "") {
            alert('Date of birth is mandatory')
        } else if (male || female) {

            alert('All Data have been save')
        } else {
            alert('Gender is mandatory')
        }
    }


    const genderMale = () => {
        setMale(true)
        setFemale(false)
    }
    const genderFemale = () => {
        setMale(false)
        setFemale(true)
    }

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <TextInput
                    placeholder="Name"
                    style={styles.textInput}
                    onChangeText={(val) => { setName(val) }}
                />

                <DatePicker
                    style={styles.datepikar}
                    date={date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2016-05-01"
                    maxDate="2016-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => { setData(date) }}
                />
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <CheckBox
                        center
                        title="Male"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={male}
                        onPress={() => genderMale()}
                    />
                    <CheckBox
                        center
                        title="Female"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={female}
                        onPress={() => genderFemale()}
                    />
                </View>

                <TouchableOpacity
                    onPress={() => saveData()}
                    style={styles.submitBtn}
                >
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaProvider>
    );
};


export default Second;
