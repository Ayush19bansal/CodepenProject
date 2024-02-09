import {getApps,getApp,initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBY6_eZn4tV3RmEMNXxf9TYljx84tjTmjo",
    authDomain: "codepen-clone-33e83.firebaseapp.com",
    projectId: "codepen-clone-33e83",
    storageBucket: "codepen-clone-33e83.appspot.com",
    messagingSenderId: "663466475533",
    appId: "1:663466475533:web:2949a3691cacd59c4cd544"
  };

  const app= getApps.length>0?getApp():initializeApp(firebaseConfig);

  const auth=getAuth(app);
  const db=getFirestore(app);

  export {app,auth,db};