import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import Signin from './Signin';

const AuthChecker = ({ children }) => {
  const [userContext, setUserContext] = useContext(UserContext);
  console.log(userContext);
  return userContext.token ? children : <Signin showExtraOps={false} />;
};

export default AuthChecker;
