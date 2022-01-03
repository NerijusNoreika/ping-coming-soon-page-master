
new Vue({
    el: '#app',
    data: {
        input: '',
        errors: false,
    },
    methods: {
        submit(e) {
            let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            let test = re.test(this.input);
            if (!test) {
                this.errors = true;
            }
        },
        change() {
            this.errors = false;
        }
    }
})
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     let test = re.test(input.value);
//     if (!test) {
//         input.classList.add('error');
//         error.classList.add('error');
//     }
// });

// input.addEventListener('input', () =>  {
//     input.classList.remove('error');
//     error.classList.add('error');
// })