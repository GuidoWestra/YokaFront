import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import { Jumbotron } from "react-bootstrap";



export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  if (user.name !== null) {
    console.log(user.name.charAt(0))
    console.log(user)
  }
  // const admin = user.isAdmin ? <LoggedIn /> :  null;
  // null could be basket and profile here

  if (user.name !== null) {
    return (
      <>
        <Jumbotron style={{ backgroundColor: "#C6DFF2", width: "50vw", marginLeft: "25vw", marginTop: "1%" }}>
          {user.name === null ? null : user.name.charAt(0)} <strong>{user.name}</strong>
          <Button style={{ marginLeft: "85%" }} variant="outline-info" onClick={() => dispatch(logOut())}>Logout</Button>
        </Jumbotron >
        <Jumbotron style={{ backgroundColor: "#C6DFF2", width: "50vw", marginLeft: "25vw", marginTop: "0.5%" }}>
          User details
          <br />
          <br />
          Username: {user.name === null ? null : user.name}<br />
          Email: {user.name === null ? null : user.email}
        </Jumbotron >
      </>
    )
  } else return (
    <Jumbotron style={{ backgroundColor: "#C6DFF2", width: "50vw", marginLeft: "25vw", marginTop: "3%", borderRadius:"3%" }}>
      <h1 className="mb-5">Oops!</h1>
      <p>It seems your no longer logged in, please login <a href="/login">here.</a></p>
    </Jumbotron >
  )

}

