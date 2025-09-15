import Banner from "./components/banner/Banner";
import Copyright from "./components/copyright/Copyright";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import New from "./components/new/new";
import Recruitment from "./components/recruitment/Recruitment";
import Rowmenu from "./components/row-menu/Rowmenu";
import Row from "./components/row/row";
import Story from "./components/story/Story";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Story />
      <Row />
      <New />
      <Recruitment />
      <Rowmenu />
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
