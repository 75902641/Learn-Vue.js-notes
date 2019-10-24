var app = new Vue({
	el:'#app',
	data:{
		list: [
			{
				id: 1,
				name: 'iphone7',
				price: 6188,
				count: 1,
				select:0
			},
			{
				id: 2,
				name: 'pad pro',
				price: 5888,
				count: 1,
				select:0
				
			},
			{
				id: 3,
				name: 'macbookpro',
				price: 21000,
				count:2,
				select:0
			}
		]
	},
	computed:{
		totalPrice: function(){
			var total = 0;
			for (var i = 0; i < this.list.length; i++){
				var item = this.list[i];
				if (item.select === 1){
					total += item.price * item.count;
				}
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
		},
		handleCheckBox: function(index){
			if (this.list[index].select === 1){
				this.list[index].select = 0;
			}else{
				this.list[index].select = 1;
			}			
			this.totalPrice;
		}
	}
})