import { type ReactElement } from "react"

export function bindProps<Props extends object, BoundKeys extends keyof Props>(
    Component: (props: Props) => ReactElement, // функция принимает компонент
    BoundProps: { [K in BoundKeys]: Props[K] }, // принимает объектом пропсы
    displayName?: string
) { // рендерит компонент и запрещает передавать те пропсы, 
    // которые были переданный в данный HOC
    function ResFunc(newProps: Omit<Props, BoundKeys>) {
        // @ts-expect-error:next-line
        const props: Props = {...BoundProps, ...newProps}; 
        return <Component {...props} /> 
    }

    ResFunc.displayName = displayName ?? Component.name + "WithProps";

    return ResFunc
}
