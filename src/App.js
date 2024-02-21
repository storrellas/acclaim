import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import routes from './common/routes'

import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'


window.matchMedia = false  // Removes read for 'prefers-reduced-motion'

let lng = localStorage.getItem('language')
if( lng == null )
  lng = navigator.language || navigator.userLanguage
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          // user: 'User',
          // company: 'Company',
          // company_site: 'Company Site',
          // influxdb: 'InfluxDB',
          // influxdb_server: 'InfluxDB Server',
          // influxdb_credential: 'InfluxDB Credential',
          // data_hub: 'Data Hub',
          // sensor: 'Sensor',
          // token: 'Token',

          // user_profile_title: 'User Profile',
          // first_name: 'First Name',
          // last_name: 'Last Name',
          // username: 'Username',
          // email: 'Email',
          // name: 'Name',
          // calc_company_sites: 'Company Sites',
          // server: 'Server',
          // address: 'Address',
          // add_new: 'Add New',
          // global_polling_rate_ms: 'Global Polling Rate',
          // influxdb_for_health_info: 'InfluxDB For Health Info',
          // influxdb_for_health_info_bucket: 'InfluxDB For Health Info Bucket',
          // influxdb_for_health_info_org: 'InfluxDB For Health Info Org',
          // influxdb_for_data: 'InfluxDB For Data',
          // influxdb_for_data_bucket: 'InfluxDB For Data Bucket',
          // influxdb_for_data_org: 'InfluxDB For Data Org',  
          // calc_influx_db_credentials: 'Influx DB Credentials', 
          // mac_address: 'MAC Address',
          // sensor_type: 'Sensor Type',
          // config: 'Configuration',
          // calc_data_hubs: 'Data Hubs',        
          // is_online: 'Is Online?',
          // actions: 'Actions',
          // password: 'Password',
          // calc_sensors: 'Error / Total Sensors',
          // calc_data_hub_notes: 'TODO / ALL Notes',
          // description: 'Description',
          // url: 'URL',

          // retype_password: 'Retype password',
          // forgot_password: 'Forgot password',
          // remember_me: 'Remember me',

          // save: 'Save',
          // cancel: 'Cancel',
          // edit: 'Edit',
          // add: 'Add',
          // delete: 'Delete',
          // ok: 'Ok',
          // are_you_sure: 'Are you sure?',
          // request_failed: 'Request has failed',
          // request_succeded: 'Request has succeded',
          // whoami_failed: 'Session expired',
          // warning: 'Warning',
          // error: 'Error',
          // dependent_company_sites: 'Row cannot be deleted. There are company sites depending',
          // dependent_data_hubs: 'Row cannot be deleted. There are data hubs depending',
          // dependent_credentials: 'Row cannot be deleted. There are credentials depending',
          // search: 'Search',
          // see_config: 'See Config',
          // calc_sensor_data_outputs: 'Sensor Data Output',
          // input_name: 'Input Name',
          // output_name: 'Output Name',
          // output_type: 'Output Type',
          // time_window_seconds: 'Time Window Seconds',
          // status: 'Status',
          // last_data_collection: 'Last Data Collection',
          // back: 'Back',
          // data_hub_control_panel: 'DataHub Control Panel',
          // data_hub_command: 'DataHub Command',
          // data_hub_note: 'DataHub Note',
          // command_type: 'Command Type',
          // timestamp_created: 'Created',
          // timestamp_executed: 'Executed',
          // timestamp_updated: 'Updated',
          // date: 'Date',
          // author: 'Author',
          // message: 'Message',
          // send: 'Send',
          // send_command: 'Send Command',
          // result_text: 'Result Text',
          // text: 'Text',
          // user_updated: 'Last User',
          // note_text: 'Text',
          // note_type: 'Type',
          // create_note: 'Create Note',
        }
      },
    },
    lng: lng, // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });


const App = () => {

  
  return (<Router>
            <Routes>

              <Route path={routes.login.url} element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} >
                {/* <Route path={routes.user.url} element={<User />} />
                <Route path={routes.company.url} element={<Company />} /> 
                <Route path={routes.company_site.url(":company")} element={<CompanySite />} />
                <Route path={routes.influxdb_server.url} element={<InfluxDBServer />} />
                <Route path={routes.influxdb_credential.url(":influxdb_server")} element={<InfluxDBCredential />} />
                <Route path={routes.data_hub.url} element={<DataHub />} />
                <Route path={routes.sensor.url(":data_hub")} element={<Sensor />} /> */}
              </Route>
            </Routes>
          </Router>)
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
