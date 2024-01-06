// If user-agent is suspected to be ChromeOS the user will be sent back to index.html
// if not they will continue to be redirected to /user-agent/index.html
import { authFunction } from "../auth/auth-script";

if (document.cookie.split(";").some((item) => item.trim().startsWith("handlerVisited="))) {
  console.log("User is using ChromeOS... ACCESS GRANTED");
} else {
  const userAgent = navigator.userAgent;

  if (userAgent.includes("CrOS")) {
    // Set the handlerVisited cookie
    document.cookie = "handlerVisited=true; path=/";
    authFunction();
  } else {
    window.location = "/user-agent/index.html";
  }
}
