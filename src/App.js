import { Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "./input.scss";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Information from "./components/Information";
import TrackerPage from "./components/TrackerPage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiyO32-RI1YCXSwtznSfRVPtCrMrRjJSA",
  authDomain: "ctkun-covid19-tracker.firebaseapp.com",
  projectId: "ctkun-covid19-tracker",
  storageBucket: "ctkun-covid19-tracker.appspot.com",
  messagingSenderId: "703751871572",
  appId: "1:703751871572:web:708c0aab3450b56052e1c1",
  measurementId: "G-57QXVDT1HL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/information" element={<Information />} />
        <Route path="/tracker" element={<TrackerPage />} />
      </Routes>
    </div>
  );
}

export default App;
