import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("http://localhost:5000/users/")
      .then((resp) => resp.json())
      .then((json) => {
        console.info(json);
      });
  }, []);
  return <div>Welcome home !</div>;
}
