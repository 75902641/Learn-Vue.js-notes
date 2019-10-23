var app = new Vue({
	el:'#app',
	data:{
		list: [
			{
				id: 1,
				name: 'iphone7',
				price: '6188',
				count: 1
			},
			{
				id: 2,
				name: 'pad pro',
				price: '5888',
				count: 1
			},
			{
				id: 3,
				name: 'macbookpro',
				price: '21000',
				count:2
			}
		]
	},
	computed:{
		totalPrice: function(){
			var total = 0;
			for (var i = 0; i < this.list.count; i++){
				var item = this.list[i];
				total += item.price * item.count;
			}
			return total.toString().replace(/\B (?= (\d{3} )+$)/g, ',');
		}
	},
	methods:{
		handleReduce: function (index){
			if (this.list[index].count === 1) return;
			this.list[index].count--;
		},
		handleAdd: function (index){
			this.list[index].count++;
		},
		handleRemove: function(index){
			this.list.splice(index,1);
		}
	}
})