import type React from "react";

interface AuthorityProps {
  data?: string[];
}

export const Authority: React.FC<AuthorityProps> = (props) => {
  return <h1>权限</h1>
}