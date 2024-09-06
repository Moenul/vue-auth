import axios from 'axios';
import { reactive, computed, ref } from 'vue';
import router from '../router';

const state = reactive({
    authenticated: false,
    user: {}
});

export default function useAuth(){

    const errors = ref({
        email: '',
        password: '',
        message: ''
    });

    const getAuthenticated = computed(() => state.authenticated);
    const getUser = computed(() => state.user);

    const setAuthenticated = (authenticated) => {
        state.authenticated = authenticated
    }
    const setUser = (user) => {
        state.user = user
    }

    const attempt = async() => {
        try{
            let response = await axios.get('/api/user');
            setAuthenticated(true);
            setUser(response.data);

            return response
        } catch(e){
            setAuthenticated(state.authenticated = false);
            setUser(state.user = {});
        }
    }

    const login = async (credential) => {
        try {
            await axios.get('/sanctum/csrf-cookie');
            await axios.post('/login',{
                email: credential.email,
                password: credential.password
            });
            await attempt()

            await router.push('/');
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }else if(e.response.status === 429){
                errors.value.message = e.response.data.message
            }
        }
    }

    const logout = async() => {
        try {
            await axios.post('/logout');

            setAuthenticated(state.authenticated = false);
            setUser(state.user = {});

            await router.push('/login');
        } catch (e) {
            console.log(e);
        }
    }

    return {
        login, 
        getUser,
        getAuthenticated,
        attempt,
        errors,
        logout
    }
}