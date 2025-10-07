import type { ValidPathsToExplore } from '../topic-explorer/types';

import Form from 'next/form'
import { FaSearch } from "react-icons/fa";

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button';

interface SearcherProps {
  explore: ValidPathsToExplore
}

const setPlaceHolderBy: Record<ValidPathsToExplore, string> = {
  people: 'Search your favorite character',
  planets: 'Find a planet here',
  starships: 'Find your starship',
};

export const Searcher = ({ explore }: SearcherProps) => (
  <Form
    className="flex w-[282px] gap-2 mb-6 md:mb-8"
    action={`/${explore}/search`}
  >
    <Input
      placeholder={setPlaceHolderBy?.[explore]}
      name="query"
      required
      autoComplete="off"
    />

    <Label htmlFor="trigger">
      <Button className="cursor-pointer" variant="ghost" size="icon" aria-label="Submit">
        <FaSearch />
      </Button>
    </Label>

    <Input type="submit" id="trigger" hidden />
  </Form>
);
