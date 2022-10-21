import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link, Outlet } from "react-router-dom";

function Portal() {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-5">
  <a class="navbar-brand" href="#">Hello, Misham!</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse logout" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link btn btn-danger text-white" to="/login">LogOut</Link>
      </li>
    </ul>
  </div>
</nav>
<Outlet/>

</div>
  )
}

export default Portal