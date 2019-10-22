
export const updateObject = (users, propsObject, actionProps, newProps) => {
   return users.map(u =>
    u[propsObject] === actionProps ? {...u, ...newProps} : u)
}
