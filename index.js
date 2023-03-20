const name = document.getElementById("name");
const email = document.getElementById("email");
const project = document.getElementById("project");
const messages = document.getElementById("messages");
const btn = document.getElementById("btn");
const submitDitails = async () => {
  if (
    name.value == "" ||
    email.value == "" ||
    project.value == "" ||
    messages.value == ""
  ) {
    alert("Please Enter something");
  } else {
    const data = {
      name: name.value,
      email: email.value,
      project: project.value,
      messages: messages.value,
    };
    await fetch(
      "https://portfollio-756eb-default-rtdb.firebaseio.com/user.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        alert("Message Sent Succesfully..!!");
        return data;
        //   console.log("Success:", data);
      })
      .catch((error) => {
        alert(error.messages);
        //   console.log("Error:", error);
      });
  }
};
btn.addEventListener("click", submitDitails);
