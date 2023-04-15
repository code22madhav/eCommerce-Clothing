import './Button.style.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttonType, ...otherProps }) => {      //value  writen inside the parents compoent 
  return (                                                         //is treated as props and can be accessed as
    <button                                                        // props with  the name  of children
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  ); 
};

export default Button;