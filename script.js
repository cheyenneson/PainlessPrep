let app = new Vue({
    el: '#app',
    data: {
        ingredient: {
            item: '',
            quantity: '',
            preferred_brand: ''
        },
        ingredients: [],
        addedItem: '',
        addedQuantity: '',
        addedBrand: '',
        loading: true,

    },
    methods: {
        addItem() {
            this.ingredients.push({
                item: this.addedItem,
                quantity: this.addedQuantity,
                preferred_brand: this.addedBrand
            });
            this.addedItem = '';
            this.addedQuantity = '';
            this.addedBrand = '';
        },
        switchToResults() {
            this.loading = false;
        }
    },
    computed: {},
});
