import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { MainPage } from './pages/mainPage'


export const useRouts = () => {
    return(
        <Switch>
            <Route path="/" exact>
                <MainPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}