
import { AppConfig, showConnect, UserSession } from '@stacks/connect';

export const useConnect = () => {
  const appConfig = new AppConfig(['store_write', 'publish_data']);
  const userSession = new UserSession({ appConfig });

  window.onload = function () {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(userData => {
        // Save or otherwise utilize userData post-authentication
      });
    } else if (userSession.isUserSignedIn()) {
      // Handle case in which user is already authenticated
    }
  };

  const appDetails = {
      name: 'Choppr',
      icon: '/next.svg'
  }
  function authenticate() {
      showConnect({
        appDetails,
        redirectTo: '/',
        onFinish: () => {
          let userData = userSession.loadUserData();
          console.log(userData);
          
        },
        userSession,
      });
    }

    return {authenticate, userSession}
}