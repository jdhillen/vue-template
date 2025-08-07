// =================================================================================================
// ---- Types Index ----
// =================================================================================================

// Re-export all types from organized modules
export * from './api';
export * from './user';
export * from './app';

// Global utility types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type ID = string | number;
