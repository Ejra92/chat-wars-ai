import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { render } from "@testing-library/react";
import { planetsParamsWithoutPage, wrongExploreParams } from "@/lib/tests-utils";
import RedirectToExploreByIdPage from "./page";

jest.mock('next/navigation');

describe('RedirectToExploreByIdPage suite tests', () => {
  it('Should redirect to /people/page/1 in case of have recieved an invalid path to explore', async () => {
    render(await RedirectToExploreByIdPage({ params: wrongExploreParams }) as ReactNode);

    expect(redirect).toHaveBeenCalledWith('/people/page/1', 'replace');
  });

  it('Should redirect to /{explore}/page/1 in case of have recieved a valid path to explore without a page id', async () => {
    render(await RedirectToExploreByIdPage({ params: planetsParamsWithoutPage }) as ReactNode);

    expect(redirect).toHaveBeenCalledWith('/planets/page/1', 'replace');
  });
});
