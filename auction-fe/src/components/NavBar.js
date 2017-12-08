import React from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const NavBarStatic = () => {
  return (
    <div
      style={{
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: 60,
        backgroundColor: 'white',
        alignItems: 'center',
      }}
    >
      <div style={{ marginRight: 50 }}>
        <FlatButton
          style={{
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <Link
            style={{
              textDecoration: 'none',
              color: '#000',
              fontWeight: 700,
            }}
            to="/login"
          >
            Login
          </Link>
        </FlatButton>
        <RaisedButton
          style={{
            marginLeft: 10,
            marginRight: 10,
          }}
          primary
        >
          <Link
            style={{
              textDecoration: 'none',
              color: '#fff',
              fontWeight: 500,
            }}
            to="/signup>"
          >
            Signup
          </Link>
        </RaisedButton>
      </div>
    </div>
  );
};

export default NavBarStatic;
