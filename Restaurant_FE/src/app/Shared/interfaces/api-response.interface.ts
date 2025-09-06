export interface ApiResponse<T> {
  statusCode: number;
  status: string;
  message: string;
  data: T;
  timestamp: string;
  path?: string;
  errors?: string[];
}

export interface AuthenticationResponse {
  jwt: string;
  userRole: string;
  userId: number;
}

export interface UserDto {
  id: number;
  name: string;
  email: string;
  userRole: string;
}

export interface CategoryDto {
  id: number;
  name: string;
  description: string;
  img: string;
}
