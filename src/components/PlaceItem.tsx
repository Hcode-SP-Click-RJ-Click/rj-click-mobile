import styled from '@emotion/native';
import { useTabNavigation } from '../hooks/useTabNavigation';
import { StarIcon } from '../icons/StarIcon';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { PlaceType } from '../types';
import { usePlace } from '../hooks/usePlace';
import { ButtonIcon, ButtonIconProps } from './ButtonIcon';
import { Colors } from '../values/colors';

const Wrap = styled.TouchableOpacity`
  height: 200px,
  width: 100%;
  position: relative;
`;

const PlaceImage = styled.ImageBackground`
  height: 200px;
`;

const PlaceTitle = styled.Text`
  font-size: 25px;
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

const Buttons = styled.View`
  position: absolute;
  right: 15px;
  top: 15px;
  flex-direction: row;
`;

const PlaceButtonIcon = styled(ButtonIcon)`
  background-color: #ffffff99;
`;

const Position = styled.Text`
  background-color: ${Colors.primary};
  color: #fff;
  position: absolute;
  top: 20px;
  left: 0;
  width: 47px;
  height: 32px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  text-align: center;
  line-height: 32px;
`;

export type PlaceItemProps = {
  style?: StyleProp<ViewStyle>;
  buttons?: ButtonIconProps[];
  data: PlaceType;
  position?: number;
};

export const PlaceItem = ({
  buttons,
  style,
  data,
  position,
}: PlaceItemProps) => {
  const { open } = usePlace();
  const { navigate } = useTabNavigation();
  const [place, setPlace] = useState(data);

  useEffect(() => setPlace(data), [data]);

  return (
    <Wrap style={style} onPress={() => open(place.id)}>
      <PlaceImage
        source={{ uri: place.photo }}
        imageStyle={{ borderRadius: 10 }}
      >
        <PlaceOverlay
          colors={['transparent', 'rgba(0,0,0,0.6)']}
          start={{ x: 0, y: 0.4 }}
          end={{ x: 0, y: 0.8 }}
        />
        <PlaceTitle>{place.title}</PlaceTitle>
        <PlaceSubTitle>{place.subtitle}</PlaceSubTitle>
        <PlaceRating>
          <StarIcon width={16} height={16} />
          <PlaceRatingValue>{place.rating.toPrecision(2)}</PlaceRatingValue>
        </PlaceRating>
        <Buttons>
          {(buttons ?? []).map((button, index) => (
            <PlaceButtonIcon key={index} {...button}>
              {button.children}
            </PlaceButtonIcon>
          ))}
        </Buttons>
        {position && <Position>{position}°</Position>}
      </PlaceImage>
    </Wrap>
  );
};
