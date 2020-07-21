import React from 'react';
// import { connect } from 'react-redux';
// import { verifyUser } from '../../actions/auth';

import Routes from '../routes';

const App = () => {
  // Attemp to log user in if they have logged in before
  // React.useEffect(() => {
  //   verifyUser();
  // }, [verifyUser]);

  return (
    <div>
      <Routes />
    </div>
  );
};

// export default connect(null, { verifyUser })(App);
export default App;
