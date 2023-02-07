import { Link } from "react-router-dom";
import * as C from "./styles";
import { ReactComponent as ProfileIcon } from "../../svgs/profile.svg";
import { ReactComponent as BookIcon } from "../../svgs/book.svg";
import { ReactComponent as MailIcon } from "../../svgs/mail.svg";
import { ReactComponent as CheckIcon } from "../../svgs/check.svg";
import { ReactComponent as TeamIcon } from "../../svgs/team.svg";
import React from "react";

type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
  allowed: boolean;
};

export const SidebarItem = ({
  title,
  description,
  icon,
  path,
  active,
  allowed,
}: Props) => {
  return (
    <C.Container>
      <Link className={allowed ? "" : "isDisabled"} to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>
        <C.IconArea active={active}>
          {icon === "profile" && (
            <ProfileIcon fill="white" width={24} height={24} />
          )}
          {icon === "book" && <BookIcon fill="white" width={24} height={24} />}
          {icon === "mail" && <MailIcon fill="white" width={24} height={24} />}
          {icon === "team" && <TeamIcon fill="white" width={24} height={24} />}
          {icon === "check" && (
            <CheckIcon fill="white" width={24} height={24} />
          )}
        </C.IconArea>
        <C.Point active={active}></C.Point>
      </Link>
    </C.Container>
  );
};
