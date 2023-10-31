interface shadowGeneratorProps {
    value: number
}

export function shadowGenerator({ value }: shadowGeneratorProps) {
    return {
        shadowColor: '#000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.7, elevation: value
    }
}