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
    <div style={{ display: 'flex', gap: '10px' }}>
      {data.map((post) => (
        <div 
          key={post.id} 
          style={{ 
            width: '150px', height: '150px', 
            background: '#fff740', padding: '15px', 
            boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
            borderRadius: '5px' 
          }}
        >
          {post.text}
        </div>
      ))}
    </div>
  </div>
);
