// Firebase is optional. Configure your own project at https://console.firebase.google.com
// Without config, the contact form gracefully falls back to localStorage.

let db = null;

try {
  const firebaseConfig = {
    // Paste your Firebase config here to enable Firestore:
    // apiKey: "...",
    // authDomain: "...",
    // projectId: "...",
    // storageBucket: "...",
    // messagingSenderId: "...",
    // appId: "...",
  };

  if (firebaseConfig.apiKey) {
    const { initializeApp } = await import('firebase/app');
    const { getFirestore } = await import('firebase/firestore');
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
  }
} catch (_) {}

export { db };