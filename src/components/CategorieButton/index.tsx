import { CategorieStyledButton, IconTitle } from './styles';
import { IconProps } from "phosphor-react-native";

type Props = {
    title?: string;
    onPress?: () => void;
    icon: React.ElementType<IconProps>;
}

export function CategorieButton({
        title,
        onPress,
        icon: Icon
    }: Props) 
    {
    return (
        <CategorieStyledButton onPress={onPress}>
            <Icon color="#F292A9" weight="light" size={24}/>
            <IconTitle>{title}</IconTitle>
        </CategorieStyledButton>
    );
};