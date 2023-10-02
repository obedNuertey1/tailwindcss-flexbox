import './App.css'
import CatImageComponent from './components/CatImageComponent';

const App = ():JSX.Element => {
  return (
    <>
      <header id="header" className="header uppercase p-8 bg-header-color text-white text-xl font-extrabold border-b-4 border-solid border-head-border">
        <h1>css flexbox photo gallery</h1>
      </header>
      <div id="gallery" className="gallery flex flex-row flex-wrap justify-center items-center max-w-screen-2xl my-0 mx-auto object-cover gap-4">
          <CatImageComponent className="w-full max-w-sm h-80 rounded-lg" />
      </div>
    </>
  );
};

export default App;