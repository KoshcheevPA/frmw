import React from 'react';
import axios from "axios";
import Star from "../Star";
import ContainerComponent from "../ContainerComponent";

let repoUrl = 'https://api.github.com/repos/facebook/react';

export default function InfoReact() {
  const [data, setData] = React.useState({stars: '', forks: ''});

  React.useEffect(() => {
    axios.get(repoUrl).then(res => {
      setData({stars: res.data.stargazers_count, forks: res.data.forks})
    })
  }, []);

  return (
    <div className=''>
      <h2>React</h2>
      <div className='container shadow pt-3 ps-2'  style={{maxWidth: '900px', marginLeft: '0'}}>
        <ul style={{margin: '0', padding: '0'}}>
          <li className='bt-1 d-flex'>
            <i>Официальная документация:</i>{' '}<a className={'ms-1'} href={'https://reactjs.org'}>https://reactjs.org</a>
          </li>
          <li className='mt-0 d-flex'>
            <i>Github репозиторий:</i>
            <a className={'ms-1'} href={'https://github.com/facebook/react'}>https://github.com/facebook/react</a>
          </li>
          <li className='mt-1 d-flex flex-column' >
            <i>Статистика на Github:</i>
            <p className='d-flex align-items-center'>
              <button className={'btn btn-primary d-flex'} disabled><Star/>{data.stars}</button>
              <button className={'btn btn-primary d-flex ms-1'} disabled>{data.forks} форков</button>
            </p>
          </li>
          <li className='mt-0 d-flex flex-column'>
            <i>Порог вхождения:</i>
            <button disabled className='btn btn-primary' style={{width: '200px'}}>Средний</button>
          </li>
          <li className='mt-1 d-flex'>
            <i>Подходит для:</i>
            <u className='ms-1'>Динамических веб-приложений, PWA, веб-порталов, монорепозиториев</u>
          </li>
          <code>------------------------------------------------------------------</code>
          <li className='bt-1 d-flex flex-column'>
            <p>
              <i>Возможно подключение по CDN</i>
              <br/><code className='shadow-sm p-1'>{'<script crossOrigin src="https://unpkg.com/react@17/umd/react.development.js"></script>'}</code>
              <br/><code className='shadow-sm p-1'>{'<script crossOrigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>'}</code>
            </p>
          </li>
        </ul>
      </div>
      <ContainerComponent title={'Описание'}>
        <p>React был разработан компанией Facebook в 2013 году и, в отличии от Angular и Vue,
          позиционирует себя как «JavaScript-библиотека для создания пользовательских интерфейсов».</p>
        <p>Архитектура React приложений строится на использовании компонентов,
          что позволяет оптимизировать процесс разработки и писать меньше кода.</p>
        <p>
        Одной из отличительных особенностей данной технологии является синтаксис JSX – это расширение JavaScript для React,
          которое позволяет описывать HTML код в JavaScript.</p>
        <p>Одно из главных преимуществ React – это скорость работы.
          React использует Virtual DOM концепцию, в которой идеальное представление пользовательского интерфейса хранится
          в памяти и синхронизируется с настоящим DOM-деревом.
          Это значительно оптимизирует процесс рендеринга изменений на веб-странице и повышает общую производительность.</p>
        <p>React не задаёт жесткую структуру проекта, что даёт возможность разработчикам
          самостоятельно организовывать архитектуру пользовательского интерфейса.
          Однако это создаёт проблемы поддержки проектов, так как разные подходы к
          разработке могут быть нетривиальны и, следовательно, непонятны для других разработчиков,
          что может привести к проблемам при расширении приложения.</p>
        <p>Технология значительно популярнее своих конкурентов, что говорит о
          большом комьюнити разработчиков и заинтересованности в технологии. На данный момент самой новой версией React является версия 17.0.1, которая была выпущена 20 октября 2020-го года.
        </p>
      </ContainerComponent>
      <ContainerComponent title={'Начало работы'}>
        <p>
          1. Для начала работы необходимо установить <a href={'https://nodejs.org/ru/'}><code>Node.js</code> и пакетный менеджер <code>NPM</code></a>.
          Для быстрой инициализации проекта рекомендуется использовать инструмент <a href={'https://github.com/facebook/create-react-app'}>create-react-app</a>
          <br/><code className='shadow-sm p-1'>npm install -g create-react-app</code>
        </p>
        <p>
          2. Для создания проекта
          <br/><code className='shadow-sm p-1'>npx create-react-app {'<Название_проекта>'}</code>
          <br/><code className='shadow-sm p-1'>cd {'<Название_проекта>'}</code>
          <br/><code className='shadow-sm p-1'>npm start</code>

        </p>
        <code>---------------------</code>
        <p>
          Для создания приложения с TypeScript
          <br/><code className='shadow-sm p-1'>npx create-react-app {'<Название_проекта>'} --template typescript</code>
        </p>
        <p>
          <br/>Для создания PWA
          <br/><code className='shadow-sm p-1'>npx create-react-app {'<Название_проекта>'} --template cra-template-pwa</code>
        </p>
        <p>
          <br/>Добавление библиотеки клиенсткого роутинга
          <br/><code className='shadow-sm p-1'>npm install --save react-router-dom</code>
        </p>
      </ContainerComponent>
      <ContainerComponent title={'Рекомендуемые библиотеки и пакеты'}>
        <p>Для реализации flux-архитектуры: <a href={'https://redux.js.org/'}>Redux</a>, <a href={'https://mobx.js.org/README.html'}>Mobx</a>, <a href={'https://reactjs.org/docs/context.html '}>React.context</a> + <a href={'https://ru.reactjs.org/docs/hooks-intro.html'}>React hooks</a></p>
        <p>Для работы с формами: <a href={'https://formik.org/'}>Formik</a>, <a href={'https://final-form.org/react'}>Final Form</a>, <a href={'https://react-hook-form.com/'}>React Hook Form</a></p>
        <p>UI библиотеки: <a href={'https://material-ui.com/ru/'}>Material UI</a>, <a href={'https://ant.design/components/menu/'}>ANTD</a>, <a href={'https://react-bootstrap.github.io/'}>React Bootstrap</a></p>
      </ContainerComponent>
      <ContainerComponent title={'Server Side Rendering'}>
        <p>
          Для создания веб-приложений на React с SSR есть
          специальный фреймворк Next.js. Next.js – это популярный легковесный фреймворк для статических и серверных приложений,
          использующих React. Он включает в себя готовые решения для стилизации и маршрутизации и предполагает,
          что Node.js используется в качестве серверной среды.
        </p>
        <a href={'https://nextjs.org/'}>https://nextjs.org/</a>
      </ContainerComponent>
      <ContainerComponent title={'JSX'}>
        <p>
          JSX – это XML-подобный синтаксис,
          используемый для создания кода разметки пользовательского интерфейса в JavaScript.
          Данный синтаксис весьма просто освоить, так как он очень похож на синтаксис HTML и упрощает процесс
          совмещения верстки и логики.
        </p>
        <a href={'https://reactjs.org/docs/introducing-jsx.html'}>https://reactjs.org/docs/introducing-jsx.html</a>
      </ContainerComponent>
    </div>
  )
}