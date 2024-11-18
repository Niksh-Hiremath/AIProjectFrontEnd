import { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Button,
  StyleSheet,
} from "react-native";
import {
  VideoCameraIcon,
  VideoCameraSlashIcon,
} from "react-native-heroicons/outline";
import { useState } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import React from "react";

const App: React.FC = () => {
  const [active, setActive] = useState(false);
  const [camera, setCamera] = useState(null);
  const [record, setRecord] = useState(null);
  const [recording, setRecording] = useState(false);
  const onCameraReady = () => {
    setRecording(true);
  };
  useEffect(() => {
    (async () => {
      if (recording && camera) {
        console.log("Recording");
        const localRecord = camera.record();
        console.log(localRecord)
        localRecord.then((r) => {
          console.log(r);
          setRecord(r.uri);
          console.log(record);
        });
      }
    })();
  }, [recording, camera]);
  const stopVideo = async () => {
    console.log("Stopping video");
    await camera.stopRecording();
  };
  function handlePress() {
    const t = !active;
    setActive(!active);

    if (t) {
      console.log("Camera is active");

      setRecording(true);
    } else {
      console.log("Camera is inactive");
      stopVideo();
      setRecording(false);
      setCamera(null);
    }
  }

  const [permission, requestPermission] = useCameraPermissions();
  if (!permission) {
    return <View />;
  }
  return (
    <ScrollView
      className={
        "bg-primary p-10 rounded-3xl m-10 flex-auto flex-col content-center gap-10 box-content " +
        (active ? "border-red-600 border-solid border-8 p-8" : "")
      }
    >
      {active && permission.granted ? (
        <CameraView
          style={[styles.camera]}
          facing="front"
          ref={(ca) => setCamera(ca)}
          onCameraReady={onCameraReady}
        ></CameraView>
      ) : (
        <></>
      )}
      {!permission && (
        <View>
          <Text>We need your permission to show the camera</Text>
          <Button onPress={requestPermission} title="grant permission" />
        </View>
      )}
      {/* Main Content Container */}
      <View className="bg-white rounded-3xl h-4/5">
        <ScrollView>
          <Text className="text-2xl p-10 m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            {"\n"} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
            {"\n"} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
            {"\n"} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
            {"\n"} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
            {"\n"} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
            {"\n"} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
            {"\n"} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
            {"\n"} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
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
    </ScrollView>
  );
};

export default App;
const styles = StyleSheet.create({
  camera: {
    height: 300,
    width: 300,
    borderColor: "red",
    borderWidth: 2,
  },
});
