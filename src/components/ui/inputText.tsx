import { color, nRem, type DefaultProps, type Size, type Text } from "@/types/kit";
import { Flex } from "./flex";

export interface InputTextProps extends DefaultProps {
  pattern?: string,
  placeholder?: string,
  value?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  size?: Size,
  width?: string
}

export const InputText = ({
  placeholder = "inputText",
  pattern,
  value,
  onChange,
  size = "xs",
  width = "100%",
  ...props
}: InputTextProps) => {

  let padding: number[] = [0];
  let radius: number[] = [0];
  let gap: number = 0;
  let text: Text = "body4";
  let textSpan: Text = "mono4";
  let spanY: number = 0;
  let spanX: number = 0

  switch (size) {
    case "lg":
      padding = [8, 24];
      radius = [12];
      gap = 12;
      text = "body1";
      textSpan = "mono2";
    break;

    case "md":
      padding = [6, 16];
      radius = [8];
      gap = 8;
      text = "body2";
      textSpan = "mono3";
      spanY = 36;
      spanX = 16;
    break;

    case "sm":
      padding = [4, 8];
      radius = [6];
      gap = 6;
      text = "body3";
      textSpan = "mono3";
    break;

    case "xs":
      padding = [2, 4];
      radius = [4];
      gap = 4;
      text = "body4";
      textSpan = "mono4";
    break;
  }

  let spanSize: number;
  let spanWeight: number = 500;
  switch (textSpan) {
    case "mono2":
      spanSize = 20;
    break;

    case "mono3":
      spanSize = 16;
    break;

    case "mono4":
      spanSize = 12;
    break;
  }

  const defaultStyle: React.CSSProperties = {
    backgroundColor: color.gray1,
    color: color.gray5,
    width: width,
    cursor: "text"
  }
  const hoverStyle: React.CSSProperties = {
    backgroundColor: color.gray2,
    color: color.gray4,
  }
  const focusStyle: React.CSSProperties = {
    backgroundColor: color.accent3,
    color: color.gray5,
  }

  const inputStyle: React.CSSProperties = {
    position: "absolute",
    width: width,
    background: "none"
  }
  const spanStyle: React.CSSProperties = {
      fontFamily: `var(--font-mono)`,
      fontSize: `calc(${nRem} * ${spanSize})`,
      fontWeight: spanWeight,
      transform: `translateY(-${spanY}px) translateX(-${spanX}px)`
    }
  const extended: any = {
    "&:focus-within span": {
      color: color.accent3,
      ...spanStyle
    },
    "input:not(:placeholder-shown):not(:focus) ~ span": {
      color: color.gray1,
      ...spanStyle
    }
  }

  return (
    <Flex as="label"
      padding={padding}
      gap={gap}
      radius={radius}
      className={`${text} ${props.className}`}
      defaultStyle={defaultStyle}
      hoverStyle={hoverStyle}
      focusStyle={focusStyle}
      extended={extended}
      {...props}
    >
      <input type="text" 
        value={value}
        onChange={onChange}
        style={inputStyle}
        placeholder=""
      />
      <span>{placeholder}</span>
    </Flex>
  )
}