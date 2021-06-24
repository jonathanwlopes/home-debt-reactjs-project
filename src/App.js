import { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import GlobalStyle from './globalStyles'
import { Login, Home } from './pages'

function App() {
  const [user, setUser] = useState(null)

  return (
    <BrowserRouter>
      <GlobalStyle />
      {!!user?.id ? (
        <Switch>
          <Route patch="/" component={Home} exact={true} />
          <Route component={() => <h2>Página não encontrada</h2>} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" component={() => <Login setUser={setUser}></Login>} />
        </Switch>
      )}
    </BrowserRouter>
  )
}

export default App