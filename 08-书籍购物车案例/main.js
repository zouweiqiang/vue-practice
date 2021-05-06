const app = new Vue ({
  el:'#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        data: '2006-2',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        data: '2006-8',
        price: 65.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        data: '2006-1',
        price: 89.00,
        count: 1
      },
      {
        id: 4,
        name: '《数据结构与算法分析》',
        data: '2006-2',
        price: 75.00,
        count: 1
      },
    ]
  },
  methods: {
    // getFinalPrice (price) {
    //   return '￥' + price.toFixed(2)
    // }
    increment (index) {
      this.books[index].count --
    },
    decrement (index) {
      this.books[index].count ++
    },
    removeHandle (index) {
      this.books.splice(index,1)
    },
  },
  filters: {
    showPrice (price) {
      return '￥' + price.toFixed(2)
    }
  },
  computed: {
    TotalPrice () {
      // let TotalPrice = 0;
      // for (let i = 0; i < this.books.length;i++){
      //   TotalPrice += this.books[i].price * this.books[i].count;
      // }
      // return TotalPrice;
      return this.books.reduce(function (preValue, book) {
        return preValue + book.price * book.count
      },0)
    }
  }
})