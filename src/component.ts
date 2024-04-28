export type Render<T, P> = T | ((option: P) => T);

type RenderType = <T, P>(element: T | ((params: P) => T), params: P) => T;

export const render: RenderType = (element, params) => {
  return element instanceof Function ? element(params) : element;
};
