import supabase from "./supabase";

export async function userLogin({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);

  return data;
}

export async function authGoogle() {
  supabase.auth.signInWithOAuth({
    provider: "google",
  });
}

export async function resetPassword(password) {
  const { data, error } = await supabase.auth.updateUser({
    password: password,
  });
  if (error) throw new Error(error.message);
  return data;
}

export async function sendLink(email) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.href}reset`,
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function register({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName: fullName,
        avatar: "",
      },
    },
  });
  console.log(fullName);
  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(Error.message);
}
