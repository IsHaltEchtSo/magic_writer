import {render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';


/**
 * Renders a component with a router in context
 * so that links work
 *
 * @param {JSX} jsx The component to be rendered
 * @param {string} route The pathname for the rendered component
 * @return {object} Screen object for the Test
 */
export function renderWithRouterContext(jsx, route = '/') {
  window.history.pushState({}, 'Test page', route);

  return render(jsx, {wrapper: BrowserRouter});
};
