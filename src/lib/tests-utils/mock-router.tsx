import type { NextRouter } from 'next/router';

import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";
import { PropsWithChildren } from 'react';

export const routerPushMock = jest.fn();

export const createMockRouter = (params: Partial<NextRouter> = {}): unknown => ({
  pathname: '/',
  push: routerPushMock,
  query: {},
  ...params,
});

export const MockRouter = (
  { children, value }: PropsWithChildren<{ value: NextRouter }>
) => (
  <RouterContext.Provider value={value}>
    {children}
  </RouterContext.Provider>
);
