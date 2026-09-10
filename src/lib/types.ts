// App API Types

export interface ApiError {
    message: string;
}

export interface ApiResponse<T = any> {
    v: number;
    for?: string;

    data: T;
    error?: ApiError;
    status?: number;
}


export interface DBAppConfig {
    id: string;
}

export interface AccessToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
}
