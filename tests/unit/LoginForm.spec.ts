import { shallowMount, Wrapper } from '@vue/test-utils';
import LoginForm from '@/components/pages/loginPage/components/LoginForm.vue';

const props = {
    loginRef() {},
};

const getWrapper = (propsData = props): Wrapper<LoginForm> => shallowMount(LoginForm, {
    propsData: {
        ...propsData
    },
});

describe('LoginForm.vue', () => {
    it('renders input id userName', () => {
        const wrapper: Wrapper<LoginForm> = getWrapper();
        const inputField = wrapper.find('input#userName');
        expect(inputField.exists()).toBe(true);
        expect(inputField.isVisible()).toBe(true);
    });
    it('renders input id exampleInputPassword1', () => {
        const wrapper: Wrapper<LoginForm> = getWrapper();
        const inputField = wrapper.find('input#exampleInputPassword1');
        expect(inputField.exists()).toBe(true);
        expect(inputField.isVisible()).toBe(true);
    });
});