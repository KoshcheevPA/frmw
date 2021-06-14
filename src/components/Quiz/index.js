import React from 'react';
import QuizItem from "./QuizItem";
import QuizResult from "./QuizResult";
import {Link} from "react-router-dom";

let data = [
  {
    q: 'Больше важна скорость работы приложения, или комплексное решение для разработки?',
    answers: [
      {text:'Скорость приложения', action: {react: 1, vue: 1.1}, form: "speed"},
      {text:'Комплексное решение', action: {angular: 1}, form: "speed"}]
  },
  {
    q: "Нужен ли Server Side Rendering? Планируется ли оптимизировать приложения для поисковиков (SEO)?",
    answers: [
      {text:'Да', action: {vue: 1.2, react: 1, angular: 1}, form: 'ssr'},
      {text:'Нет', action: {vue: 1, react: 1.2, angular: 1.2}, form: 'ssr'}
    ]
  },
  {
    q: "Важен ли вам уровень популярности фреймворка и размер его сообщества?",
    answers: [
      {text: 'Да', action: {react: 1.2}, form: "popular"},
      {text: 'Нет', action: {vue: 1, angular: 1}, form: "popular"}]
  },
  {
    q: 'Вы хотите ли вы решение "всё из коробки" или использовать богатый набор разных пакетов и библиотек?',
    answers: [
      {text:'Все из коробки', action: {angular: 1.3}, form: 'box'},
      {text:'Богатый набор пакетов и библиотек', action: {react: 1.3, vue: 1}, form: 'box'}
    ]
  },
  {
    q: 'Предварительный размер проекта?',
    answers: [
      {text:'Большой проект', action: {angular: 1.4, react: 1}, form: "size"},
      {text:'Проект среднего размера', action: {angular: 0.8, react: 1.4, vue: 1}, form: "size"},
      {text:'Маленький проект', action: {vue: 1.4, react: 1.2} ,form: "size"}]
  },
  {
    q: 'Ваш/командный уровень разработчиков',
    answers: [
      {text: 'Junior', action: {vue: 1.1, react: 1}, form: "level"},
      {text: 'Middle', action: {react: 1.2, vue: 1, angular: 1.1}, form: "level"},
      {text:'Senior', action: {angular: 1.2, vue: 1, react: 1}, form: "level"}]
  },
  {
    q: 'Необходимо начать разработку в максимально возможные короткие сроки?',
    answers: [
      {text: 'Да', action: {vue: 1.2, react: 1}, form: "start"},
      {text: 'Не имеет значения', action: {}, form: "start"}]
  },
  {
    q: 'Вы предпочитаете жестко заданную структуру проекта со строгой типизацией или большую гибкость и собственную организацию архитектуры?',
    answers: [
      {text: 'Жестко заданную архитектуру', action: {angular: 1.2}, form: "arch"},
      {text: 'Гибкость', action: {react: 1.2, vue: 1}, form: "arch"}]
  },
  {
    q: 'Важно ли наличие CLI инструментов для создания программных частей проекта?',
    answers: [
      {text: 'Да', action: {angular: 1, vue: 1}, form: "cli"},
      {text: 'Нет', action: {}, form: "cli"}]
  },
  {
    q: 'Разработка приложения ведется в монорепозитории?',
    answers: [
      {text: 'Да', action: {react: 1.5, vue: 1}, form: "mono"},
      {text: 'Нет', action: {}, form: "mono"}]
  },
];

export default function Quiz() {
  const [result, setResult] = React.useState({});
  const [over, setOver] = React.useState(false);
  const [r, setR] = React.useState({react: 0, angular: 0, vue: 0});

  const onItemCallback = (obj) => {
    setResult({...result, [obj.form]: obj.action})
  };

  const onSubmit = () => {
    if(r.react === 0 && r.vue === 0) {
      return;
    }
    let res = {
      angular: 0,
      vue: 0,
      react: 0,
    }
    Object.entries(result).forEach(el => {
      Object.entries(el[1]).forEach(item => {
        res[item[0]] = res[item[0]] + item[1]
      })
    });
    let res1 = Object.entries(res).sort((a,b) => Number(a[1]) < Number(b[1]));
    setR(res1);
    setOver(true);
  };

  return (
    <>
      <div className='container align-items-start text-left mb-5 w-75 mt-3' style={{marginLeft: '0'}}>
        <h4 className={'text-left'} style={{marginLeft: '0', textAlign: 'left'}}>Опрос</h4>
        {data.map((el, index) => <QuizItem {...el} n={index + 1} nTotal={data.length} onItemCallback={onItemCallback}/>)}
        <button className={'btn btn-primary mt-5 d-flex mr-auto'} type={'button'} onClick={onSubmit} style={{marginLeft: '0'}}>Отправить</button>
      </div>
      <div className={'container d-flex flex-wrap'} style={{marginLeft: '0'}}>
        {over && r.map((el,index) => (
          <QuizResult title={el[0]} description={index === 0 && 'подходит больше всего'} n={index+1}/>
        ))
        }
      </div>
    </>
  )
}