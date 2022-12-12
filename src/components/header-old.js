import logo from '../logo.svg';
export default function Header({name}) {
    //console.log(props.name)
    //let nome = props.name;
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            <h3>{name}</h3>
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React - Faculdade Descomplica
            </a>
      </header>
    );
}