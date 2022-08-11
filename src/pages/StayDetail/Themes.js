import React from 'react';
import styled from 'styled-components';

const Themes = ({ className, stayData }) => {
  return (
    <div className={className}>
      {stayData && (
        <>
          <Theme>
            <div className="title">
              {stayData.stay_feature[0].stay_feature_name}
            </div>
            <div className="desc">
              {stayData.stay_feature[0].stay_feature_detail}
            </div>
          </Theme>
          <Theme>
            <div className="title">
              {stayData.stay_feature[1].stay_feature_name}
            </div>
            <div className="desc">
              {stayData.stay_feature[1].stay_feature_detail}
            </div>
          </Theme>
          <Theme>
            <div className="title">
              {stayData.stay_feature[2].stay_feature_name}
            </div>
            <div className="desc">
              {stayData.stay_feature[2].stay_feature_detail}
            </div>
          </Theme>
        </>
      )}
    </div>
  );
};

const styledThemes = styled(Themes)`
  ${props => props.theme.variables.flex()}

  width: 100vw;
  height: 500px;
  object-fit: cover;
  background: url(${props =>
    props.stayData && props.stayData.stay_image[3].url});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const Theme = styled.li`
  ${props => props.theme.variables.flex('column')}

  position: relative;
  float: left;
  background: rgba(0, 0, 0, 0.7);
  width: 343px;
  height: 300px;
  padding: 45px 33px;
  margin-left: 35px;

  .title{
    font-size: 20px;
    color: #fff;
    margin: 20px 0;
}

.desc{
  font-size: 14px;
  line-height: 1.7;
  color: #b3b3b3;
}
  }
`;

export default styledThemes;
