import style from "./styles/style_1.css"

function NoPage(props) {
    return (
<body>
 <div class="container">
  <h2>Регистрация</h2>
  <form>
   <label for="username">Имя пользователя:</label>
   <input type="text" id="username" name="username" required />
   <label for="email">Email:</label>
   <input type="email" id="email" name="email" required />
   <label for="password">Пароль:</label>
   <input type="password" id="password" name="password" required />
   <input type="submit" value="Зарегистрироваться" />
  </form>
 </div>
</body>
    )
}


export default NoPage