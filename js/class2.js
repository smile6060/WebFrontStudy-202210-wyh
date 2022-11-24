window.onload = () => {
  consol.log("class2.html: " + localStorage.username);
  // window.alert(localStorage.username);

  const btns = document.querySelectorAll("button");
  btns[0].onclick = () => {
    print();

  }
  brns[ 1 ].onclick = () => {
    history.back();
  }

}