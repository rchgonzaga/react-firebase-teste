import React from 'react'
import Comments from './Comments'

import { shallow, mount, render } from 'enzyme'

describe('<Comments />', () => {

  const commentsMock = {
    1: {
      'comment': 'First comment'
    },
    2: {
      'comment': 'Second comment'
    }
  }

  it('renders without crashing', () => {
    const wrapper = shallow(<Comments comments={commentsMock} />)
    expect(wrapper.length).toBe(1)
    expect(wrapper.find('Comment').length).toBe(2)
    //expect(wrapper.text()).toBe(commentsMock.comments)
  })

})


