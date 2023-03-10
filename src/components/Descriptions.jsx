import React from 'react'
import './Descriptions.css'

import { FaArrowDown, FaArrowUp, FaWind } from 'react-icons/fa';
import { BiHappy } from 'react-icons/bi';
import { MdCompress, MdOutlineWaterDrop } from 'react-icons/md'
import { getFormattedWeatherData } from '../weatherService';

const Descriptions = ({weather, units}) => {

    const tempUnit = units === 'metric' ? '°c' : '°F'
    const windUnit = units === 'metric' ? 'm/s' : 'm/h'

    const cards = [
        {
            id: 1,
            icon: <FaArrowDown />,
            title: "min",
            data: weather.temp_min.toFixed(),
            unit: tempUnit,
        },
        {
            id: 2,
            icon: <FaArrowUp />,
            title: "max",
            data: weather.temp_max.toFixed(),
            unit: tempUnit,
        },
        {
            id: 3,
            icon: <BiHappy />,
            title: "sensação",
            data: weather.temp_min.toFixed(),
            unit: tempUnit,
        },
        {
            id: 4,
            icon: <MdCompress />,
            title: "pressão",
            data: weather.pressure,
            unit: 'hPa',
        },
        {
            id: 5,
            icon: <MdOutlineWaterDrop />,
            title: "humidade",
            data: weather.humidity,
            unit: '%',
        },
        {
            id: 6,
            icon: <FaWind />,
            title: "velocidade do vento",
            data: weather.speed.toFixed(),
            unit: windUnit,
        },
    ]
  return (
  <div className="section section__descriptions">
    {cards.map(({id, icon, title, data, unit}) => (
            <div key={id} className="card">
            <div className="description__card-icon">
                {icon}
                <small>{title}</small>
            </div>
            <h2>{`${data}${unit}`}</h2>
        </div>
    ))}

  </div>
    );
};

export default Descriptions;