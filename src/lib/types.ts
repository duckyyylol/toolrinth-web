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