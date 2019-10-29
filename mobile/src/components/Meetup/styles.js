import styled from 'styled-components/native';
import Button from '../Button';

export const Container = styled.View`
  height: 345px;
  align-self: stretch;
  border-radius: 4px;
  background: #fff;
  margin: 0px 20px 20px;
  overflow: hidden;
`;

export const MeetupImage = styled.Image`
  height: 150px;
  width: auto;
`;

export const Title = styled.Text`
  font-size: 22px;
  line-height: 26px;
  margin: 20px 0 9px 18px;
  color: #000;
`;

export const Details = styled.View`
  margin-left: 20px;
  padding-left: 10px;
`;

export const HorizontalContainer = styled.View`
  flex-direction: row;
`;

export const TextDetails = styled.Text`
  font-size: 18px;
  line-height: 22px;
  text-align: left;
  margin-left: 10px;
  color: #999;
`;

export const SubscribeButton = styled(Button)`
  margin: 20px 20px;
`;
