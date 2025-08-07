// =================================================================================================
// ---- App Types ----
// =================================================================================================

import type { Theme } from './user';

export interface AppConfig {
  title: string;
  version: string;
  theme: Theme;
  apiBaseUrl: string;
}

export interface RouteInfo {
  name: string;
  path: string;
  title: string;
  requiresAuth?: boolean;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
