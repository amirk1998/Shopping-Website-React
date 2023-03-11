import { useLocation, useNavigate, useParams } from 'react-router-dom';

function withRouter(WrappedComponent) {
  return (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return (
      <div>
        <WrappedComponent
          {...props}
          location={location}
          navigate={navigate}
          params={params}
        />
      </div>
    );
  };
}

export default withRouter;
