import React from 'react';
import {NavLink} from "react-router-dom";

export default function ProjectType() {
  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link" to="/project_type/simple">Простое приложение</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/project_type/dynamic">Динамическое приложение</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/project_type/pwa">PWA</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/project_type/commerce">Онлайн магазин/E-commerce</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/project_type/portal">Веб-портал</NavLink>
        </li>
      </ul>
    </>
  )
}