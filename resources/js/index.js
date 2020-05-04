Vue.component('login-component', require('./components/LoginComponent.vue').default);

export const routes = [
    { path: '/logincustom', name: 'Login', component: LoginComponent },
];
