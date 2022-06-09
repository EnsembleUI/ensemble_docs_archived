import React from 'react';
import * as firebase from 'firebase/app';

const app = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  appId: process.env.FIREBASE_APP_ID,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
});


export default function Root({children}) {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
}