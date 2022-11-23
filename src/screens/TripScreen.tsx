import styled from '@emotion/native';

const Wrap = styled.View`
  padding-top: 30px;
  align-items: center;
`;
const Title = styled.Text``;

export type TripScreenProps = {};

export const TripScreen = ({}: TripScreenProps) => {
  return (
    <Wrap>
      <Title>Trip Screen</Title>
    </Wrap>
  );
};
