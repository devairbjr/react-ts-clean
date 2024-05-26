import ApiInterface from "../api/ApiInterface";
import UserRepository  from "../../domain/repositories/UserRepository";
import { User } from "../../domain/entities/User";
class UserRepositoryImpl implements UserRepository {
    private api: ApiInterface;
  
    constructor(api: ApiInterface) {
      this.api = api;
    }
  
    async getUserById(userId: string): Promise<User> {
      return await this.api.get<User>(`/users/${userId}`);
    }
  
    async createUser(userData: User): Promise<User> {
      return await this.api.post<User>('/users', userData);
    }
  
    async updateUser(userId: string, userData: User): Promise<User> {
      return await this.api.put<User>(`/users/${userId}`, userData);
    }
  
    async deleteUser(userId: string): Promise<void> {
      await this.api.delete<void>(`/users/${userId}`);
    }
  }
  
  export default UserRepositoryImpl;