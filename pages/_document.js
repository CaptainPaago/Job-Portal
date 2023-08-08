import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <body>
      <script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = 
  {
    apiKey: "AIzaSyDjU6z-31scuU5I1NH9KxfSjOsjfE1Z_yc",
    authDomain: "protege-8dc6c.firebaseapp.com",
    databaseURL: "https://protege-8dc6c-default-rtdb.firebaseio.com",
    projectId: "protege-8dc6c",
    storageBucket: "protege-8dc6c.appspot.com",
    messagingSenderId: "904071681418",
    appId: "1:904071681418:web:6c225a3f60eabaf14fa473",
    measurementId: "G-5R5CRY6627"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
