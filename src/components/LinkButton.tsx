import React from "react";
import { Button, ButtonProps, LinkBox, LinkOverlay } from "@chakra-ui/react";

interface ILinkButtonProps extends ButtonProps {
  to: string;
}

const LinkButton: React.FC<ILinkButtonProps> = ({ to, children, ...rest }) => (
  <LinkBox>
    <LinkOverlay href={to} isExternal>
      <Button {...rest}>{children}</Button>
    </LinkOverlay>
  </LinkBox>
);
export default LinkButton;
