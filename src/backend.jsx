import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom'
import { configureCounterStore } from '~store'
import Root from './pages/backend'

const store = configureCounterStore()

render(
    <AppContainer>
        <Provider store={store}>
            <Router>
                <Root />
            </Router>
        </Provider>
    </AppContainer>,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept('./pages/backend', () => {
        const RootContainer = require('./pages/backend').default
        render(
            <AppContainer>
                <Provider store={store}>
                    <Router>
                        <RootContainer />
                    </Router>
                </Provider>
            </AppContainer>,
            document.getElementById('root')
        )
    })
}
