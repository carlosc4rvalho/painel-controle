import { Link } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login() {
   return (
      <main className={styles.LoginContainer}>
         <form>
            <header>
               Login
            </header>

            <div>
               <label htmlFor="email">Email:</label> {/* Fixed typo here */}
               <input type="email" id="email" placeholder="Example@gmail.com" required />
            </div>

            <div>
               <label htmlFor="senha">Senha:</label>
               <input type="password" id="senha" placeholder="" required />
            </div>

            <div>
               não possui uma conta? <Link to={"/"}>Cadastre-se</Link>
            </div>

            <button>Cadastrar</button>
         </form>
      </main>
   );
};