
export interface ImageUpload {
  file: File | null;    // Aceita File OU null -> resolve o erro de tipo
  name?: string;        // Opcional: nome customizado
  userId?: string;      // Opcional: para associar ao usuário
}