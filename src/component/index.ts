export type Render<T, P> = T | ((option: P) => T);

/**
 * Renders an element by either invoking it as a function with the provided parameters,
 * or returning it directly if it is not a function.
 *
 * @param element - The element to render.
 * @param params - The parameters to pass to the element if it is a function.
 * @returns The rendered element.
 *
 * @example
 * // Render a React component
 * const component = (props) => <div>{props.text}</div>;
 * const renderedComponent = render(component, { text: 'Hello, World!' });
 * // Output: <div>Hello, World!</div>
 *
 * // Render a plain HTML element
 * const element = <div>Hello, World!</div>;
 * const renderedElement = render(element, {});
 * // Output: <div>Hello, World!</div>
 */
export function render<T, P>(element: T | ((params: P) => T), params: P): T {
  return element instanceof Function ? element(params) : element;
}
