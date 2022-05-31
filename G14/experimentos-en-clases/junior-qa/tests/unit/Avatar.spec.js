import { shallowMount } from '@vue/test-utils';
import Avatar from '@/components/Avatar.vue';

describe('Avatar.vue', () => {
  it('should mount correctly', () => {
    const componente = shallowMount(Avatar);
    expect(componente.vm).toBeTruthy();
  });

  it('should show name prop on paragraph tag', () => {
    const componente = shallowMount(Avatar, {
      propsData: {
        nombre: 'John Doe',
      },
    });
    expect(componente.find('p').text()).toBe('John Doe');
  })
});
