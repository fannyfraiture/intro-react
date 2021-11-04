import React from 'react';

const Card = (props) => {
    const { country } = props;

    /*séparateur de millier*/
    const numberFormat = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    
    return (
        <li className="card">
            <img src={country.flags.png} alt="flag" />
            <div className="data-container">
                <ul>
                    <li>{country.name.official}</li>
                    <li>{country.capital}</li>
                    <li>{country.region}</li>
                    <li>{numberFormat(country.population)}</li>
                    
                </ul>
            </div>
        </li>
    );
};

export default Card;