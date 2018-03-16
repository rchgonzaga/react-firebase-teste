import React from 'react'
import NewComment from './NewComment'

import { shallow, mount, render } from 'enzyme'

describe('<NewComment />', () => {

  const postNewCommentMock = jest.fn()

  it('renders without crashing', () => {
    const wrapper = shallow(<NewComment postNewComment={postNewCommentMock} />)
    expect(wrapper.length).toBe(1)
  })

  it('it handles enter key event', () => {
    const wrapper = mount(<NewComment postNewComment={postNewCommentMock} />)
    const eventMock  = {
      preventDefault: jest.fn(),
      keyCode: 13
    }
    wrapper.instance().refs.comment.value = 'test'
    wrapper.instance().handleEnter(eventMock)
    expect(eventMock.preventDefault.mock.calls.length).toBe(1)
    expect(postNewCommentMock.mock.calls.length).toBe(1)
    expect(postNewCommentMock.mock.calls[0][0].comment).toBe('test')
    expect(wrapper.instance().refs.comment.value).toBe('')

  })

})


