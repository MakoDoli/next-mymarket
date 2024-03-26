import React, { useEffect } from "react";
import getCabins from "../../../services/apiMobiles";
export default function Mobiles() {
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  }, []);
  return <div>Mobiles arrived</div>;
}
