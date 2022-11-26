import styled from '@emotion/native';
import { ReactNode, useCallback, useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { HeaderBar } from '../components/HeaderBar';
import { PlaceContext } from '../contexts/PlaceContext';
import { HeartOutlinedIcon, ShareIcon, StarIcon } from '../icons';
import { PlaceType } from '../types';
import { Colors } from '../values/colors';
import { placeListData } from '../data';
import { Button } from '../components';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const { height, width } = Dimensions.get('window');

const Wrap = styled.View`
  width: ${String(width)}px;
  height: ${String(height - 54)}px;
  position: absolute;
  align-items: center;
  padding-top: 30px;
  background-color: ${Colors.theme};
`;

const CoverImageWrap = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
`;

const CoverImage = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 10px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${Colors.themeContrast};
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

const Text = styled.Text`
  font-size: 14px;
  color: ${Colors.themeContrast};
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
`;

const Rating = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const RatingValue = styled.Text`
  color: ${Colors.themeContrast};
  margin-left: 5px;
`;

const Description = styled(Text)`
  line-height: 20px;
  text-align: justify;
`;

const ButtonAdd = styled(Button)`
  width: ${String(width - 40)}px;
  margin-top: 20px;
`;

export type PlaceProviderProps = {
  children: ReactNode;
};

export const PlaceProvider = ({ children }: PlaceProviderProps) => {
  const [show, setShow] = useState(false);
  const [place, setPlace] = useState<PlaceType | null>(null);

  const left = useSharedValue(width);

  const config = {
    duration: 500,
    easing: Easing.bezier(0, 0.54, 1, 0.47),
  };

  const style = useAnimatedStyle(() => {
    return {
      left: withTiming(left.value, config),
    };
  });

  const open = useCallback((placeId: number) => {
    const item = placeListData.find((item) => item.id === placeId);

    if (item) {
      setPlace(item);
      setShow(true);
    }
  }, []);

  useEffect(() => {
    left.value = show ? 0 : width;
  }, [show]);

  return (
    <PlaceContext.Provider value={{ open }}>
      {children}

      <Animated.View style={[{ position: 'absolute', width, height }, style]}>
        <Wrap>
          <HeaderBar
            onPressBack={() => setShow(false)}
            title={place?.title ?? ''}
            buttons={[
              {
                children: <ShareIcon width={24} height={24} />,
              },
              {
                children: (
                  <HeartOutlinedIcon width={24} height={24} color="#fff" />
                ),
              },
            ]}
          />
          <CoverImageWrap>
            <CoverImage source={{ uri: place?.photo }} />
          </CoverImageWrap>
          <Title>{place?.title}</Title>
          <Text>{place?.address}</Text>
          <Rating>
            <StarIcon width={16} height={16} />
            <RatingValue>{place?.rating.toPrecision(2)}</RatingValue>
          </Rating>
          <Title>Descrição</Title>
          <Description>{place?.description}</Description>
          <ButtonAdd>Adicionar à minha viagem</ButtonAdd>
        </Wrap>
      </Animated.View>
    </PlaceContext.Provider>
  );
};
