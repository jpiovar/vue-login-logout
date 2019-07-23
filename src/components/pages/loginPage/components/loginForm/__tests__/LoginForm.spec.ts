import { shallowMount, mount, Wrapper } from '@vue/test-utils';
import LoginForm from '@/components/pages/loginPage/components/loginForm/LoginForm.vue';
import Vue from 'vue';

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

const getWrapperMount = (propsData = props): Wrapper<LoginForm> => mount(LoginForm, {
    propsData: {
        ...propsData
    },
});

let wrapper: any;

describe('LoginForm.vue', () => {
    beforeEach(() => {
        wrapper = getWrapperShallow();
    });
    it('should match the snapshot', () => {
        // const wrapper: Wrapper<LoginForm> = getWrapperShallow();
        expect(wrapper.vm.$el).toMatchSnapshot()
    });
    it('renders input id userName', () => {
        // const wrapper: Wrapper<LoginForm> = getWrapperShallow();
        const inputField = wrapper.find('input#userName');
        expect(inputField.exists()).toBe(true);
        expect(inputField.isVisible()).toBe(true);
    });
    it('renders input id exampleInputPassword1', () => {
        // const wrapper: Wrapper<LoginForm> = getWrapperShallow();
        const inputField = wrapper.find('input#exampleInputPassword1');
        expect(inputField.exists()).toBe(true);
        expect(inputField.isVisible()).toBe(true);
    });
    it('calls method loginFormM after form submit done', () => {
        // const wrapper: any = getWrapperShallow();
        const spyLoginFormM = jest.spyOn(wrapper.vm, 'loginFormM');
        wrapper.setMethods({ loginFormM: spyLoginFormM });
        expect(wrapper.vm.lf).toBe('');
        wrapper.find("form").trigger("submit.prevent");
        expect(wrapper.vm.loginFormM).toHaveBeenCalled();
        expect(wrapper.vm.lf).toBe('ok');
    });
    it('calls method loginFormM after form submit button clicked', () => {
        // const wrapper: any = getWrapperShallow();
        const wrapper: any = shallowMount(LoginForm, {
            propsData: {
                loginRef() { },
            },
            attachToDocument: true
        });

        // create a spy on the instance method
        const spyLoginFormM = jest.spyOn(wrapper.vm, 'loginFormM');
        // replace the instance method with the spy
        wrapper.setMethods({ loginFormM: spyLoginFormM });

        expect(wrapper.vm.lf).toBe('');
        wrapper.find('form button[type="submit"]').trigger('click');
        expect(wrapper.vm.lf).toBe('ok');
        expect(wrapper.vm.loginFormM).toHaveBeenCalled();

        // remove the spy
        spyLoginFormM.mockReset();
    });
});