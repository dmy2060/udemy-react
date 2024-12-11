import logo from '../assets/logo.png';
import classes from './Header.module.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt='A canvas' />
      <h1>ReactArt</h1>
      <p style={{ color: 'red', textAlign: 'left' }}>
        A community of artists and art-lovers.
      </p>
    </header>
  );
}

// <p className={classes.p}>
//   A community of artists and art-lovers.
// </p>;
