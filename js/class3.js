window.onload = () => {
  const btns = document.querySelectorAll("button");

  btns[0].onclick = () => {
    location.href = "http://www.naver.com";
  }

  brns[1].onclick = () => {
    const urlInput = document.querySelector("input");
    urlInput.value = location.pathname;
  }

  btns[2].onclick = () => {
    location.reload();
  }

  /* replace는 history를 남기지 않는다. 뒤로가기 안됨. */
  brns[3].onclick = () => {
    location.replace("https://www.google.com")
  }
}