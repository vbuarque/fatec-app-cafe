import { useNavigation } from '@react-navigation/native';
import { CaretLeft } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import { Header, HeaderTitle } from './styles';

type HeaderProps = {
    title: string;
}

export default function CustomHeader({title}: HeaderProps) {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return(
        <Header>
            <TouchableOpacity onPress={handleGoBack}>
                <CaretLeft size={30} color={'#F292A9'}/>
            </TouchableOpacity>
            <HeaderTitle>{title}</HeaderTitle>
        </Header>
    )
}