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
      image?: string;
  }
  
  export default function MenuItemCustom({ title, image, subtitle }: MenuItemProps) {
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
          </ContentRightSide>
        </RightSide>
      </Container>
    );
  }