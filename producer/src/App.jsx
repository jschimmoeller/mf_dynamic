import Button from './Button';

const App = () => {
  const handleClick = () => {
    alert('Button from Producer clicked!');
  };

  return (
    <div className="bg-blue-500 h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 text-white">Producer</h1>
      <p className="text-white mb-6">Start building amazing things with Rsbuild.</p>
      <Button onClick={handleClick}>Click Me (Producer Button)</Button>
    </div>
  );
};

export default App;
