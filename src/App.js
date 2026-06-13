import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, onSnapshot } from 'firebase/firestore';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      setData(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  return (
    <div style={{ padding: '50px' }}>
      <h1>슥삭(Sseuk-Sak)</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
