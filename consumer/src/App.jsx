import { lazy, Suspense } from 'react';

import RemoteButton from 'remote/Button';

// Dynamically import the Button component from the producer remote
const RemoteButton = lazy(() => import('remote/Button'));

const App = () => {
  const handleRemoteClick = () => {
    alert('Remote Button from Producer clicked in Consumer!');
  };

  console.log('RemoteButton', RemoteButton);
  return (
    <div className="bg-black h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4 text-white">Consumer</h1>
      <p className="text-white mb-6">Loading remote component from Producer...</p>
      
      <Suspense fallback={<div className="text-white">Loading remote button...</div>}>
        <RemoteButton onClick={handleRemoteClick}>
          Click Remote Button from Producer
        </RemoteButton>
      </Suspense>

 
    </div>
  );
};

export default App;
