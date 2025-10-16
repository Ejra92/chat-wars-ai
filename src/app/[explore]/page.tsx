import type { ValidPathsToExplore } from "@/features/topic-explorer/types";

import { redirect, RedirectType } from "next/navigation";

import { validPathsToExplore } from "@/features/topic-explorer/utils";

interface Params {
  params: Promise<{ explore: ValidPathsToExplore }>;
};

export default async function RedirectToExploreByIdPage({
  params,
}: Params) {
  const { explore } = await params;

  if (!validPathsToExplore.includes(explore)) {
    redirect('/people/page/1', RedirectType.replace);
  }

  redirect(`/${explore}/page/1`, RedirectType.replace);
};
