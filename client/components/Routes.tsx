import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Auth from "../screens/Auth"
import About from "../screens/About"
import CreatePlace from "../screens/CreatePlace"
import EditPlace from "../screens/EditPlace"
import Home from "../screens/Home"
import Place from "../screens/Place"
import Places from "../screens/Places"
import User from "../screens/User"
import Users from "../screens/Users"
import { useSelector } from "react-redux"
import { RootStore } from "../redux/store"

interface IRoute {
  name: string
  component: any
}

const Stack = createStackNavigator()

const Routes = () => {
  const {
    auth: { token, user },
  } = useSelector((state: RootStore) => state)

  const reduceMapRoutes = (routes: IRoute[]) => {
    return routes.map(({ name, component }) => (
      <Stack.Screen key={name} name={name} component={component} />
    ))
  }

  const mainRoutes = [
    { name: "Home", component: Home },
    { name: "About", component: About },
    { name: "Place", component: Place },
    { name: "Places", component: Places },
    { name: "User", component: User },
    { name: "Users", component: Users },
  ]

  const adminRoutes = [
    ...mainRoutes,
    { name: "CreatePlace", component: CreatePlace },
    { name: "EditPlace", component: EditPlace },
  ]

  const userRoutes = [...mainRoutes]

  const unRegRouter = [...mainRoutes, { name: "Auth", component: Auth }]

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token ? (
          user.role === "admin" ? (
            <>{reduceMapRoutes(adminRoutes)}</>
          ) : (
            <>{reduceMapRoutes(userRoutes)}</>
          )
        ) : (
          <>{reduceMapRoutes(unRegRouter)}</>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
