import { supabase } from "../lib/supabase";

export async function loginUser({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        throw new Error(error.message);
    }
    return data;
}
