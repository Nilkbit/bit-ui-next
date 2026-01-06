import { A, Flex, type FlexProps } from "@/components/ui";

interface CellProps extends FlexProps {
  variant?: "default"|"default2"|"header"
}

interface CellStatusProps extends FlexProps {
  variant: "info"|"warn"|"success"|"error"
}

export type Status = "info"|"warn"|"success"|"error";

const TableCell = ({
   children,
   variant = "default",
   ...props
  }: CellProps) => {

    let classes: string;

    switch (variant) {
      case "default": classes = "color-gray5 bg-gray2 mono1"; break;
      case "default2": classes = "color-gray5 bg-gray3 mono1"; break;
      case "header": classes = "color-gray5 bg-gray1 body1"; break;
    }

    return (
      <Flex padding={[4, 8]} className={`${classes} ${props.className}`} {...props}>{children}</Flex>
    )
}

const TableStatusCell = ({
   children,
   variant,
   ...props
  }: CellStatusProps) => {

    let classes: string;

    switch (variant) {
      case "info": classes = "color-gray5 bg-info mono1"; break;
      case "warn": classes = "color-gray5 bg-warn mono1"; break;
      case "success": classes = "color-gray5 bg-accent3 mono1"; break;
      case "error": classes = "color-gray5 bg-error mono1"; break;
    }

    return (
      <Flex padding={[4, 8]} justify="center" className={`${classes} ${props.className}`} {...props}>{children}</Flex>
    )
}

const RowHeader = () => {
  return (
    <Flex gap={1} defaultStyle={{width: "100%"}}>
      <TableCell variant="header" defaultStyle={{ flex: "1 1 100%" }} radius={[12, 0, 0, 0]}>Name</TableCell>
      <TableCell variant="header" defaultStyle={{ flex: "0 0 150px" }} justify="center">Status</TableCell>
      <TableCell variant="header" defaultStyle={{ flex: "0 0 95px" }} justify="center" radius={[0, 12, 0, 0]}>Link</TableCell>
    </Flex>
  )
}

export const TableRow = ({
  name,
  status,
  link,
  statusName,
  index,
  last
}: {
  name: string,
  status: string,
  link: string,
  statusName: Status,
  index: number,
  last: boolean
}) => {
  let variant: "default" | "default2";
  if (index % 2 == 0) {
    variant = "default";
  } else {
    variant = "default2";
  }

  let radius: number[] = [0];
  let radius2: number[] = [0];
  if (last) {
    radius = [0, 0, 0, 12]
    radius2 = [0, 0, 12, 0]
  }

  const NameCell = () => <TableCell variant={variant!} defaultStyle={{ flex: "1 1 100%" }} radius={radius}>{name}</TableCell>;
  const StatusCell = () => <TableStatusCell defaultStyle={{ flex: "0 0 150px" }} justify="center" variant={statusName}>{status}</TableStatusCell>;
  const LinkCell = () => 
    <TableCell radius={radius2} variant={variant!} defaultStyle={{ flex: "0 0 95px" }} justify="center">
      <A text="mono1" colors={["gray5", "accent3"]} href={link} target="_blank">Click</A>
    </TableCell>;

  return (
    <Flex gap={1} defaultStyle={{width: "100%"}}>
      <NameCell />
      <StatusCell />
      <LinkCell />
    </Flex>
  );
}

interface ListItem {
    id: number;
    link: string | null;
    name: string | null;
    status: string | null;
  }

export const SectionTable = ({ tableList }: { tableList: React.ReactNode[] }) => {
  return (
    <Flex gap={1} direction="column" defaultStyle={{ width: "100%" }}>
      <RowHeader />
      {tableList}
    </Flex>
  );
}