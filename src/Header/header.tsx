
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {


    const navigate = useNavigate();

    const goToMain = () => {
    navigate('/');
  };


  return (
    <main className="header">

    <div className="top-brand">FIRST LIGHT PRESS AGENCY SRL</div>
    <div className="main-name" onClick={goToMain}>
      <span>
        First
      </span>

      <div className="decoration">
      </div>

      <span>
        Light
      </span>
    </div>


   
  
    </main>
  );
}
