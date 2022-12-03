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

type MenuItemProps = {
    title?: string;
    subtitle?: string;
    cash?: string;
    image?: string;
}

export default function MenuItemCustom({ title, cash, image, subtitle }: MenuItemProps) {
  return (
    <Container>
      <LeftSide>
        <ContentLeftSide>
          <ImageItem source={{uri: image}} />
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