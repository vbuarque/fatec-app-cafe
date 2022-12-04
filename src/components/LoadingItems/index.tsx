import { Heading, Spinner, HStack } from "native-base";

type LoadingProps = {
    title: string;
}

export function LoadingItems({title}: LoadingProps) {
    return (
        <HStack flex={1} space={2} justifyContent="center" alignItems="center">
        <Spinner accessibilityLabel="Loading posts" color="#F292A9" />
        <Heading color="#F292A9" fontSize="md">
            {title}
        </Heading>
        </HStack>
    );
    }