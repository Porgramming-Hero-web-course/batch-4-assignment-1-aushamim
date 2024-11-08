interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (profile: Profile, obj: Partial<Profile>): Profile => {
  return { ...profile, ...obj };
};

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
