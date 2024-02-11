// Write your code below:
function handleFormSubmit(event) {

}
document.addEventListener("DOMContentLoaded", function() {
  // Your existing code for fetching user details and displaying them on the screen
});

function displayUserOnScreen(userDetails) {
  const userItem = document.createElement("li");
  userItem.appendChild(
    document.createTextNode(
      `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
    )
  );

  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  userItem.appendChild(deleteBtn);

  const userList = document.querySelector("ul");
  userList.appendChild(userItem);

  deleteBtn.addEventListener("click", function () {
    deleteUserFromCloud(userDetails._id)
      .then(() => {
        userList.removeChild(userItem);
      })
      .catch(error => console.log(error));
  });
}

function deleteUserFromCloud(userId) {
  return axios.delete("https://crudcrud.com/api/5519d12fca344fd6b10665aea264519d/appointmentData");
}

// Do not touch the code below
module.exports = handleFormSubmit;
