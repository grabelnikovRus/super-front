import { type PluginItem } from "@babel/core";

export function RemovePropsPlugin(): PluginItem {
    return {
      visitor: {
        Program(path, state) { // глобальное имя, чтобы обратиться к опциям
            const forbidden = state.opts?.props || []
            path.traverse({ // метод для обхода ноды
                JSXIdentifier(current) { // jsx идентификатор, ищет атрибуты ноды
                    if (forbidden.includes(current.node.name)) current.parentPath.remove()
                }
            })
        }
      },
    };
  }