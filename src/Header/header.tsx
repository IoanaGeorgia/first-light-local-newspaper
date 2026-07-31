
import { useNavigate } from 'react-router-dom';
import logo from "../assets/first-light-logo.svg"

export default function Header() {


    const navigate = useNavigate();

    const goToMain = () => {
    navigate('/');
  };


  return (
    <main className="header">

    <div className="top-brand">FIRST LIGHT PRESS AGENCY SRL</div>
    <div className="main-name" onClick={goToMain} aria-label="First Light Press Agency - Go to homepage">
      <span>
        First
      </span>

      <div className="decoration">
        <img src={logo}></img>
      </div>

      <span>
        Light
      </span>
    </div>

  
    </main>
  );
}
