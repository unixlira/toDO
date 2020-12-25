import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

function Header({lateCount, clickNotification}) {
  
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo" />
      </S.LeftSide>
      <S.RigthSide>
        <Link to="/">INÍCIO</Link>
        <span class="divisor"></span>
        <Link to="/task">NOVA TAREFA</Link>
        <span class="divisor"></span>
        <a href="#">SINCRONIZAR CELULAR</a>
        <span class="divisor"></span>
        <button onClick={clickNotification} id="notification" >
          <img src={bell} alt="Notificação" />
          <span>{lateCount}</span>
        </button>
      </S.RigthSide>
    </S.Container>
  )
  
}

export default Header;
