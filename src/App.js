import React, {useEffect, useState} from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";
import dashboardService from "./services/dashboard.service";

// Dashboard - 各页面组件 - @睿
import MainPage from "./topics/MainPage";
import Livelihood from "./topics/Livelihood";
import FoodSecurity from "./topics/FoodSecurity";
import Crops from "./topics/Crops";
import Livestock from "./topics/Livestock";
import OffFarmIncome from "./topics/OffFarmIncome";


// App/Dashboard
const App = () => {
  // The default setting/state of dashboard
  // Hook - useState : https://zh-hans.reactjs.org/docs/hooks-reference.html#usestate
  const [currentPage, setCurrentPage] = useState('MainPage');
  const [data, setData] = useState(null);

  const fetchData = () => {
    console.log("Starting to fetch data");
    dashboardService.getDashboardData()
      .then(res => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };


  // To make side effect happen - In this case, side effect is to fetch data
  // Hook - useEffect : https://zh-hans.reactjs.org/docs/hooks-reference.html#useeffect
  useEffect(fetchData, []);


  return (
    <div className = "main_wrap">
      <main className = "container row">
        <div className = "dashboard__box">

          <div className="tmpPageContainer">
            {currentPage === 'MainPage' && <MainPage data={data} />}
            {currentPage === 'Livelihood' && <Livelihood data={data}/>}
            {currentPage === 'FoodSecurity' && <FoodSecurity data={data}/>}
            {currentPage === 'Crops' && <Crops data={data}/>}
            {currentPage === 'Livestock' && <Livestock data={data}/>}
            {currentPage === 'OffFarmIncome' && <OffFarmIncome data={data}/>}
          </div>

          <div className="topics">
            <div className="topicsList">
              <button
                className="topicButton"
                onClick={()=>setCurrentPage('MainPage')}
              >
                Main Page
              </button>
              <button
                className="topicButton"
                onClick={()=>setCurrentPage('Livelihood')}
              >
                Livelihood
              </button>
              <button
                className="topicButton"
                onClick={()=>setCurrentPage('FoodSecurity')}
              >
                Food Security
              </button>
              <button
                className="topicButton"
                onClick={()=>setCurrentPage('Crops')}
              >
                Crops
              </button>
              <button
                className="topicButton"
                onClick={()=>setCurrentPage('Livestock')}
              >
                Livestock
              </button>
              <button
                className="topicButton"
                onClick={()=>setCurrentPage('OffFarmIncome')}
              >
                Off Farm Income
              </button>
            </div>
          </div>

          <div>
            {data === null ?
              (<p>Fetching data ...</p>) :
              (<p>{data.length} records of data fetched</p>)
            }
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;
