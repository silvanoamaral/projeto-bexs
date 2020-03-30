import React from 'react'
import { mount } from 'enzyme'
import { renderHook } from '@testing-library/react-hooks'

import Cadastro from './'

describe('Cadastro Component', () => {
  const state = {errors:'hello', lastname:'world'}
  const wrapper = mount(<Cadastro />)

  it('Render component', () => {
    expect(wrapper.length).toEqual(1)
  })
})