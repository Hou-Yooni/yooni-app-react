import dressert from '../../assets/foodDessert.jpg';
import classes from './Header.module.css';
import  HeaderCartButton from './HeaderCartButton';
const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactDessert</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes['main-image']}>
        <img src={dressert} />
      </div>
    </>
  );
};

export default Header;
