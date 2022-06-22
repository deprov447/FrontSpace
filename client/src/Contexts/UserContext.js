import { createContext, useState } from 'react';

const UserContext = createContext([{}, () => {}]);

const UserProvider = props => {
  const [state, setState] = useState({ token: null });
  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
