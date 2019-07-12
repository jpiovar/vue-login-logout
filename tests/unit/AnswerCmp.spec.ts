import { shallowMount, Wrapper } from '@vue/test-utils';
import AnswerCmp from '@/components/pages/quoraPage/components/components/AnswerCmp.vue';

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

describe('AnswerCmp.vue', () => {
    it('should match the snapshot', () => {
        const wrapper: Wrapper<AnswerCmp> = getWrapperShallow();
        expect(wrapper.vm.$el).toMatchSnapshot()
    });
    it('renders card-header', () => {
        const wrapper: Wrapper<AnswerCmp> = getWrapperShallow();
        const cardHeader = wrapper.find('.card-header');
        expect(cardHeader.exists()).toBe(true);
        expect(cardHeader.isVisible()).toBe(true);
    });
    it('renders card-body', () => {
        const wrapper: Wrapper<AnswerCmp> = getWrapperShallow();
        const cardBody = wrapper.find('.card-body');
        expect(cardBody.exists()).toBe(true);
        expect(cardBody.isVisible()).toBe(true);
    });
    it('renders component id with correct string', () => {
        const wrapper: Wrapper<AnswerCmp> = getWrapperShallow();
        expect(wrapper.attributes().id).toBe('a12');
    });
});