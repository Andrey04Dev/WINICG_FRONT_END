import React from "react";
import "./assets/Fontawesome/FontAwesome";
import "./components/sass/index.scss";
import FormCertificationAdd from "./components/Forms/Certification/FormCertificationAdd";
import FormCompanyPositionAdd from "./components/Forms/CompanyPosition/FormCompanyPositionAdd";
import FormFlagAdd from "./components/Forms/Flags/FormFlagAdd";
import FormAuditAdd from "./components/Forms/Audit/FormAuditAdd";
import FormRolesAdd from "./components/Forms/Roles/FormRolesAdd";
import GetUser from "./components/Forms/User/GetUser";
import GetRoles from "./components/Forms/Roles/GetRoles";
import Navbar from "./components/common/Navbar";
import RoutesWINICG from "./components/Routes/RoutesWINICG";
const App = () => {
  return (
    <div>
      <RoutesWINICG/>
    </div>
  );
};

export default App;

// export default class App extends Component {
//     static displayName = App.name;

//     constructor(props) {
//         super(props);
//         this.state = { forecasts: [], loading: true };
//     }

//     componentDidMount() {
//         this.populateWeatherData();
//     }

//     static renderForecastsTable(forecasts) {
//         return (
//             <table className='table table-striped' aria-labelledby="tabelLabel">
//                 <thead>
//                     <tr>
//                         <th>Date</th>
//                         <th>Temp. (C)</th>
//                         <th>Temp. (F)</th>
//                         <th>Summary</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {forecasts.map(forecast =>
//                         <tr key={forecast.date}>
//                             <td>{forecast.date}</td>
//                             <td>{forecast.temperatureC}</td>
//                             <td>{forecast.temperatureF}</td>
//                             <td>{forecast.summary}</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         );
//     }

//     render() {
//         // let contents = this.state.loading
//         //     ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
//         //     : App.renderForecastsTable(this.state.forecasts);

//         return (
//            <FormRole/>
//         );
//     }

//     async populateWeatherData() {
//         const response = await fetch('weatherforecast');
//         const data = await response.json();
//         this.setState({ forecasts: data, loading: false });
//     }
// }
