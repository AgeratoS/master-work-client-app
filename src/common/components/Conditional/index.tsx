import { ConditionalProps } from "@/common/types";
/**
 * Компонент-обертка: в декларативном виде определяет, что отрисовывать
 * в зависимости от условия. Часто встречающийся паттерн в React, поэтому
 * удобнее логику вынести в отдельный компонент.
 * @param props Properties
 * @returns Component
 */
function Conditional(props: ConditionalProps) {
    if (props.data) {
        return props.onTrue();
    }

    else {
        if (props.onFalse) {
            return props.onFalse();
        }
        else {
            return null;
        }
    }
}

export default Conditional;