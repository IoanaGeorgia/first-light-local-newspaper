import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {


    const navigate = useNavigate();

    const goToMain = () => {
    navigate('/');
  };


  return (
    <div className="footer">
    <div className="footer-wrapper top-brand">

    <p onClick={goToMain}>FIRST LIGHT</p>
  
    </div>

    <div className="footer-under">
      FIRST LIGHT PRESS AGENCY SRL
    </div>

    </div>
  );
}
