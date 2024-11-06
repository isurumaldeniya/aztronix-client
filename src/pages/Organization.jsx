import { Link } from 'react-router-dom';

const Organization = () => {
  return (
    <div className="grid sm:grid-cols-4 justify-start">
      <Link to="/addOrg">
        <button className="btn btn-block btn-primary capitalize">
          add organization
        </button>
      </Link>
    </div>
  );
};
export default Organization;
