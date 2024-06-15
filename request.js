const httpRequest = async () => {
  try {
    const httpRequest = await fetch("http://localhost:8080/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome: "cas" }),
    });
    const res = await httpRequest.json()
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};


httpRequest()