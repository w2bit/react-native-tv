import 'core-js/stable';
import 'regenerator-runtime/runtime'; 
import { AppRegistry } from "react-native";
import { App } from "@react-native-tv/app";
// import { init } from '@noriginmedia/norigin-spatial-navigation';

// init({
//   // options
//   nativeMode: true,
// });

AppRegistry.registerComponent("App", () => App);
AppRegistry.runApplication("App", {
    rootTag: document.getElementById("root")
});
