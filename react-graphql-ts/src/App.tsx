import React from 'react'
import './App.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import { Person } from './pages/Person'

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/person/:id"><Person /></Route>
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App
