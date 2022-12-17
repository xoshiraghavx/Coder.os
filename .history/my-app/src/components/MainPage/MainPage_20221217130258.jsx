import "./MainPage.css";
import FilterSection from "./FilterSection";
import QuestionBank from "./QuestionBank";
import 

function MainPage() {
  return (
    <div>
      <NavBar />
      <div className="main-section">
        <FilterSection />
        <QuestionBank />
      </div>
    </div>
  );
}

export default MainPage;
