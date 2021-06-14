import React from 'react';
import axios from "axios";
import Star from "../Star";
import ContainerComponent from "../ContainerComponent";

let repoUrl = 'https://api.github.com/repos/angular/angular';

export default function InfoAngular() {
  const [data, setData] = React.useState({stars: '', forks: ''});

  React.useEffect(() => {
    axios.get(repoUrl).then(res => {
      setData({stars: res.data.stargazers_count, forks: res.data.forks})
    })
  }, []);

  return (
    <div className=''>
      <h2>Angular</h2>
      <div className='container shadow pt-3 ps-1 pb-3' style={{maxWidth: '900px', marginLeft: '0'}}>
        <ul style={{margin: '0', padding: '0'}}>
          <li className='bt-1 d-flex flex-column'>
            <strong>Официальная документация:</strong>
            <a href={'https://angular.io/'}>https://angular.io/</a>
          </li>
          <li className='bt-1 d-flex flex-column' >
            <strong>Статистика на Github:</strong>
            <p className='d-flex align-items-center'>
              <button className={'btn btn-primary d-flex'} disabled><Star/>{data.stars}</button>
              <button className={'btn btn-primary d-flex ms-1'} disabled>{data.forks} форков</button>
            </p>
          </li>
          <li className='bt-1 d-flex flex-column'>
            <strong>Github репозиторий:</strong>
            <a href={'https://github.com/angular/angular'}>https://github.com/angular/angular</a>
          </li>
          <li className='bt-1 d-flex flex-column'>
            <strong>Порог вхождения:</strong>
            <button disabled className='btn btn-danger' style={{width: '200px'}}>Высокий</button>
          </li>
          <li className='mt-1 d-flex'>
            <i>Подходит для:</i>
            <u className='ms-1'>E-commerce проектов, для крупных проектов</u>
          </li>
          <code>------------------------------------------------------------------</code>
          <li className='bt-1 d-flex flex-column'>
            <p>
              <i>Подключение по CDN невозможно</i>
            </p>
          </li>
        </ul>
      </div>
      <ContainerComponent title={'Описание'}>
        <p>Angular – это MVC фреймворк для создания клиентских приложений.
          AngularJS был создан компанией Google в 2010 году, но в 2014 году был полностью переработан
          и был переименован в Angular. Ключевым отличием оригинального AngularJS от Angular версии 2+ является то,
          что AnguratJS основана на языке JavaScript, а Angular основан на языке TypeScript и использует его в качестве
          основного языка программирования [16], что отличает его от остальных фреймворков, где вопрос об использовании
          TypeScript в проекте остается за разработчиком. Использование TypeScript позволяет внедрить статическую типизацию и
          придерживаться ООП подхода во всех проектах, разрабатываемых на Angular. Фреймворк диктует структуру проекта,
          что позволяет разрабатывать масштабируемые архитектуры проектов.</p>
        <p>
        Фреймворк состоит из нескольких библиотек, некоторые из которых являются базовыми,
          а некоторые необязательными. Приложения Angular разрабатываются путем написания HTML-шаблонов с
          использованием тегов «angularized», написания классов компонентов для управления
          этими шаблонами, добавления логики приложения к службам и регистрации компонентов и служб в модулях.
          Приложение запускается при загрузке корневого модуля.
          Angular берет на себя представление содержимого приложения в браузере и реагирует на
          взаимодействие пользователя в соответствии с введенными инструкциями. На данный момент самой актуальной версией
          Angular является версия 11.2.11.</p>

      </ContainerComponent>
      <ContainerComponent title={'Начало работы'}>
        <p>
          1. Для начала работы необходимо установить <a href={'https://nodejs.org/ru/'}><code>Node.js</code> и пакетный менеджер <code>NPM</code></a>.
          Для инициализации проекта рекомендуется использовать инструмент <a href={'https://angular.io/cli'}>angular-cli</a>
          <br/><code className='shadow-sm p-1'>npm install -g @angular/cli</code>
        </p>
        <p>
          2. Для создания проекта
          <br/><code className='shadow-sm p-1'>ng new {'<Название_проекта>'}</code>
          <br/><code className='shadow-sm p-1'>cd {'<Название_проекта>'}</code>
          <br/><code className='shadow-sm p-1'>ng serve</code>

        </p>
        <code>---------------------</code>
        <p>
          <br/>Для создания PWA
          <br/><code className='shadow-sm p-1'>ng add @angular/pwa --project *project-name*</code>
        </p>
      </ContainerComponent>
      <ContainerComponent title={'Рекомендуемые библиотеки и пакеты'}>
        <p>UI библиотеки: <a href={'https://github.com/angular/material2'}>Material2</a>, <a href={'https://github.com/valor-software/ngx-bootstrap'}>ngx-bootstrap</a>, <a href={'https://www.primefaces.org/primeng/#/'}>Prime NG</a></p>
      </ContainerComponent>

      <ContainerComponent title={'Server Side Rendering'}>
        <a href={'https://angular.io/guide/universal'}>Angular Universal</a>
      </ContainerComponent>
    </div>
  )
}