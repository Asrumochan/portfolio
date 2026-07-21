import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "../../utils/cn";

type Variant = "primary" | "ghost";

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  icon?: ReactNode;
};

type LinkButtonProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

function Button({
  children,
  className,
  variant = "primary",
  icon,
  ...rest
}: ButtonProps) {
  const classes = cn("ui-btn", `ui-btn-${variant}`, className);

  if ("href" in rest && typeof rest.href === "string") {
    return (
      <a {...rest} className={classes}>
        <span className="ui-btn-label">{children}</span>
        {icon ? <span className="ui-btn-icon">{icon}</span> : null}
      </a>
    );
  }

  return (
    <button {...rest} className={classes}>
      <span className="ui-btn-label">{children}</span>
      {icon ? <span className="ui-btn-icon">{icon}</span> : null}
    </button>
  );
}

export default Button;
