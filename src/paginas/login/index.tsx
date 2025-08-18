
import { useForm } from 'react-hook-form';
import styles from './styles.module.css';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useNavigate } from 'react-router-dom'; // Importa o hook de navegação



const userSchema = z.object({
    email: z.string().nonempty("O e-mail não pode ser vazio, tente novamente").refine(value=> z.string().email().safeParse(value).success, {
    message: "O e-mail não é válido"
    }),
    password: z.string().nonempty("A senha não pode ser vazia, tente novamente").min(6 , "A senha deve ter no mínimo 6 caracteres"), 
})

type User = z.infer<typeof userSchema>

export default function Login() {
    const{register , handleSubmit , reset , formState: {errors, isSubmitting } }= useForm<User>({
        resolver: zodResolver(userSchema)
    })

    const navigate = useNavigate(); // Hook para navegação

    async function createUser(data: User) {
        await new Promise(resolve=> setTimeout(resolve, 2000)) // demorar 2seg
       console.log(data)
       reset()


       // Após o login bem-sucedido, redireciona para a página Home
       navigate("/home");
    }
    

    return (
        <main>
            <div className={styles.capa}>
                <div className={styles.foto}>
                    <img src="./src/assets/imagem_login.png" alt="logo" /> 
                </div> 
                <div className={styles.infos}>
                    <div className={styles.logo}>
                        <img src="./src/assets/logo.png"/>
                    </div>
                    <div className={styles.saudacao}> 
                        <h2> Bem vindo (a)! </h2> 
                        <h1> Entre na sua conta </h1>           
                    </div>

                    <form onSubmit={handleSubmit(createUser)} className={styles.form}>
                        <p>E-mail</p>
                        <input 
                            type='email'
                            className={styles.input}
                            placeholder='Digite aqui seu email' 
                            {...register('email')}
                        />
                        {errors.email && <span>{errors.email.message}</span>}
                        
                        <p>Senha</p>
                        <input 
                            type='password'
                            className={styles.input}
                            placeholder='Digite aqui sua senha' 
                            {...register('password')}
                        />
                        {errors.password && <span>{errors.password.message}</span>}
                        <div className={styles.botao1}>
                            <button disabled={isSubmitting} className='botao1' >{isSubmitting ? 'Carregando...': 'Entrar' } </button>
                        </div>
                        
                    </form>
                        <div className={styles.botao2}>
                            <button className='botao2' >Cadastre-se</button>
                        </div> 
                </div>
            </div>
        </main>
        
    )
}