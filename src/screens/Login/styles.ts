import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 24px;
    color: #29292E;
    /* margin-bottom: 104px; */
`;

export const Image = styled.Image`
    width: 256px;
    height: 277px;
    /* margin: 78px 0 78px 0; */
`;

export const TitleButton = styled.Text`
    font-size: 16px;
    color: #f8f8ff;
`;

export const ButtonLogin = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 232px;
    height: 48px;
    
    padding: 8px 16px 8px 16px;

    background-color: #F292A9;

    border-radius: 8px;
`;