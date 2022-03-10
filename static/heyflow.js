let heyflow = (flowId, divId) => {

  if (localStorage.getItem("reloaded")) {
    // The page was just reloaded. Clear the value from local storage
    // so that it will reload the next time this page is visited.
    localStorage.removeItem("reloaded");
  } else {
    // Set a flag so that we know not to reload the page twice.
    localStorage.setItem("reloaded", "1");
    location.reload();
  }

  let deploy = document.getElementById(divId);

  let niroflow = document.createElement("heyflow");
  niroflow.setAttribute("flow-id", flowId);
  niroflow.setAttribute("width", "500px");
  niroflow.setAttribute("pass-parameters", "true");
  niroflow.setAttribute("dynamic-height", "true");

  deploy.appendChild(niroflow);
}
