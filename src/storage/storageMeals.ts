import { MealProps } from "@/hooks/mealsReducer"
import AsyncStorage from "@react-native-async-storage/async-storage"

const StorageKey = "@dailydiet:meals"

export type StorageMealsProps = {
  data: {
    id: string
    title: string
    description: string
    date: string
    isWithinDiet: boolean
  }[]
  lastId: number
}

export async function getStorageMeals(): Promise<StorageMealsProps> {
  const storage = await AsyncStorage.getItem(StorageKey);

  return storage ? JSON.parse(storage) : {
    data: /* [] as MealProps[], */ meals,
    lastId: /* 0, */ 44
  }
}

export async function percistStorageMeals(meals: StorageMealsProps) {
  AsyncStorage.setItem(StorageKey, JSON.stringify(meals))
}

// Initial meals GPT generation

const meals = [
  { id: "1", title: "Salada de Frango", description: "Salada de frango com folhas verdes e azeite", date: "2024-09-08T12:30:00Z", isWithinDiet: true },
  { id: "2", title: "Pizza de Calabresa", description: "Pizza de calabresa com queijo", date: "2024-09-08T19:45:00Z", isWithinDiet: false },
  { id: "3", title: "Smoothie de Frutas", description: "Smoothie de banana, morango e aveia", date: "2024-09-08T08:15:00Z", isWithinDiet: true },
  { id: "4", title: "Frango Grelhado", description: "Frango grelhado com arroz integral e brócolis", date: "2024-09-07T13:00:00Z", isWithinDiet: true },
  { id: "5", title: "Hambúrguer com Fritas", description: "Hambúrguer artesanal com batatas fritas", date: "2024-09-07T19:30:00Z", isWithinDiet: false },
  { id: "6", title: "Aveia com Mel", description: "Aveia com mel e nozes", date: "2024-09-07T07:45:00Z", isWithinDiet: true },
  { id: "7", title: "Peixe Assado", description: "Peixe assado com legumes no vapor", date: "2024-09-06T12:00:00Z", isWithinDiet: true },
  { id: "8", title: "Lasanha", description: "Lasanha à bolonhesa com queijo parmesão", date: "2024-09-06T19:00:00Z", isWithinDiet: false },
  { id: "9", title: "Omelete", description: "Omelete de claras com espinafre", date: "2024-09-06T07:30:00Z", isWithinDiet: true },
  { id: "10", title: "Salada de Quinoa", description: "Salada de quinoa com abacate e tomate", date: "2024-09-05T13:15:00Z", isWithinDiet: true },
  { id: "11", title: "Sorvete de Chocolate", description: "Sorvete de chocolate com chantilly", date: "2024-09-05T21:00:00Z", isWithinDiet: false },
  { id: "12", title: "Panqueca Integral", description: "Panqueca integral com mel", date: "2024-09-05T08:00:00Z", isWithinDiet: true },
  { id: "13", title: "Wrap de Frango", description: "Wrap de frango com guacamole", date: "2024-09-04T12:45:00Z", isWithinDiet: true },
  { id: "14", title: "Bife à Milanesa", description: "Bife à milanesa com purê de batatas", date: "2024-09-04T20:30:00Z", isWithinDiet: false },
  { id: "15", title: "Tapioca com Frango", description: "Tapioca com recheio de frango desfiado", date: "2024-09-04T08:30:00Z", isWithinDiet: true },
  { id: "16", title: "Ceviche", description: "Ceviche de peixe branco com limão", date: "2024-09-03T13:00:00Z", isWithinDiet: true },
  { id: "17", title: "Pastel de Carne", description: "Pastel de carne com queijo", date: "2024-09-03T18:00:00Z", isWithinDiet: false },
  { id: "18", title: "Suco Verde", description: "Suco verde detox com couve, maçã e gengibre", date: "2024-09-03T09:00:00Z", isWithinDiet: true },
  { id: "19", title: "Sopa de Lentilha", description: "Sopa de lentilha com legumes", date: "2024-09-02T12:30:00Z", isWithinDiet: true },
  { id: "20", title: "Macarrão com Molho Branco", description: "Macarrão com molho branco e bacon", date: "2024-09-02T19:00:00Z", isWithinDiet: false },
  { id: "21", title: "Iogurte com Granola", description: "Iogurte natural com granola e frutas vermelhas", date: "2024-09-02T07:45:00Z", isWithinDiet: true },
  { id: "22", title: "Salada Caprese", description: "Salada caprese com manjericão e tomate", date: "2024-09-01T12:00:00Z", isWithinDiet: true },
  { id: "23", title: "Picanha com Farofa", description: "Picanha grelhada com farofa e vinagrete", date: "2024-09-01T20:00:00Z", isWithinDiet: false },
  { id: "24", title: "Crepioca", description: "Crepioca recheada com cottage", date: "2024-09-01T08:15:00Z", isWithinDiet: true },
  { id: "25", title: "Frango com Batata Doce", description: "Frango grelhado com batata doce", date: "2024-08-31T12:45:00Z", isWithinDiet: true },
  { id: "26", title: "Hot Dog", description: "Cachorro-quente com molho e batata palha", date: "2024-08-31T19:30:00Z", isWithinDiet: false },
  { id: "27", title: "Aveia com Frutas", description: "Aveia com maçã, banana e canela", date: "2024-08-31T08:00:00Z", isWithinDiet: true },
  { id: "28", title: "Salada de Atum", description: "Salada de atum com grão-de-bico e folhas verdes", date: "2024-08-30T13:00:00Z", isWithinDiet: true },
  { id: "29", title: "Espaguete à Carbonara", description: "Espaguete à carbonara com pancetta", date: "2024-08-30T19:45:00Z", isWithinDiet: false },
  { id: "30", title: "Frutas com Iogurte", description: "Iogurte natural com frutas frescas", date: "2024-08-30T09:30:00Z", isWithinDiet: true },
  { id: "31", title: "Sushi de Salmão", description: "Sushi de salmão com arroz japonês", date: "2024-08-29T12:30:00Z", isWithinDiet: true },
  { id: "32", title: "Bolo de Chocolate", description: "Bolo de chocolate com cobertura de brigadeiro", date: "2024-08-29T17:00:00Z", isWithinDiet: false },
  { id: "33", title: "Salada de Frutas", description: "Salada de frutas frescas com hortelã", date: "2024-08-29T08:30:00Z", isWithinDiet: true },
  { id: "34", title: "Churros com Doce de Leite", description: "Churros com recheio de doce de leite", date: "2024-09-06T15:30:00Z", isWithinDiet: false },
  { id: "35", title: "Milkshake de Morango", description: "Milkshake de morango com chantilly", date: "2024-09-05T16:00:00Z", isWithinDiet: false },
  { id: "36", title: "Batata Frita", description: "Porção de batata frita com ketchup", date: "2024-09-03T14:00:00Z", isWithinDiet: false },
  { id: "37", title: "Pudim de Leite", description: "Pudim de leite condensado", date: "2024-09-01T15:00:00Z", isWithinDiet: false },
  { id: "38", title: "Coxinha", description: "Coxinha de frango com catupiry", date: "2024-09-08T16:00:00Z", isWithinDiet: false },
  { id: "39", title: "Brownie com Sorvete", description: "Brownie de chocolate com sorvete de creme", date: "2024-09-07T15:00:00Z", isWithinDiet: false },
  { id: "40", title: "Pizza de Queijo", description: "Pizza de queijo com borda recheada", date: "2024-09-04T19:00:00Z", isWithinDiet: false },
  { id: "41", title: "Donuts", description: "Donuts com recheio de chocolate", date: "2024-09-02T16:30:00Z", isWithinDiet: false },
  { id: "42", title: "Brigadeiro", description: "Brigadeiro de chocolate", date: "2024-08-31T17:00:00Z", isWithinDiet: false },
  { id: "43", title: "Torta de Limão", description: "Torta de limão com merengue", date: "2024-09-06T14:30:00Z", isWithinDiet: false },
  { id: "44", title: "Biscoito Recheado", description: "Biscoito recheado de chocolate", date: "2024-09-05T10:30:00Z", isWithinDiet: false },
];

/*

Salada Caprese
Salada caprese com manjericão e tomate

Brownie com Sorvete
Brownie de chocolate com sorvete de creme

*/