import React from 'react';
import './table-grid.css';

const TGrid = (props) => {
    return (
            <table className= 'grid-table'>
                <tbody>
                    <tr>
                        <td rowspan='2' className= 'td-brand'>Brand</td>
                        <td colspan='3' className= 'td-bb'>Best Buy</td>
                        <td colspan='3' className= 'td-hd'>Home Depot </td>
                        <td colspan='3' className= 'td-lowes'>Lowes</td>
                        <td rowspan='2' className= 'td-gt'>Grand Total</td>
                    </tr>
                    <tr className='tr-months'>
                        <td>Jan</td>
                        <td>Feb</td>
                        <td>Mar</td>
                        <td>Jan</td>
                        <td>Feb</td>
                        <td>Mar</td>
                        <td>Jan</td>
                        <td>Feb</td>
                        <td>Mar</td>
                    </tr>
                    
                </tbody>
            </table>
    );
}

export default TGrid;