import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import React from 'react';
import './App.css'
import LocationIcon from './location.png';
import TeamIcon from './img/team.png';
import { AgChartsReact } from 'ag-charts-react';

function App() {
  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = React.useState([
    { field: "id" },
    { field: "name" },
    { field: "region" },
    { field: "user_id" }
  ]);

  // fetch('http://10.17.70.221:8080/api/tasks').then((res) => res.json());
  const APIResponse = [{ id: '1', name: 'Kirti', region: 'EMEA', creationDate: '2024-04-08', status: 'NOT_STARTED', completionDate: '2024-04-10', user_id: '1', updatedDate: '2024-04-09' },
  { id: '1', name: 'Jithin', region: 'EMEA', creationDate: '2024-04-08', status: 'NOT_STARTED', completionDate: '2024-04-10', user_id: '2', updatedDate: '2024-04-09' },
  { id: '1', name: 'Amit', region: 'EMEA', creationDate: '2024-04-08', status: 'IN_PROGRESS', completionDate: '2024-04-10', user_id: '3', updatedDate: '2024-04-09' },
  { id: '1', name: 'Akshay', region: 'EMEA', creationDate: '2024-04-08', status: 'NOT_STARTED', completionDate: '2024-04-10', user_id: '4', updatedDate: '2024-04-09' },
  { id: '1', name: 'Ingrid', region: 'EMEA', creationDate: '2024-04-08', status: 'IN_PROGRESS', completionDate: '2024-04-10', user_id: '5', updatedDate: '2024-04-09' },
  { id: '1', name: 'Sean', region: 'APAC', creationDate: '2024-04-08', status: 'NOT_STARTED', completionDate: '2024-04-10', user_id: '6', updatedDate: '2024-04-09' },
  { id: '1', name: 'Danny', region: 'APAC', creationDate: '2024-04-08', status: 'IN_PROGRESS', completionDate: '2024-04-10', user_id: '7', updatedDate: '2024-04-09' }]
  const [chartOptions, setChartOptions] = React.useState({
    // Data: Data to be displayed in the chart
    data: [{ name: "Kirti", casesResolved: 5000 },
    { name: "Amit", casesResolved: 4000 },
    { name: "Jithin", casesResolved: 7000 },
    { name: "Akshay", casesResolved: 5000 },
    { name: "Sean", casesResolved: 3000 }],
    title: {
      text: "Task Resolution Details",
    },
    series: [
      {
        type: "donut",
        calloutLabelKey: "name",
        angleKey: "casesResolved",
        innerRadiusRatio: 0.5,
        innerLabels: [
          {
            text: "Total Tasks Resolved",
            fontWeight: "bold",
          },
          {
            text: "69708",
            margin: 4,
            fontSize: 14,
            color: "green",
          },
        ], innerCircle: {
          fill: "#c9fdc9",
        },
      },
    ],
  });
  const [rowData, setRowData] = React.useState(APIResponse);
  return (
    <div className="App">
      <div style={{ 'text-align': 'center', 'font-size': '35px', 'font-family': '"Poppins", sans-serif', color: '#3586ff', 'font-weight': '500' }}>Task Router</div>
      <div style={{ 'text-align': 'center', 'font-size': '20px', 'font-family': '"Poppins", sans-serif', 'font-weight': '400' }}>Manage your entire team in one app</div>
      <div style={{ padding: '10px' }}>
        <div
          className="ag-theme-quartz" // applying the grid theme
          style={{ width: '50%', padding: '10px', 'box-sizing': 'border-box', 'text-align': 'justify', display: 'inline-block', height: 500 }} // the grid will fill the size of the parent container
        >
          <div><img width="20" height="15" src={TeamIcon} /> Settlements Mumbai FX</div>
          <div><img width="20" height="20" src={LocationIcon} /> APAC</div>
          <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
          />
          <AgChartsReact options={chartOptions} />
        </div>
        <div
          className="ag-theme-quartz" // applying the grid theme
          style={{ width: '50%', padding: '10px', 'box-sizing': 'border-box', 'text-align': 'justify', display: 'inline-block', height: 500 }} // the grid will fill the size of the parent container
        >
          <div><img width="20" height="15" src={TeamIcon} /> Settlements Bmth FX</div>
          <div><img width="20" height="20" src={LocationIcon} /> EMEA</div>
          <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
          />
          <AgChartsReact options={chartOptions} />
        </div>
      </div>
      <div style={{ 'align-items': 'center', 'display': 'ruby-text', 'padding': '20px', 'margin': '20px', 'padding-bottom': '100px' }}>
        <button style={{ 'background-color': '#808080', 'color': '#fff', 'border': 'none', 'padding': '10px' }}>Allocate Task via DMN </button>
        <button style={{ 'background-color': '#3586ff', 'color': '#fff', 'border': 'none', 'padding': '10px', 'margin-left': '20px' }}>Allocate Efficiently via Task Analyser</button>
      </div>
      {/* <div style={{ position: 'absolute', width: '50%', height: '50%' }}>
        
      </div> */}
      <footer class="footer">
        <div class="waves">
          <div class="wave" id="wave1"></div>
          <div class="wave" id="wave2"></div>
          <div class="wave" id="wave3"></div>
          <div class="wave" id="wave4"></div>
        </div>
      </footer>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  );
}

export default App;
