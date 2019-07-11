import { shallowMount, Wrapper } from '@vue/test-utils';
import LoginForm from '@/components/pages/loginPage/components/LoginForm.vue';
// import Vue from 'vue';

// const Constructor = Vue.extend(LoginForm);
// const vm = new Constructor().$mount();

const props = {
    loginRef() { },
};

const getWrapperShallow = (propsData = props): Wrapper<LoginForm> => shallowMount(LoginForm, {
    propsData: {
        ...propsData
    },
});

describe('LoginForm.vue', () => {
    it('should match the snapshot', () => {
        const wrapper: Wrapper<LoginForm> = getWrapperShallow();
        expect(wrapper.vm.$el).toMatchSnapshot()
    });
    it('renders input id userName', () => {
        const wrapper: Wrapper<LoginForm> = getWrapperShallow();
        const inputField = wrapper.find('input#userName');
        expect(inputField.exists()).toBe(true);
        expect(inputField.isVisible()).toBe(true);
    });
    it('renders input id exampleInputPassword1', () => {
        const wrapper: Wrapper<LoginForm> = getWrapperShallow();
        const inputField = wrapper.find('input#exampleInputPassword1');
        expect(inputField.exists()).toBe(true);
        expect(inputField.isVisible()).toBe(true);
    });
});