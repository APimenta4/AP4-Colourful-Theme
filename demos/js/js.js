class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.isActive = true;
  }

  deactivate() {
    this.isActive = false;
    console.log(`${this.username} has been deactivated.`);
  }

  getProfile() {
    return {
      name: this.username,
      status: this.isActive ? "Active" : "Inactive",
    };
  }
}

function processUsers(userList) {
  const activeCount = userList.filter((u) => u.isActive).length;
  console.log(`Processing ${activeCount} active users.`);
}

const main = () => {
  const users = [
    new User("alice_dev", "alice@example.com"),
    new User("bob_codes", "bob@example.com"),
  ];

  users[1].deactivate();

  for (const user of users) {
    const profile = user.getProfile();
    console.log(`User: ${profile.name} | Status: ${profile.status}`);
  }

  processUsers(users);
};

main();
