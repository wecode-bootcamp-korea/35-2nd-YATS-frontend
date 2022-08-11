import styled from 'styled-components';

const Title = styled.div`
  width: 100%;
  padding: 50px 0;
  font-size: 40px;
  font-weight: 800;
  border-bottom: 0.01rem solid #e5e5e5;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 90px;
  right: 50px;
  width: 40px;
  height: 40px;
  border: none;
  background-size: cover;
  background-color: white;
  background-image: url(https://cdn-icons-png.flaticon.com/512/7903/7903969.png);
  opacity: 0.5;
`;

export { Title, CloseButton };
