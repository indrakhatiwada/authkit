import { auth } from "@/auth";
import React from "react";

const Settings = async () => {
  const session = await auth();
  return (
    <div>
      <pre>{JSON.stringify(session)}</pre>
    </div>
  );
};

export default Settings;
