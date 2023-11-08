import type { Meta, StoryObj } from "@storybook/react";

import { ArticleDetailsPage } from "./ArticleDetailsPage";
import { storeDecorator } from "@shared/helpers/storybook/storeDecorator";
import { articleDetailsReducer } from "@entities/article/model/slice/articleDetailsSlice";
import { type ReducersMapObject } from "@reduxjs/toolkit";
import { type ReducerList, type StateType } from "@app/providers/storeProvider";
import { articleMock } from "@shared/assest/mock/mocks";
import { addCommentReducer } from "@feature/addComment";
import { Suspense } from "react";
import { articleDetailsPageReducer } from "../model/slice";
import { userReducer } from "@entities/user";

const meta = {
  title: "page/ArticleDetailsPage",
  component: ArticleDetailsPage,
  tags: ["autodocs"],
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const state: StateType = {
  counter: { value: 0 },
  user: {
    authData: {
      id: "1",
      username: "Ruslan",
      role: "ADMIN",
    },
    _isInit: true
  },
  scroll: {
    "/": 300,
  },
  articles: {
    error: "",
    isLoading: false,
    data: articleMock,
  },
  articleDetailsPage: {
    articleRecommendationsList: {
      ids: [
        "1",
        "2",
        "3",
        "4"
      ],
      entities: {
        "1": {
          id: "1",
          title: "Javascript news",
          subtitle: "Что нового в JS за 2022 год?",
          img: "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png",
          views: 2422,
          createdAt: "26.03.2021",
          type: [
            "IT"
          ],
          blocks: [
            {
              id: "1",
              type: "TEXT",
              title: "Заголовок этого блока",
              paragraphs: [
                "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
              ]
            },
            {
              id: "4",
              type: "CODE",
              code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
            },
            {
              id: "8",
              type: "IMAGE",
              src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
              title: "Рисунок 1 - скриншот сайта"
            },
            {
              id: "9",
              type: "TEXT",
              title: "Заголовок этого блока",
              paragraphs: [
                "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы."
              ]
            }
          ],
          user: {
            id: "1",
            username: "admin",
            role: "ADMIN",
            avatar: "https://sun9-1.userapi.com/impg/SWPMaf_MSz9mzptUya0I9x8WWxEt7fwJ4uyD-g/EE4oVaRp3wI.jpg?size=604x604&quality=95&sign=177e4e821c4a6735db31fbeb84de41e2&c_uniq_tag=eunY8ZVj41jFPdcjxK3Tdq7WAayWGntN8dhmi3Hqliw&type=album"
          }
        },
        "2": {
          id: "2",
          title: "Python news",
          subtitle: "Что нового в JS за 2022 год?",
          img: "https://img.freepik.com/free-icon/snakes_318-368381.jpg?w=2000",
          views: 532,
          createdAt: "20.06.2020",
          type: [
            "SCIENCE"
          ],
          blocks: [
            {
              id: "1",
              type: "TEXT",
              title: "Заголовок этого блока",
              paragraphs: [
                "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
              ]
            }
          ],
          user: {
            id: "1",
            username: "admin",
            role: "ADMIN",
            avatar: "https://sun9-1.userapi.com/impg/SWPMaf_MSz9mzptUya0I9x8WWxEt7fwJ4uyD-g/EE4oVaRp3wI.jpg?size=604x604&quality=95&sign=177e4e821c4a6735db31fbeb84de41e2&c_uniq_tag=eunY8ZVj41jFPdcjxK3Tdq7WAayWGntN8dhmi3Hqliw&type=album"
          }
        },
        "3": {
          id: "3",
          title: "Kotlin news",
          subtitle: "Что нового в JS за 2022 год?",
          img: "https://kotlinlang.org/assets/images/twitter/general.png",
          views: 7652,
          createdAt: "10.10.2023",
          type: [
            "IT"
          ],
          blocks: [
            {
              id: "1",
              type: "TEXT",
              title: "Заголовок этого блока",
              paragraphs: [
                "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
              ]
            },
            {
              id: "4",
              type: "CODE",
              code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
            },
            {
              id: "5",
              type: "TEXT",
              title: "Заголовок этого блока",
              paragraphs: [
                "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
              ]
            },
            {
              id: "8",
              type: "IMAGE",
              src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
              title: "Рисунок 1 - скриншот сайта"
            },
            {
              id: "9",
              type: "TEXT",
              title: "Заголовок этого блока",
              paragraphs: [
                "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы."
              ]
            }
          ],
          user: {
            id: "1",
            username: "admin",
            role: "ADMIN",
            avatar: "https://sun9-1.userapi.com/impg/SWPMaf_MSz9mzptUya0I9x8WWxEt7fwJ4uyD-g/EE4oVaRp3wI.jpg?size=604x604&quality=95&sign=177e4e821c4a6735db31fbeb84de41e2&c_uniq_tag=eunY8ZVj41jFPdcjxK3Tdq7WAayWGntN8dhmi3Hqliw&type=album"
          }
        },
        "4": {
          id: "4",
          title: "Javascript news",
          subtitle: "Что нового в JS за 2022 год?",
          img: "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png",
          views: 432,
          createdAt: "12.12.2019",
          type: [
            "IT"
          ],
          blocks: [
            {
              id: "1",
              type: "TEXT",
              title: "Заголовок этого блока",
              paragraphs: [
                "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
              ]
            },
            {
              id: "4",
              type: "CODE",
              code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
            },
            {
              id: "8",
              type: "IMAGE",
              src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
              title: "Рисунок 1 - скриншот сайта"
            },
            {
              id: "9",
              type: "TEXT",
              title: "Заголовок этого блока",
              paragraphs: [
                "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы."
              ]
            }
          ],
          user: {
            id: "1",
            username: "admin",
            role: "ADMIN",
            avatar: "https://sun9-1.userapi.com/impg/SWPMaf_MSz9mzptUya0I9x8WWxEt7fwJ4uyD-g/EE4oVaRp3wI.jpg?size=604x604&quality=95&sign=177e4e821c4a6735db31fbeb84de41e2&c_uniq_tag=eunY8ZVj41jFPdcjxK3Tdq7WAayWGntN8dhmi3Hqliw&type=album"
          }
        }
      },
      isLoading: false
    },
    articleComments: {
      isLoading: false,
      error: undefined,
      ids: [1, 2, 3],
      entities: {
        "1": {
          id: "1",
          text: "some comment",
          articleId: "1",
          userId: "1",
          user: {
            id: "1",
            username: "admin",
            role: "ADMIN",
            avatar:
              "https://sun9-1.userapi.com/impg/SWPMaf_MSz9mzptUya0I9x8WWxEt7fwJ4uyD-g/EE4oVaRp3wI.jpg?size=604x604&quality=95&sign=177e4e821c4a6735db31fbeb84de41e2&c_uniq_tag=eunY8ZVj41jFPdcjxK3Tdq7WAayWGntN8dhmi3Hqliw&type=album",
          },
        },
        "2": {
          id: "2",
          text: "some comment 2",
          articleId: "1",
          userId: "2",
          user: {
            id: "2",
            username: "user",
            role: "USER",
            avatar: "https://cspromogame.ru//storage/upload_images/avatars/1299.jpg",
          },
        },
        "3": {
          id: "3",
          text: "some comment 3",
          articleId: "1",
          userId: "1",
          user: {
            id: "1",
            username: "admin",
            role: "ADMIN",
            avatar:
              "https://sun9-1.userapi.com/impg/SWPMaf_MSz9mzptUya0I9x8WWxEt7fwJ4uyD-g/EE4oVaRp3wI.jpg?size=604x604&quality=95&sign=177e4e821c4a6735db31fbeb84de41e2&c_uniq_tag=eunY8ZVj41jFPdcjxK3Tdq7WAayWGntN8dhmi3Hqliw&type=album",
          },
        },
      },
    }
  },
  addComment: {
    text: "ghgj"
  }
};

const reducer: ReducerList = {
  user: userReducer,
  articles: articleDetailsReducer,
  articleDetailsPage: articleDetailsPageReducer,
  addComment: addCommentReducer
};

Default.decorators = [
  (S) => (
    <Suspense fallback={<div>Load</div>}>
      {S()}
    </Suspense>
  ), // ленивая подгрузка для асинхронного компонента
  storeDecorator(state , reducer as ReducersMapObject<StateType>),
];
