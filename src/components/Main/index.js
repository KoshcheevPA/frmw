import React from 'react';
import {Link} from "react-router-dom";

export default function Main() {
  return (
    <>
      <h2>Выбор фронтэнд-фреймворка</h2>
      <div className='d-flex flex-column'>
        <Link className={'btn btn-primary w-50 mb-3'} to={'/quiz'}>Выбрать фреймворк через опрос</Link>
        <Link className={'btn btn-primary w-50 mb-3'} to={'/project_type'}>Выбрать фреймворк по типу приложения</Link>
        <h3>Информация по фреймворкам</h3>
        <Link className={'btn btn-primary w-50 mb-3'} to={'/react'}>React</Link>
        <Link className={'btn btn-primary w-50 mb-3'} to={'/react'}>Angular</Link>
        <Link className={'btn btn-primary w-50 mb-3'} to={'/react'}>Vue</Link>
        <h3>Дополнительные теоретические материалы</h3>
        <Link className={'btn btn-primary w-50 mb-3'} to={'/additional'}>Ознакомиться с дополнительной теоритической информацией</Link>
      </div>
    </>
  )
}