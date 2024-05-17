import "./App.css";
import BrowseByLanguage from "./components/BrowseByLanguage/BrowseByLanguage";
import Movies from "./components/Movies/Movies";
import MyList from "./components/MyList/MyList";
import NewPopular from "./components/NewPopular/NewPopular";
import TvShows from "./components/TvShows/TvShows";
import { Route, Routes } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Four04 from "./components/Four04/Four04";
// import { Outlet, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element ={<> <Header/> <Outlet/> <Footer/> </>}/> */}
        <Route  path="/" element={<SharedLayout/>}>

            <Route path="/" element={<Home />} />
            <Route path="/tvshows" element={<TvShows/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/newpopular" element={<NewPopular/>}/>
            <Route path="/mylist" element={<MyList/>}/>
            <Route path="/browsebylanguages" element={<BrowseByLanguage/>}/>

        </Route>

        <Route path="*" element={<Four04/>}/>

      </Routes>
     
    </div>
  );
}

export default App;
