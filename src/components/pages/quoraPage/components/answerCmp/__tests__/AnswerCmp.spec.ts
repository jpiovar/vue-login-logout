import { shallowMount, Wrapper } from '@vue/test-utils';
import AnswerCmp from '../AnswerCmp.vue';

const props = {
    index: 12,
    itemData: {id: 'a12'},
    qId: 'q12'
};

const getWrapperShallow = (propsData = props): Wrapper<AnswerCmp> => shallowMount(AnswerCmp, {
    propsData: {
        ...propsData
    },
});

let wrapper: Wrapper<AnswerCmp>;

describe('AnswerCmp.vue', () => {
    beforeEach(() => {
        wrapper = getWrapperShallow();
    });
    it('should match the snapshot', () => {
        // const wrapper: Wrapper<AnswerCmp> = getWrapperShallow();
        expect(wrapper.vm.$el).toMatchSnapshot()
    });
    it('renders card-header and card-body', () => {
        // const wrapper: Wrapper<AnswerCmp> = getWrapperShallow();
        const cardHeader = wrapper.find('.card-header');
        const cardBody = wrapper.find('.card-body');
        expect(cardHeader.exists()).toBe(true);
        expect(cardHeader.isVisible()).toBe(true);
        expect(cardBody.exists()).toBe(true);
        expect(cardBody.isVisible()).toBe(true);
    });
    it('renders component id with correct string', () => {
        // const wrapper: Wrapper<AnswerCmp> = getWrapperShallow();
        expect(wrapper.attributes().id).toBe(props.itemData.id);
    });
});