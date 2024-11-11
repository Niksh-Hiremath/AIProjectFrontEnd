import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import {
  VideoCameraIcon,
  VideoCameraSlashIcon,
} from "react-native-heroicons/outline";
import { useState } from "react";

const App: React.FC = () => {
  const [active, setActive] = useState(false);

  function handlePress() {
    setActive(!active);
    if (active) {
      // Make API call to backend to start
      console.log("Camera is active");
    } else {
      // Make API call to backend to stop
      console.log("Camera is inactive");
    }
  }

  return (
    <View className="bg-primary p-10 rounded-3xl m-10 flex-auto flex-col justify-between items-center content-center gap-10">
      {/* Main Content Container */}
      <View className="bg-white rounded-3xl h-4/5">
        <ScrollView>
          <Text className="text-2xl p-10 m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. 
            {"\n"} Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
            {"\n"} Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
            {"\n"} Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
            {"\n"} Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
            {"\n"} Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
            {"\n"} Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
            {"\n"} Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
            {"\n"} Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        </ScrollView>
      </View>
      {/* Camera Button */}
      <TouchableOpacity
        className="bg-white rounded-full items-center m-auto p-10 h-1/6"
        onPress={handlePress}
      >
        {active ? (
          <VideoCameraIcon className="fill-primary" color="white" size={120} />
        ) : (
          <VideoCameraSlashIcon
            className="fill-primary"
            color="white"
            size={120}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default App;
