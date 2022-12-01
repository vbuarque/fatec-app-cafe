import {
Container,
LeftSide,
ContentLeftSide,
ImageItem,
RightSide,
ContentRightSide,
TitleItem,
SubtitleItem,
CashItem,
} from './styles'

type CooffeeItemProps = {
    title?: string;
    subtitle?: string;
    cash?: string;
    image?: any;
}

export default function CoffeeItem({ title, cash, image, subtitle }: CooffeeItemProps) {
  return (
    <Container>
      <LeftSide>
        <ContentLeftSide>
          <ImageItem source={image} />
        </ContentLeftSide>
      </LeftSide>

      <RightSide>
        <ContentRightSide>
            <TitleItem>{title}</TitleItem>
            <SubtitleItem>{subtitle}</SubtitleItem>
            <CashItem>{cash}</CashItem>
        </ContentRightSide>
      </RightSide>
    </Container>
  );
}