import React from 'react';
import './table-head.css';

const TButtons = (props) => {
    return (
        <div className='table-header'>
        <ul class="nav nav-pills">
        <span className='th-txt'>Store Summary</span>
        <li class="nav-item">
        <button type="button" class="btn btn-primary btn-sm" className='btn-w'>COUNT</button>
        </li>
        <li class="nav-item">
        <button type="button" class="btn btn-secondary btn-sm" className='btn-b'>PERCENT</button>
        </li>
        </ul>
        </div>
    );
}

export default TButtons;
