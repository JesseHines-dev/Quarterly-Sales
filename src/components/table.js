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
                              <th scope="row">{dataDetail.brand}</th>
                              <td>{dataDetail.best_buy_202101}</td>
                              <td>{dataDetail.best_buy_202102}</td>
                              <td>{dataDetail.best_buy_202103}</td>
                              <td>{dataDetail.home_depot_202101}</td>
                              <td>{dataDetail.home_depot_202102}</td>
                              <td>{dataDetail.home_depot_202103}</td>
                              <td>{dataDetail.lowes_202101}</td>
                              <td>{dataDetail.lowes_202102}</td>
                              <td>{dataDetail.lowes_202103}</td>
                              <td>{dataDetail.total}</td>
                              </tr>
                            </table>
                          </tbody>
                       </table>
                
              }) }
            </div>
    

  );
}

export default Tmain;