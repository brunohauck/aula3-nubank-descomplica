
import Cadastro from "../components/cadastro"
import FooterComponent from "../components/footer";
import Header from "../components/header";
export default function Register() {
    const name = 'Aula Descomplica - React'
    return (
        <>
            <Header name={name} />
            <div className='registerClass'>
                <Cadastro />
            </div>
        </>

    );
}