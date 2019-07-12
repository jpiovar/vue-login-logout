import { shallowMount, mount, Wrapper, createLocalVue } from '@vue/test-utils';
import LoginPage from '@/components/pages/loginPage/LoginPage.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

const actions = {
    loginUser: jest.fn(),
    storeQuoraData: jest.fn()
};

const store = new Vuex.Store({
    actions
});

const props = {
    author: 'Juraj Piovar',
};

const getWrapperShallow = (propsData = props): Wrapper<LoginPage> => shallowMount(LoginPage, {
    propsData: {
        ...propsData
    },
});

const getWrapperMount = (propsData = props): Wrapper<LoginPage> => mount(LoginPage, {
    propsData: {
        ...propsData
    },
    stubs: ['LoginForm']
});

describe('LoginPage.vue', () => {
    it('should match the snapshot', () => {
        const wrapper: Wrapper<LoginPage> = getWrapperShallow();
        expect(wrapper.vm.$el).toMatchSnapshot()
    });
    it('renders footer exists and visible', () => {
        const wrapper: Wrapper<LoginPage> = getWrapperShallow();
        const spanFooter = wrapper.find('span#footer');
        expect(spanFooter.exists()).toBe(true);
        expect(spanFooter.isVisible()).toBe(true);
    });
    it('renders footer with correct text', () => {
        const wrapper: Wrapper<LoginPage> = getWrapperShallow();
        const spanFooter = wrapper.find('span#footer');
        const year = '2019';
        expect(spanFooter.text()).toBe(`${props.author} @ ${year}`);
    });
    it('renders component id and footer with correct text', () => {
        const wrapper: Wrapper<LoginPage> = getWrapperShallow();
        const mockData = { 'idComponent': 'loginPageIdComponent', 'year': '07/2019' };
        wrapper.setData(mockData); // sets component's data/instance attributes id, year with mock values
        const spanFooter = wrapper.find('span#footer');
        expect(wrapper.attributes().id).toBe('loginPageIdComponent'); // checks if component's DOM id is equal to value of set component's data/instance attribute id
        expect(spanFooter.text()).toBe(`${props.author} @ 07/2019`);
    });
    // it('calls store action "loginUser" when login submit button "loginForm" is clicked and "loginHandle" called', () => {
    //     const wrapper: any = mount(LoginPage, { propsData: { ...props}, store, localVue });
    //     // spyOn(wrapper.vm, 'loginHandle');
    //     // wrapper.find("form").trigger("submit.prevent");
        

    //     wrapper.vm.loginHandle({name: 'janko', password: 'janko'});
    // //     // expect(actions.storeQuoraData).toHaveBeenCalled();
    //     expect(actions.loginUser).toHaveBeenCalled();
    //     // expect(wrapper.vm.loginHandle).toHaveBeenCalled();
        
    //     expect(wrapper.vm.loginHandle).toHaveBeenCalled();
    // });
});