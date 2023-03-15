import React, { useEffect } from 'react';
import GoogleButton from 'react-google-button';
import { UserAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/dashboard');
    }
  }, [user]);

  return (
    <div>
      {user ? (
        <img src={user?.photoURL} alt={user?.displayName} />
      ) : (
        <GoogleButton onClick={handleGoogleSignIn} />
      )}
    </div>
  );
}
