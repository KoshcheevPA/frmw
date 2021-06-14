import React from 'react';
import axios from "axios";
import Star from "../Star";
import ContainerComponent from "../ContainerComponent";

let repoUrl = 'https://api.github.com/repos/vuejs/vue';

export default function InfoVue() {
  const [data, setData] = React.useState({stars: '', forks: ''});

  React.useEffect(() => {
    axios.get(repoUrl).then(res => {
      setData({stars: res.data.stargazers_count, forks: res.data.forks})
    })
  }, []);

  return (
    <div className=''>
      <h2>Vue</h2>
      <div className='container shadow pt-3 ps-1 pb-3'  style={{maxWidth: '900px', marginLeft: '0'}}>
        <ul style={{margin: '0', padding: '0'}}>
          <li className='bt-1 d-flex flex-column'>
            <strong>Официальная документация:</strong>
            <a href={'https://vuejs.org/'}>https://vuejs.org/</a>
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
            <a href={'https://github.com/vuejs/vue'}>https://github.com/vuejs/vue</a>
          </li>
          <li className='bt-1 d-flex flex-column'>
            <strong>Порог вхождения:</strong>
            <button disabled className='btn btn-success' style={{width: '200px'}}>Низкий</button>
          </li>
          <li className='mt-1 d-flex'>
            <i>Подходит для:</i>
            <u className='ms-1'>Статических веб-приложений, динамических веб-приложений, PWA, монорепозиториев</u>
          </li>
          <code>------------------------------------------------------------------</code>
          <li className='bt-1 d-flex flex-column'>
            <p>
              <i>Возможно подключение по CDN</i>
              <br/><code className='shadow-sm p-1'>{'<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>'}</code>
            </p>
          </li>
        </ul>
      </div>
      <ContainerComponent title={'Описание'}>
        <p>Vue описывает себя как прогрессивный JavaScript-фреймворк.
          Был создан бывшим разработчиков Google Эваном Ю. Первый публичный релиз был представлен в феврале 2014-го года.
          Как и React, Vue является компонентно-ориентированным,
          а компонент после определенного внутреннего вычисления возвращает шаблон пользовательского интерфейса.
          Все компоненты могут быть повторно использованы на странице или в других компонентах. Vue.js
          использует Virtual DOM, который существует не в браузере, а в памяти. Обновленный Virtual DOM в итоге
          представляется как фактический DOM.</p>
        <p>Основные понятия Vue.js это конструктор, компоненты, директивы и переходы,
          которые являются более простой и легкой архитектурой по сравнению с другими представленными JS фреймворками.
          Vue предоставляет дополнительные библиотеки для маршрутизации (Vuerouter) и для глобального управления состоянием
          приложения (Vuex).</p>
        <p>
        Vue не задаёт жесткой структуры проекта, что также открывает простор для разработчиков,
          что может негативно сказаться при расширении проекта или его переходу в другую команду разработчиков.
        </p>
        <p>
        Интерес в этому фреймворку со временем все больше возрастает, ввиду его быстроты и сравнительной легкости. Самой актуальной версией Vue на сегодняшний день является версия 3.
        </p>
      </ContainerComponent>
      <ContainerComponent title={'Начало работы'}>
        <p>
          1. Для начала работы необходимо установить <a href={'https://nodejs.org/ru/'}><code>Node.js</code> и пакетный менеджер <code>NPM</code></a>.
          Для инициализации проекта рекомендуется использовать инструмент <a href={'https://github.com/vuejs/vue-cli'}>vue-cli</a>
          <br/><code className='shadow-sm p-1'>npm install -g @vue/cli</code>
        </p>
        <p>
          2. Для создания проекта
          <br/><code className='shadow-sm p-1'>vue create {'<Название_проекта>'}</code>
          <br/><code className='shadow-sm p-1'>cd {'<Название_проекта>'}</code>
          <br/><code className='shadow-sm p-1'>npm run dev</code>

        </p>
        <code>---------------------</code>
        <p>
          Для создания приложения с TypeScript
          <br/>Создайте новый проект, затем выберите опцию «Manually select features»
        </p>
        <p>
          <br/>Для создания PWA
          <br/><a href={'https://github.com/vuejs-templates/pwa'}>PWA template</a>
        </p>
      </ContainerComponent>
      <ContainerComponent title={'Server Side Rendering'}>
        <p>
          Для создания веб-приложений на Vue с SSR есть
          специальный фреймворк Nuxt.js. Nuxt.js – это популярный легковесный фреймворк для статических и серверных приложений,
          использующих Vue. Он включает в себя готовые решения для стилизации и маршрутизации и предполагает,
          что Node.js используется в качестве серверной среды.
        </p>
        <a href={'https://ru.nuxtjs.org/'}>https://nuxtjs.org/</a>
      </ContainerComponent>
      <ContainerComponent title={'Рекомендуемые библиотеки и пакеты'}>
        <p>UI библиотеки: <a href={'https://www.primefaces.org/primevue/'}>PrimeVue</a>, <a href={'https://vuetifyjs.com/en/'}>Vuetify</a>, <a href={'https://bootstrap-vue.org/'}>BootstrapVue</a></p>
        <p>Для работы с формами: <a href={'https://www.npmjs.com/package/vee-validate'}>vee-validate</a>, <a href={'https://vuelidate.js.org/'}>Vuelidate</a></p>
      </ContainerComponent>
    </div>
  )
}