"use client";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton/IconButton";
import Popover from "@mui/material/Popover";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import { MouseEvent, useState } from "react";
export default function QQBtn(props: { wrapperClassName?: string; buttonClassName?: string; displayText: boolean }) {
  const { wrapperClassName, buttonClassName, displayText } = props;
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "qq-popover" : undefined;

  const QQIcon = () => (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" fill="currentColor">
        <path d="M 12.601563 3.953125 C 17.574219 3.953125 17.824219 8.328125 18.101563 9.1875 C 18.101563 9.1875 18.492188 9.617188 18.585938 10.277344 C 18.644531 10.699219 18.398438 11.183594 18.398438 11.183594 C 18.398438 11.183594 19.988281 13.289063 19.988281 14.945313 C 19.988281 15.980469 19.679688 16.515625 19.316406 16.515625 C 18.957031 16.515625 18.425781 15.421875 18.425781 15.421875 C 18.425781 15.421875 17.597656 17.164063 17.183594 17.414063 C 16.769531 17.664063 18.675781 17.9375 18.675781 18.753906 C 18.675781 19.566406 17.160156 19.929688 15.917969 19.929688 C 14.675781 19.929688 12.695313 19.296875 12.695313 19.296875 L 11.984375 19.273438 C 11.984375 19.273438 11.429688 20.042969 9.152344 20.042969 C 6.875 20.042969 5.886719 19.433594 5.886719 18.707031 C 5.886719 17.730469 7.335938 17.597656 7.335938 17.597656 C 7.335938 17.597656 6.410156 17.34375 5.628906 15.1875 C 5.628906 15.1875 5.085938 16.351563 4.320313 16.351563 C 4.320313 16.351563 4 16.164063 4 15.105469 C 4 12.914063 5.597656 11.84375 6.285156 11.1875 C 6.285156 11.1875 6.171875 10.902344 6.230469 10.546875 C 6.300781 10.148438 6.535156 9.910156 6.535156 9.910156 C 6.535156 9.910156 6.449219 9.4375 6.78125 9.054688 C 6.851563 7.988281 7.632813 3.953125 12.601563 3.953125 M 12.625 1.996094 C 7.210938 1.996094 5.292969 5.820313 4.953125 8.386719 C 4.789063 8.699219 4.699219 9.023438 4.660156 9.324219 C 4.535156 9.566406 4.417969 9.863281 4.355469 10.214844 C 4.34375 10.304688 4.332031 10.390625 4.324219 10.476563 C 3.386719 11.328125 2.019531 12.777344 2.019531 15.214844 C 2.019531 16.90625 2.652344 17.628906 3.183594 17.9375 L 3.582031 18.171875 L 4.046875 18.171875 C 4.058594 18.171875 4.074219 18.171875 4.089844 18.171875 C 4.015625 18.410156 3.976563 18.667969 3.976563 18.945313 C 3.972656 19.664063 4.339844 22 9.050781 22 C 10.773438 22 11.851563 21.632813 12.511719 21.242188 C 13.207031 21.445313 14.828125 21.882813 16.054688 21.882813 C 18.820313 21.882813 20.605469 20.75 20.605469 18.996094 C 20.605469 18.683594 20.546875 18.402344 20.445313 18.160156 C 21.257813 17.792969 21.964844 16.855469 21.964844 15.054688 C 21.964844 13.472656 21.078125 11.816406 20.476563 10.871094 C 20.523438 10.601563 20.539063 10.300781 20.496094 9.988281 C 20.398438 9.285156 20.113281 8.730469 19.886719 8.382813 C 19.878906 8.351563 19.871094 8.316406 19.867188 8.285156 C 18.976563 4.113281 16.539063 1.996094 12.625 1.996094 Z" />
      </svg>
    </SvgIcon>
  );

  return (
    <span className={wrapperClassName}>
      {displayText && (
        <Button variant="text" className={buttonClassName} onClick={handleClick} startIcon={<QQIcon />}>
          QQ群
        </Button>
      )}
      {!displayText && (
        <IconButton aria-describedby={id} onClick={handleClick} sx={{ padding: "6px" }}>
          <QQIcon />
        </IconButton>
      )}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>雷索纳斯交流群 474679095</Typography>
      </Popover>
    </span>
  );
}
