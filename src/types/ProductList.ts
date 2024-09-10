//商品リスト（ダミーデータ）のインターフェース
interface Product {
  id: number
  name: string
  image: string
  price: number
  size: string[]
  stock: number
  gender: string[]
  descriotion: string
}

//ダミーデータを作成
const product: Product[] = [
  {
    id: 1,
    name: 'Outer',
    image: '@/assets/images/Outer.jpeg',
    price: 50000,
    size: ['S', 'M', 'L', 'XL'],
    stock: 60,
    gender: ['male', 'female', 'unisex'],
    descriotion: 'This is Outer!'
  },
  {
    id: 2,
    name: 'T-Shirt',
    image: '@/assets/images/T-Shirts.jpeg',
    price: 10000,
    size: ['L', 'XL'],
    stock: 50,
    gender: ['unisex'],
    descriotion: 'This is T-shirts!'
  },
  {
    id: 3,
    name: 'Shirt',
    image: '@/assets/images/Outer.jpeg',
    price: 15000,
    size: ['L', 'XL'],
    stock: 40,
    gender: ['unisex'],
    descriotion: 'This is Shirts!'
  },
  {
    id: 4,
    name: 'Cap',
    image: '@/assets/images/Cap.jpeg',
    price: 8000,
    size: ['M', 'L'],
    stock: 30,
    gender: ['unisex'],
    descriotion: 'This is Cap!'
  },
  {
    id: 5,
    name: 'Jeans',
    image: '@/assets/images/Jeans.jpeg',
    price: 40000,
    size: ['S', 'M', 'L', 'XL'],
    stock: 20,
    gender: ['male', 'female', 'unisex'],
    descriotion: 'This is Jeans!'
  },
  {
    id: 6,
    name: 'Socks',
    image: '@/assets/images/Socks.jpeg',
    price: 50000,
    size: ['S', 'M', 'L', 'XL'],
    stock: 10,
    gender: ['male', 'female', 'unisex'],
    descriotion: 'This is Socks!'
  }
]
