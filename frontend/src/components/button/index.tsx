import {Button} from "@mui/material"
import type {ButtonProps} from "@mui/material"
import "./index.css"

interface MuiButtonProps extends ButtonProps {}

export default function MuiButton(
    {
        children,
        variant ="contained",
        color = "primary",
        size = "medium",
        ...props
    }: Readonly<MuiButtonProps>) {
    return (
    <Button
        {...props}
        variant={variant}
        color={color}
        size={size}
        className={`custom-button ${variant} ${color} ${size}`}>
        {children}
    </Button>)
}