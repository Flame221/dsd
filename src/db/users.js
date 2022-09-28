export const data = {
  username: 'admin',
  password: 'password',
}

export const isUserExists = (user) => {
  return data.username === user.username && data.password === user.password
}