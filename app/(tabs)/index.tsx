import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
    <View className="bg-primary p-10 rounded-3xl m-10 flex-auto flex-col justify-between items-center content-center">
      {/* Main Content Container */}
      <View className="bg-white rounded-3xl">
        <Text className="text-5xl text-center p-10 m-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </View>
      {/* Camera Button */}
      <TouchableOpacity
        className="bg-white rounded-full items-center m-auto p-10"
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
