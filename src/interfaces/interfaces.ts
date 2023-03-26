import { RouteProps } from "react-router-dom";

export interface RouterProps {
  component: any;
  path: string;
  caseSensitive?: boolean;
  children?: any
}


