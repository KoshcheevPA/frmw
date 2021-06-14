import React from 'react';
import {Link} from "react-router-dom";

export default function QuizResult({percents, title, description, n, children}) {
  return (
    <div className={'container border border-light p-3 mb-3 rounded shadow ms-0 mr-1'} style={{maxWidth: '450px', position: 'relative'}}>
      {n}. {title}
      {" "}{description}
      {title === "react" && (
        <>
          <img width={260} style={{position: 'absolute', opacity: '0.3', right: '-50px', top: '-15px', zIndex:'0'}}  src={'data:image/png;base64,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'}/>
          <p>При желании иметь высокопроизводительный пользовательский интерфейс,
            к которому предоставляется широкий выбор разных пакетов и библиотек,
            можно использовать React.</p>
          <p>
            Одной из отличительных особенностей данной технологии является синтаксис JSX – это расширение JavaScript для React, которое позволяет описывать HTML код в JavaScript.
          </p>
          <p>Для получения подробной информации о фреймворке и о том, как начать разработку перейдите по ссылке <Link to={'/react'}>Страница React</Link>
          </p>
        </>
      )}

      {title === "vue" && (
        <>
          <img style={{position: 'absolute', opacity: '0.2', right: '15px', top: '15px', zIndex:'0'}} width={150} src={'data:image/png;base64,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'}/>
          <p>Vue походит для быстрых легковесных приложений</p>
          <p>Это хороший вариант для начала разработки в самые короткие сроки,
            с возможностью позже расширить проект, стоит обратить внимание на Vue.
            Данный вариант подойдет разработчикам, которые предпочитают четкое разделение HTML, CSS и JS.
            Такое разделение удобно для работы над компонентами в команде с дизайнерами</p>
          <p>Для получения подробной информации о фреймворке и о том, как начать разработку перейдите по ссылке <Link to={'/vue'}>Страница Vue</Link>
          </p>
        </>
      )}

      {title === "angular" && (
        <>
          <img  style={{position: 'absolute', opacity: '0.2', right: '15px', top: '15px', zIndex:'0'}} width={150} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'}/>
          <p>
            Если для разработки приложения основной потребностью является комплексное решение,
            где все сопутствующие инструменты будут предоставлены фреймворком с гарантией поддержки,
            то следует обратить внимание на Angular. Данный фреймворк подходит для разработчиков, которые предпочитают статически типизированные системы и ранее работали с такими языками как Java или C#. Кроме того, Angular предоставляет гарантии безопасности и поддержки со стороны Google, поэтому этот инструмент может хорошо подходить для крупной энтерпрайз разработки,
          </p>
          <p><Link to={'/angular'}>Страница Angular</Link>
          </p>
        </>
      )}
    </div>
  )
}
