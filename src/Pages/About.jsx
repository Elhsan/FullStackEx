import style from "./styles/style_2.css"

function About(props) {
    return (
        <body>
        <div class="container">
         <h1>Login</h1>
         <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="submit" value="Login" />
         </form>
        </div>
       </body>
    )
}


export default About