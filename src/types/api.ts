// =================================================================================================
// ---- API Types ----
// =================================================================================================

export interface ApiResponse<T = unknown> {
  data: T;
  message: string;
  success: boolean;
  errors?: string[];
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta: {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
  };
}

export interface ApiError {
  message: string;
  code: string;
  statusCode: number;
}
