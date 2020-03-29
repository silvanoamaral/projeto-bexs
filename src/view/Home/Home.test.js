import React from 'react'
import { mount } from 'enzyme'
import Home from './'

describe('Home Component', () => {
  const wrapper = mount(<Home />)

  it('Render component', () => {
    expect(wrapper.length).toEqual(1)
  })
})