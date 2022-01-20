import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "lib/supabaseClient";

export default function Profile() {
  const [profile, setProfile] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    fetchProfile();
  }, []);

  async function fetchProfile() {
    const profileData = supabase.auth.user();
    if (!profileData) {
      router.push("/sign-in");
    } else {
      setProfile(profileData);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
    router.push("/sign-in");
  }
  if (!profile) return null;

  return (
    <div style={{ maxWidth: "420px", margin: "96px auto" }}>
      <h2>Hello, {profile.email}</h2>
      <p>User ID: {profile.id}</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
