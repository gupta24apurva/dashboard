import React from 'react'
import { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { HistoricalChart } from '../api';
import axios from 'axios';
import { Line } from 'react-chartjs-2'
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

const Dashboard = () => {
  const [historicData, setHistoricData] = useState([]);
  const [user,setUser]=useState();

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart());
    setHistoricData(data.prices);
  }

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const encodedUserData = queryParams.get('user');
    
    if (encodedUserData) {
      const data = JSON.parse(decodeURIComponent(encodedUserData));
      setUser(data);
      fetchHistoricData()
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(historicData);
  return (
    <div className="flex flex-row w-4/5 p-5 space-x-8">
      <Sidebar/>
      <div className="flex-grow">
        <Header user={user}/>
        <div>
          {historicData.length > 0 && (
            <Line
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  return date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: "Price in INR",
                    borderColor: "#EEBC1D"
                  }
                ]
              }}
              options={{ elements: { point: { radius: 1 } } }}
              key={historicData.length}
            />
          )
          }
        </div>
        <div className='flex flex-row'>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
