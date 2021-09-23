import React, { useEffect } from "react";

import "./st.css";

const St = () => {

    
    const [data, setData] = React.useState([]);

    const getCovidData = async () => {

        const res = await fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort');
    
        const fres = await res.json();
        
         setData(fres);
    }

    useEffect(() => {

        getCovidData();
        

    }, []);



    return (
        <>

            <h1 className="text-center">World Covid Tracker</h1>
            <div className="container-fluid mt-4">
                <div className="main-headind">
                    <div className="mb-5 text-center"><h3>Covid19 Cases Daseboard</h3>
                    </div>

                </div>

                <div className="table-responsive">

                    <table className="table table-hover">

                        <thead className="thead-dark">

                            <tr>

                                <th>Country</th>
                                <th>Active</th>
                                <th>Total Cases</th>
                                <th>Total Deaths</th>
                                <th>Today Cases</th>
                                <th>Today Deaths</th>
                            

                            </tr>


                        </thead>
                        <tbody>
                            {
                                data.map((curr, idx) => {

                                    return (

                                        <tr key={idx}>

                                            <td>{curr.country}</td>
                                            <td>{curr.active}</td>
                                            <td>{curr.cases}</td>
                                            <td>{curr.deaths}</td>
                                            <td>{curr.todayCases}</td>
                                            <td>{curr.todayDeaths}</td>
                                            

                                        </tr>

                                    )
                                })


                            } 

                        </tbody>

                    </table>

                </div>
               
            </div>
            <p className="text-center">amit iit bhu</p>

        </>

    )

}
export default St;