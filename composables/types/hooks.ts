

export interface ApiResponse {
  data?: any;  // Remplacez `any` par le type réel de votre réponse
  response?: any;
  message: string; 
  code: number;
}




export interface ApiError {
  message: string;
  code?: number;  // Optionnel, selon la structure de votre erreur
}

// Définir les types des paramètres de useFetching

export interface UseFetchingParams {
  uri: string;
  methods?: 'GET' | 'POST' | 'PUT' | 'DELETE';  // Ajoutez d'autres méthodes HTTP si nécessaire
  header?: Record<string, string> ;
  body?: any| null;  // Remplacez `any` par le type réel de votre body si connu
  success?: (res: ApiResponse) => void | Promise<void> ;
  error?: (err: ApiError) => void;
  resType?:string
}

