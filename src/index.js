import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import base, { auth, provider } from './base'

ReactDOM.render(<App base={base} auth={auth} providers={provider} />, document.getElementById('root'))
registerServiceWorker()
