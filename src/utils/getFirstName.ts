export function getFirstName(name: string) {
    const [ firstName ] = name.split(' ')

    return firstName;
}