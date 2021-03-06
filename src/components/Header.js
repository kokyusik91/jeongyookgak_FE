import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';
import { useHistory } from 'react-router';

const Header = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.user.isLogin);
  const gotoShop = () => {
    if (isLogin) {
      history.push('/cart');
    } else {
      alert('로그인을 해주세요!');
      history.push('/Login');
    }
  };
  return (
    <>
      <Grid width='100%' height='96px' isFlex padding='10px'>
        <Grid width='1200px' isFlex margin='auto'>
          <Grid isFlex>
            <Grid margin='0px 14px 0px 0px'>
              <Image
                src={logo}
                onClick={() => {
                  history.push('/');
                }}
                cursor='ture'
              />
            </Grid>
            <Text
              color='white'
              onClick={() => {
                history.push('/shopping');
              }}
              cursor='ture'
            >
              쇼핑하기
            </Text>
            <Text
              color='white'
              onClick={() => {
                window.alert('서비스 준비중 입니다.');
              }}
              cursor='ture'
            >
              배송안내
            </Text>
            <Text
              color='white'
              onClick={() => {
                window.alert('서비스 준비중 입니다.');
              }}
              cursor='ture'
            >
              이벤트
            </Text>
          </Grid>

          <Grid isFlex>
            <Text
              color='white'
              onClick={() => {
                window.alert('서비스 준비중 입니다.');
              }}
              cursor='ture'
            >
              공지사항
            </Text>
            <Text
              color='white'
              onClick={() => {
                window.alert('서비스 준비중 입니다.');
              }}
              cursor='ture'
            >
              고객센터
            </Text>
            <div
              style={{
                color: '#fff',
                margin: '0px 10px',
              }}
            >
              |
            </div>

            {isLogin ? (
              <>
                <Text
                  color='white'
                  onClick={() => {
                    dispatch(userActions.LogOutDB());
                  }}
                  cursor='ture'
                >
                  로그아웃
                </Text>
              </>
            ) : (
              <>
                <Text
                  color='white'
                  onClick={() => {
                    history.push('/Login');
                  }}
                  cursor='ture'
                >
                  로그인
                </Text>
                <Text
                  color='white'
                  onClick={() => {
                    history.push('/Signup');
                  }}
                  cursor='ture'
                >
                  회원가입
                </Text>
              </>
            )}
            <FontAwesomeIcon
              icon={faShoppingCart}
              color='white'
              size='2x'
              onClick={gotoShop}
              cursor='pointer'
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;

const Grid = styled.div`
  ${(props) =>
    props.isFlex
      ? `display : flex; align-items : center ; justify-content : space-between;`
      : ''};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: black;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

const Text = styled.p`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  margin: 10px;
  ${(props) => (props.cursor ? `cursor : pointer;` : '')}
`;

const Image = styled.img`
  width: 129px;
  height: 48px;
  src: '';
  ${(props) => (props.cursor ? `cursor : pointer;` : '')}
`;
