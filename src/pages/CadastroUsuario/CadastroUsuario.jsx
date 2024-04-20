import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CadastroUsuario.module.css";

export default function CadastroUsuario() {
   const [form, setForm] = useState({
      nome: "", 
      email: "",
      senha: ""
   });

   return (
      <main className={styles.CadastroUsuarioContainer}>
         <form>
            <header>
               <span>Cadastro de Usuário</span>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic modi sed neque alias! A earum porro ad quidem eius, consequatur quo, consectetur voluptates dolorum labore rerum eaque at iusto.</p>
            </header>

            <div>
               <label htmlFor="nome">Nome:</label>
               <input type="text" id="nome" placeholder="Digite seu nome" required />
            </div>

            <div>
               <label htmlFor="email">Email:</label>
               <input type="email" id="email" placeholder="Example@gmail.com" required />
            </div>

            <div>
               <label htmlFor="senha">Senha:</label>
               <input type="password" id="senha" placeholder="" required />
            </div>

            <div>
               Já possui uma conta? <Link to={"/"}>Faça login</Link>
            </div>

            <button>Cadastrar</button>
         </form>
      </main>
   );
};
