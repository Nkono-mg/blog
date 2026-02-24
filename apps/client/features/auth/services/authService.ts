export async function AuthService(data: any) {
  const response = await fetch("http://localhost:5000/api/users/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la création du compte");
  }
  return response.json();
}
