import React, { useState, useContext } from 'react';
import { AuthContext } from '../Auth/AuthContext'; 
import axios from 'axios';

import './API.css';

const API = () => {
  const { username, password } = useContext(AuthContext);
  const [oibTvrtke, setOibTvrtke] = useState('');
  const [oibRadnika, setOibRadnika] = useState('');
  const [aktivan, setAktivan] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [endpoint, setEndpoint] = useState('http://5.189.169.61:81/api/MaRadniciApi/UpdateRadnik/');
  const [isFormVisible, setIsFormVisible] = useState(false);

  const fetchData = async () => {
    const url = endpoint;
    const authHeader = 'Basic ' + btoa(`${username}:${password}`);
    const requestBody = {
      "OibTvrtke": oibTvrtke,
      "OibRadnika": oibRadnika,
      "Aktivan": aktivan
    };

    setLoading(true);
    setError(null);

    try {
      const response = await axios.put(url, requestBody, {
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/json'
        }
      });
      setData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const formatJson = (json) => {
    const jsonString = JSON.stringify(json, null, 2);
    return jsonString.replace(/(:\s)(true|false|null|\d+|"(.*?)")/g, '$1<span class="json-value">$2</span>');
  };

  return (
    <div className="api-container">

      <div className="get-sign">
        <span className="get-sign-update">UPDATE</span>
        <span   className="get-sign-api">/UpdateRadnik</span>
      </div>

      <button onClick={toggleFormVisibility} className="toggle-button">
      {isFormVisible ? '⯅' : '⯆'}
      </button>

     

      {isFormVisible && (
        <div className="form-container">
        
         
          <div className="form-group oib-tvrtke">
            <label>OIB tvrtke</label>
            <input type="text" value={oibTvrtke} onChange={(e) => setOibTvrtke(e.target.value)} />
          </div>
          <div className="form-group">
            <label>OIB radnika</label>
            <input type="text" value={oibRadnika} onChange={(e) => setOibRadnika(e.target.value)} />
          </div>
          <div className="form-group">
          <label>Aktivnost radnika</label>
          <select value={aktivan} onChange={(e) => setAktivan(e.target.value === 'true')}>
            <option value={true}>Aktivan</option>
            <option value={false}>Neaktivan</option>
          </select>
          </div>
          <button onClick={fetchData} className="fetch-button">Dohvati</button>
          {loading && <div>Dohvaćanje...</div>}
          {error && <div className="error">Error: {error}</div>}
          {data && (
        <div className="result">
          <pre className='JSONText' dangerouslySetInnerHTML={{ __html: formatJson(data) }}></pre>
        </div>
      )}
        </div>
      )}
    </div>
  );
};

export default API;
