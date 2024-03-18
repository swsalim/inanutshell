import React, { forwardRef } from 'react';
import clsx from 'clsx';

import type { ReactNode, CSSProperties } from 'react';

interface OuterContainerProps {
  className?: string;
  children: ReactNode;
}

export const OuterContainer = forwardRef<HTMLDivElement, OuterContainerProps>(
  function OuterContainer(props, ref) {
    return (
      <div ref={ref} {...props} className={clsx('sm:px-8', props.className)}>
        <div className="mx-auto max-w-7xl lg:px-8">{props.children}</div>
      </div>
    );
  },
);

interface InnerContainerProps {
  className?: string;
  children: ReactNode;
}

export const InnerContainer = forwardRef<HTMLDivElement, InnerContainerProps>(
  function InnerContainer(props, ref) {
    return (
      <div ref={ref} {...props} className={clsx('relative px-4 sm:px-8 lg:px-12', props.className)}>
        <div className="mx-auto">{props.children}</div>
      </div>
    );
  },
);

interface ContainerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(props, ref) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{props.children}</InnerContainer>
    </OuterContainer>
  );
});
