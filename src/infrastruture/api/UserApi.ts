import ApiInterface from './ApiInterface';

// Definição do tipo para os dados do usuário
interface UserData {
  id: string;
  name: string;
  email: string;
}

class UserApi {
  private readonly baseUrl: string;
  private readonly api: ApiInterface;

  constructor(baseUrl: string, api: ApiInterface) {
    this.baseUrl = baseUrl;
    this.api = api;
  }

  // Função para obter um usuário pelo ID
  async getUserById(userId: string): Promise<UserData> {
    return await this.api.get<UserData>(`${this.baseUrl}/users/${userId}`);
  }

  // Função para criar um novo usuário
  async createUser(userData: UserData): Promise<UserData> {
    return await this.api.post<UserData>(`${this.baseUrl}/users`, userData);
  }

  // Função para atualizar um usuário existente
  async updateUser(userId: string, userData: UserData): Promise<UserData> {
    return await this.api.put<UserData>(`${this.baseUrl}/users/${userId}`, userData);
  }

  // Função para deletar um usuário
  async deleteUser(userId: string): Promise<void> {
    await this.api.delete<void>(`${this.baseUrl}/users/${userId}`);
  }
}

export default UserApi;
