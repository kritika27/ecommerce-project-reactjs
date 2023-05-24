const data = [
    {
      id: "recZkNf2kwmdBcqd0",
      name: "Green Top",
      price: 25,
      image: "https://i.ibb.co/7CQVJNm/blue-tank.png",
      company: "Levis",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      category: "Casual",
      shipping: true,
      amount: 1,
      stock: 4,
      color:["green","red"],
      size:["XS","S","M","L","XL"]
    },
    {
      id: "recEHmzvupvT8ZONH",
      name: "Floral Top",
      price: 60,
      image: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
      company: "Vero Moda",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      category: "Office",
      shipping: true,
      amount: 1,
      stock: 6,
      color:["green","red"],
      size:["XS","S","M","L","XL"]
    },
    {
      id: "rec5NBwZ5zCD9nfF0",
      name: "Floral Dress",
      price: 50,
      image: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
      company: "Only",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      category: "Casual",
      amount: 1,
      stock: 4,
      color:["green","red"],
      size:["XS","S","M","L","XL"]
    },
    {
      id: "recd1jIVIEChmiwhe",
      name: "Red Dress",
      price: 70,
      image: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
      company: "Vero Moda",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      category: "Office",
      shipping: true,
      amount: 1,
      stock: 4,
      color:["green","red"],
      size:["XS","S","M","L","XL"]
    },
    {
      id: "recoM2MyHJGHLVi5l",
      name: "Striped Sweater",
      price: 80,
      image: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
      company: "Only",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      category: "Office",
      shipping: true,
      amount: 1,
      stock: 4,
      color:["green","red"],
      size:["XS","S","M","L","XL"]
    },
    {
      id: "recotY5Nh00DQFdkm",
      name: "Yellow Trouser",
      price: 20,
      image: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
      company: "Only",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      category: "Casual",
      shipping: true,
      amount: 1,
      stock: 4,
      color:["green","red"],
      size:["XS","S","M","L","XL"]
    },
    {
      id: "rec1Ntk7siEEW9ha1",
      name: "White Top",
      price: 40,
      image: "https://i.ibb.co/qBcrsJg/white-vest.png",
      company: "Only",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      category: "Casual",
      shipping: true,
      amount: 1,
      stock: 2,
      color:["green","red"],
      size:["XS","S","M","L","XL"]
    },
    {
      id: "recNZ0koOqEmilmoz",
      name: "Pink Sweatshirt",
      price: 90,
      image: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
      company: "Levis",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      category: "Office",
      shipping: true,
      amount: 1,
      stock: 3,
      color:["green","red"],
      size:["XS","S","M","L","XL"]
    },
    {
      id: "recrfxv3EwpvJwvjq",
      name: "Brown Coat",
      price: 100,
      image: "https://i.ibb.co/M6hHc3F/brown-trench.png",
      company: "Only",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      category: "Office",
      shipping: true,
      amount: 1,
      stock: 4,
      color:["green","red"],
      size:["XS","S","M","L","XL"]
    },
    {
      id: "recoW8ecgjtKx2Sj2",
      name: "Grey Jacket",
      price: 20,
      image: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
      company: "Vero Moda",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. Itaque totam neque, nesciunt consequatur error quasi ipsam accusamus facere!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      category: "Casual",
      amount: 1,
      stock: 5,
      color:["green","red"],
      size:["XS","S","M","L","XL"]
    },
  ];
  export default data;