import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Auth from "../screens/Auth"
import About from "../screens/About"
import PlaceCreate from "../screens/PlaceCreate"
import PlaceEdit from "../screens/PlaceEdit"
import Home from "../screens/Home"
import Place from "../screens/Place"
import Places from "../screens/Places"
import User from "../screens/User"
import UserEdit from "../screens/UserEdit"
import Users from "../screens/Users"
import { useSelector } from "react-redux"
import { RootStore } from "../redux/store"

interface IRoute {
  name: string
  component: any
  title: string
}

const Stack = createStackNavigator()

const Routes = () => {
  const {
    auth: { token, user },
  } = useSelector((state: RootStore) => state)

  const reduceMapRoutes = (routes: IRoute[]) => {
    return routes.map(({ name, component, title }) => (
      <Stack.Screen
        key={name}
        name={name}
        component={component}
        options={{
          title,
          headerStyle: {
            backgroundColor: "#5a82f8",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    ))
  }

  const mainRoutes = [
    { name: "Home", component: Home, title: "Home" },
    { name: "About", component: About, title: "About" },
    { name: "Place", component: Place, title: "Place" },
    { name: "Places", component: Places, title: "All Places" },
    { name: "User", component: User, title: "Profile" },
    { name: "Users", component: Users, title: "All Users" },
  ]

  const adminRoutes = [
    ...mainRoutes,
    { name: "PlaceCreate", component: PlaceCreate, title: "Create Place" },
    { name: "PlaceEdit", component: PlaceEdit, title: "Edit Place" },
    { name: "UserEdit", component: UserEdit, title: "Edit User" },
  ]

  const userRoutes = [
    ...mainRoutes,
    { name: "UserEdit", component: UserEdit, title: "Edit User" },
  ]

  const unRegRouter = [
    ...mainRoutes,
    { name: "Auth", component: Auth, title: "Authorization" },
  ]

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
