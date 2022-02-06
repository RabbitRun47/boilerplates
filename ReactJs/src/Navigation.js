import { createBrowserHistory} from 'history';
const History = createBrowserHistory();
export default History;

export const NavigateToNewPage = (route) => {
  if (History.location.pathname !== route) {
    NavigateToPage(route);
  }
}

export const NavigateToPage = (route) => {
  History.push(route);
}