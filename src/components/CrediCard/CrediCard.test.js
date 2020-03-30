import React from 'react'
import { mount } from 'enzyme'
import CrediCard from './'

describe('CrediCard Component', () => {
  const wrapper = mount(<CrediCard />)

  it('Render component', () => {
    expect(wrapper.length).toEqual(1)
  })
})