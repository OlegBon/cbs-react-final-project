# CBS React Final Project

Цей проект є React-додатком, створеним в рамках фінального проекту курсу CBS React. Він інтегрує Firebase та інші бібліотеки для створення повноцінного веб-додатку. У проєкті реалізовано читання даних з бази даних Firebase, а також авторизація.

## Опис

Цей проєкт являє собою концепт інтернет-магазину, у якому користувачі можуть авторизуватися через Firebase і взаємодіяти з базою даних. Додаток дає змогу:

- Створити акаунт для роботи з Firebase.
- Авторизуватися через Firebase (якщо вже є акаунт).
- Читати дані (каталог товарів) в реальному часі (з використанням Firebase Realtime Database).
- Получати погоду для вказаного міста (api.openweathermap.org)

## Технології

- **React** — для побудови користувацького інтерфейсу.
- **Firebase** — для аутентифікації користувачів і роботи з базою даних.
- **@reduxjs/toolkit** — для управління станом компонентів.

## Початок роботи

Слідуйте цим інструкціям для налаштування та запуску проекту локально.

### Передумови

- Node.js (v12 або новіше)
- npm (v6 або новіше)

### Встановлення

1. Клонуйте репозиторій:

   ```
   git clone https://github.com/OlegBon/cbs-react-final-project.git
   cd cbs-react-final-project
   ```

2. Встановіть залежності:

   ```
   npm install
   ```

   або

   ```
    npm i
   ```

3. Створіть файл .env у корені проєкту і додайте такі змінні оточення (отримайте їх із Firebase - https://console.firebase.google.com/ та api.openweathermap.org):

   ```
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_DATABASE_URL=your-database-url
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id

   REACT_APP_OPENWEATHERMAP_APPID=your-app-id
   ```

   **Примітка.** Якщо з firebase при перегляді версіі чи init, чи ще з якоюсь командою отримаємо помилку:

   ```
   firebase : The term 'firebase' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again.
   At line:1 char:1
   + firebase init
   + ~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (firebase:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
   ```

   Треба перевірити поточну політику виконання. Зазвичай її встановлено в Restricted, що забороняє запуск будь-яких скриптів.

   ```
   Get-ExecutionPolicy
   ```

   Тимчасово дозволити виконання скриптів

   ```
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
   ```

   Якщо потрібно дозволити постійно

   ```
   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
   ```

   Далі робимо що нап потрібно. Дивимось версію, встановлюємо Firebase CLI, підключаємось до аккаунту,

   ```
   firebase --version
   npm install -g firebase-tools
   firebase login
   firebase init
   ```

   Та потім повертаємо політику виконання в початковий стан, щоб система залишалася захищеною

   ```
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Restricted
   ```

   **Альтернатива: Використовуємо cmd замість PowerShell**

4. Запустіть проєкт:

   ```
   npm start
   ```

   або

   ```
    npm run start
   ```

5. Відкрийте браузер і перейдіть на сторінку http://localhost:3000.

## Структура проекту

- **src/assets/** — фото для проекту.
- **src/components/** — компоненти для відображення користувацького інтерфейсу.
- **src/data/** — store та reducers.
- **src/Pages/** — сторінки проекту (Home та Cart).
- **src/utils/** — частина коду винесена у окрему утілиту для того щоб зробити з title url для товару).
- **src/firebase-config.js** — конфігурація бази даних та ініціалізація додатків.
- **src/openweathermap-config.js** — конфігурація api.openweathermap.org для віджета погоди у Sidebar.
- **src/App.js** — основний компонент програми.
- **src/App.css** — стилі для додатка.

## Як використовувати

Під час першого запуску програми ви можете створити акаунт або увійти в систему з використанням Firebase Authentication - у Header піктограма логіну.
Кнопка Add to Cart та вміст карзини з'являється тільки для авторизированих користувачів. На головній сторинці є каталог товарів з пагінацією. Також можемо обрати окрему категорію та бачити тільки товари цієї категорії (ліворуч). Є можливість подивитися погоду в потрібному місті (за замовчуванням це Київ) - праворуч. Маємо можливість передивитися товар подробніше або додати його у корзину. У корзині маємо можливість збільшити або зменшити кількість товару та бачимо підсумок.

## Вклад

Якщо у вас є ідеї для поліпшення проекту, будь ласка, створіть pull request або відкрийте issue.

## Подяки

Віталій Мазяр, Богдан Мартиненко, Олексій Татаренков - дякую за навчання, передачу знань та навичок, завдання потрібних векторів

## Ліцензія

Цей проєкт ліцензується на умовах ліцензії MIT. Докладніше див. у файлі LICENSE.
