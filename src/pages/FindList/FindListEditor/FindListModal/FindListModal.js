import React from 'react';
import * as FindListStyle from './FindListModal.style';

const FindListModal = ({ handleMenu, handleAreaData }) => {
  const AreaData = [
    { id: 1, value: '국내전체' },
    { id: 2, value: '제주' },
    { id: 3, value: '서울' },
    { id: 4, value: '강원' },
    { id: 5, value: '부산' },
    { id: 6, value: '경기' },
    { id: 7, value: '충청' },
    { id: 8, value: '경기' },
    { id: 9, value: '전라' },
    { id: 10, value: '인천' },
    { id: 11, value: '광주' },
    { id: 12, value: '대전' },
    { id: 13, value: '대구' },
    { id: 14, value: '울산' },
  ];

  return (
    <FindListStyle.FindListModalWrapper onClick={e => handleMenu(e, '')}>
      <FindListStyle.FindListModalcontainer>
        <FindListStyle.ModalFirstComponent>
          <FindListStyle.ModalFirstLeftComponent>
            어디로 떠날까요?
          </FindListStyle.ModalFirstLeftComponent>
          <FindListStyle.ModalFirstRightComponent
            src="./images/FindList/Close.png"
            onClick={e => handleMenu(e, '')}
          />
        </FindListStyle.ModalFirstComponent>
        <FindListStyle.ModalSecondComponent>
          <FindListStyle.ModalSecondTextComponent>
            국내
          </FindListStyle.ModalSecondTextComponent>
          <FindListStyle.ModalSecondTextComponent>
            해외
          </FindListStyle.ModalSecondTextComponent>
        </FindListStyle.ModalSecondComponent>
        <FindListStyle.ModalThirdComponent>
          <FindListStyle.ModalThirdComponentLeftRight>
            {AreaData.map(data => {
              return (
                <FindListStyle.ModalThirdComponentDetail
                  key={data.id}
                  onClick={e => {
                    handleMenu(e, '');
                    handleAreaData(data.value);
                  }}
                >
                  {data.value}
                </FindListStyle.ModalThirdComponentDetail>
              );
            })}
          </FindListStyle.ModalThirdComponentLeftRight>
          <FindListStyle.ModalThirdComponentLeftRight>
            <FindListStyle.ModalThirdComponentDetail>
              준비중입니다.
            </FindListStyle.ModalThirdComponentDetail>
          </FindListStyle.ModalThirdComponentLeftRight>
        </FindListStyle.ModalThirdComponent>
      </FindListStyle.FindListModalcontainer>
    </FindListStyle.FindListModalWrapper>
  );
};
export default FindListModal;
