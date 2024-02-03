import "../styles/FinalPage.scss";
import { Link } from "react-router-dom";

function FinalPage() {
  return (
    <div className="bg-finalpage">
      <h1 className="title-finalpage">Voulez-vous quitter le casino ?</h1>
      <div className="choices">
        <Link to="/Casino666/cimetiere" className="links">
          <p>Oui</p>
        </Link>
        <Link to="/Casino666/asile" className="links">
          <p>Non</p>
        </Link>
      </div>
    </div>
  );
}

export default FinalPage;
