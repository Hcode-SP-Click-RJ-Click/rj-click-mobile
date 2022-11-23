import styled from '@emotion/native';
import { useTabNavigation } from '../hooks/useTabNavigation';
import { StarIcon } from '../icons/StarIcon';
import { Screen } from '../routes';
import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

const Wrap = styled.TouchableOpacity`
  height: 200px,
  width: 100%;
  position: relative;
`;

const PlaceImage = styled.ImageBackground`
  height: 200px;
`;

const PlaceTitle = styled.Text`
  font-size: 30px;
  color: #fff;
  position: absolute;
  left: 15px;
  bottom: 35px;
`;

const PlaceSubTitle = styled.Text`
  color: #fff;
  position: absolute;
  bottom: 15px;
  left: 15px;
`;

const PlaceRating = styled.View`
  position: absolute;
  right: 15px;
  bottom: 15px;
  align-items: center;
`;

const PlaceRatingValue = styled.Text`
  color: #fff;
`;

const PlaceOverlay = styled(LinearGradient)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Button = styled.TouchableOpacity`
  background-color: #ffffff99;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  margin-left: 10px;
`;

const Buttons = styled.View`
  position: absolute;
  right: 15px;
  top: 15px;
  flex-direction: row;
`;

export type PlaceItemButtonProps = {
  icon: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
};

export type PlaceItemProps = {
  style?: StyleProp<ViewStyle>;
  buttons?: PlaceItemButtonProps[];
};

export const PlaceItem = ({ buttons, style }: PlaceItemProps) => {
  const { navigate } = useTabNavigation();
  return (
    <Wrap style={style} onPress={() => navigate(Screen.Favorites)}>
      <PlaceImage
        source={require('./../assets/maracana.jpg')}
        imageStyle={{ borderRadius: 10 }}
      >
        <PlaceOverlay
          colors={['transparent', 'rgba(0,0,0,0.6)']}
          start={{ x: 0, y: 0.4 }}
          end={{ x: 0, y: 0.8 }}
        />
        <PlaceTitle>Maracanã</PlaceTitle>
        <PlaceSubTitle>Um dos estádios mais famosos do mundo.</PlaceSubTitle>
        <PlaceRating>
          <StarIcon width={16} height={16} />
          <PlaceRatingValue>5.0</PlaceRatingValue>
        </PlaceRating>
        <Buttons>
          {(buttons ?? []).map(({ onPress, icon }, index) => (
            <Button key={index} onPress={onPress}>
              {icon}
            </Button>
          ))}
        </Buttons>
      </PlaceImage>
    </Wrap>
  );
};
