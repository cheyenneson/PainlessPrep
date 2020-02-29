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
        },
        switchToInput() {
            this.loading = true;
        }
    },
    computed: {},
});

function myFunction() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
