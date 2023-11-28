import supabase from '../../supabase'

export async function signupUser({
  email,
  password,
  firstName,
  lastName,
  number,
  address,
}) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        firstName,
        lastName,
        number,
        address,
      },
    },
  })
  if (error) {
    console.error(error.message)
    throw new Error(error.message)
  }
  return { data }
}

export async function editUser({
  firstName,
  lastName,
  number,
  email,
  address,
}) {
  const { data, error } = await supabase.auth.updateUser({
    data: { firstName, lastName, number, email, address },
  })
  if (error) {
    console.error(error.message)
    throw new Error(error.message)
  }

  return { data }
}

export async function signinUser({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  if (error) {
    console.error(error.message)
    throw new Error(error.message)
  }

  return { data }
}

export async function signoutUser() {
  const { data, error } = await supabase.auth.signOut()

  if (error) {
    console.error(error.message)
    throw new Error(error.message)
  }
  return { data }
}

export async function getCurrentUser() {
  const { data, error } = await supabase.auth.getSession()

  if (error) {
    console.error(error.message)
    throw new Error("Can't get the user")
  }
  return { data }
}
