import Login from "../pages/Login";
import Event from "../pages/Event";

export interface IRoute {
  path: string;
  element: React.ComponentType;
}

export enum RouteNames {
  Login = "/login",
  Event = "/",
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.Login, element: Login },
];

export const privatRoutes: IRoute[] = [
  { path: RouteNames.Event, element: Event },
];
