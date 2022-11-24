// let user = {
//     username: "junil",
//     password: "1234"
// };

class User {
  #username;
  #password;
  #name;
  #email;

  // 생성자 constructor() {}
  constructor(username, password, name, email) {
    this.username = username;
    this.password = password;
    this.name = name;
    this.email = email;
  }

  printName () {
    console.log(this.name + "님의 정보");
  }

}
  // setUsername (username) {
  //   this.#username = username;
  // }
  // getUsername () {
  //   return this.#username;
  // }

class UserMain {
  /*싱글톤 #붙은건 private*/
  static #instance = null;
  static geInstance () {
    if (this.#instance == null) {
      this.#instance = new UserMain();
    }
    return this.#instance;
  }

  main () {
    let user = new User("junil", "1234", "김준일", "skjil12218@gmail.com");

    // user.username = "junil";
    // user.password = "1234";
    // user.name = "김준일";
    // user.email = "skjil12218@gmail.com";

    console.log(user);

    localStorage.username = user.username;

    console.log("username: " + localStorage.username);

    user.printName();
  }
  
}

window.onload = () => {
  let userMain =UserMain.geInstance();

  userMain.main();
}