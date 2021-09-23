import React from 'react';
import log from '../../images/logo.png';
import './Hader.css'

const Hader = () => {
    return (
        <div className="header">
           <img className="logo" src={log} alt="" srcset="" />
           <nav>
               <a href="/shop">Shop</a>
               <a href="/order">Order</a>
               <a href="/manageinventory">Manage Inventory</a>
           </nav>
        </div>
    );
};

export default Hader;