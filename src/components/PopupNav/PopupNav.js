import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import './PopupNav.css'

function PopupNav(props) {

  return (
    <div className={`popup ${props.isOpen && 'popup_opened'}`} id={`${props.id}__popup`}>
      <div className='popup__container'>
        <Nav isOpen={props.isOpen} isPopup={true} onClose={props.onClose}/>
      </div>
    </div>
  );
}

export default PopupNav;