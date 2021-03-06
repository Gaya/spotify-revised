import { FC, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import ReplayIcon from '@material-ui/icons/Replay';

import { authenticateWithAuthorizationCode, getStoredState } from '../utils';
import AuthContext from '../context';

import FullScreenIndicator from '../../LoadingIndicator/FullScreenIndicator';
import CenteredContainer from '../../CenteredContainer/CenteredContainer';

import './Auth.css';

const Auth: FC = () => {
  const { setLoggedIn, logOut } = useContext(AuthContext);
  const history = useHistory();
  const searchParams = new URLSearchParams(window.location.search);
  const storedState = getStoredState();

  const state = searchParams.get('state');
  const error = searchParams.get('error');
  const code = searchParams.get('code');

  useEffect(() => {
    authenticateWithAuthorizationCode(code || '')
      .then(() => {
        setLoggedIn(true);
        history.push('/');
      })
      .catch((err) => {
        history.push(`/auth?error=${err.error}`);
      });
  }, [history, code, setLoggedIn]);

  if (storedState !== state || error) {
    logOut();

    return (
      <CenteredContainer fullScreen>
        <Card variant="outlined">
          <CardHeader
            disableTypography
            avatar={<ErrorIcon style={{ color: red[500] }} fontSize="large" />}
            title={<Typography variant="h5">Authentication Failed</Typography>}
          />
          <CardContent>
            Whoops! Looks like authenticating with Spotify failed.
          </CardContent>
          <CardContent>
            <Button
              onClick={(): void => history.push('/')}
              startIcon={<ReplayIcon />}
              variant="contained"
            >
              Retry
            </Button>
          </CardContent>
        </Card>
      </CenteredContainer>
    );
  }

  return (
    <FullScreenIndicator />
  );
};

export default Auth;
