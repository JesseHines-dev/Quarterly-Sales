import React from 'react';
import './table.css';
import Data from './data.json'

function Tmain() {
  return (
            <div className="map-table-data">
              { Data.map((dataDetail, index)=> {
                return <table>
                          <tbody>
                            <table className="inner-table">
                              <tr>
                              <th scope="row"></th>
                              <td>55</td>
                              <td>55</td>
                              <td>55</td>
                              <td>55</td>
                              <td>55</td>
                              <td>55</td>
                              <td>55</td>
                              <td>55</td>
                              <td>55</td>
                              <td>55</td>
                              </tr>
                            </table>
                          </tbody>
                       </table>
                
              }) }
            </div>
    

  );
}

export default Tmain;