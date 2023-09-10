import React, { FC, PropsWithChildren } from "react";

export const EmptyWrapper: FC<PropsWithChildren & Record<string, any>> = (props) => <>{props.children}</>
