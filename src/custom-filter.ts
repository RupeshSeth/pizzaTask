import { Vue } from 'vue-property-decorator';


export default class CustomFilters {
	public static setup() {
		this.withBase();
		this.toCurrency();
	}

	private static withBase() {
		Vue.filter('withBase', (value: string) => {
			// console.log('I am in custom filter: withBase : ');
			// console.log(process.env.BASE_URL);
			return process.env.BASE_URL + value;
		});
	}
	
	private static toCurrency() {
		Vue.filter('toCurrency', (value: number) => {
			if (typeof value !== 'number') {
				return value;
			}
			const formatter = new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'INR',
				minimumFractionDigits: 0
			});
			return formatter.format(value);
		});
	}



	
    
}
